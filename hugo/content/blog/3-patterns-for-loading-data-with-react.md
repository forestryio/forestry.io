---
title: 3 Patterns for Loading Data with React
description: ''
date: 2019-02-09 17:00:00 -1100
authors:
- Nolan Phillips
publishdate: 2019-02-09 17:00:00 -1100
expirydate: 2030-01-01 04:00:00 +0000
headline: ''
textline: ''
images: []
categories: []
tags: []
cta:
  headline: ''
  textline: ''
  calls_to_action: []
private: false
weight: ''
aliases: []
menu: []
draft: true

---
For the past 3 years, we have been using Typescript and React at [Forestry.io](http://forestry.io). We have used-and-abused many of the React community's patterns for extracting common behaviour. The three most important patterns–listed chronologically–are:

1. Higher Order Components (HOCs)
2. Render Props
3. Hooks

We have seen these patterns collide with the realities of a rapidly changing code base. Each of these patterns has been a significant improvement on its predecessor. In this article we'll demonstrate how each of these patterns can be used for data fetching, and the pros and cons of each approach.

[Browse the source on Github!](https://github.com/forestryio/react-patterns-article)

## The Presentation Component

**src/components/UserInfo.tsx**

```typescript
import * as React from "react";
import { User } from "../user";

interface Props {
  user: User;
  logout(): void;
}

export const UserInfo = ({ user, logout }: Props) => (
  <div>
    <h2>{user.firstName}</h2>
    <p>{user.email}</p>
    <button onClick={logout}>Logout</button>
  </div>
);
```

Above is `UserInfo`–a simple component that renders the users name, email address, and button to logout. The demo components need to load this information so it can be rendered by `UserInfo`.

## HOCs

### **TL;DR:**

Good:

1. The API for `UserInfo` is really simple.
2. `HocDemo` is extremely easy to read.

Bad:

1. The API of HOCs vary a lot so it can be hard to tell what they do
2. Components count goes up since the generated classes are often difficult to reuse.
3. The `withUser` component breaks the Singe Responsibility Principle (SRP) by handling both data fetching and UI rendering.
4. Dynamic types are difficult, error prone, and fragile.
5. Compiler errors are obtuse.
6. This API would make it difficult to fetch multiple pieces of data in parallel.
7. Dynamically creating classes is magical. Magic is powerful but scary.

One other point I haven't expanded upon:

1. Datafetching is declared by an element in our JSX; hella weird.
2. This is a lot of code, which means there's a big surface area for bugs, so the number and variety of tests required to get this properly covered is very high.

### src/components/hoc-demo/index.tsx – [Source](https://github.com/forestryio/react-patterns-article/blob/master/src/components/hoc-demo/index.tsx)

```typescript
import * as React from "react";
import { UserInfoContainer } from "./UserInfoContainer";

export const HocDemo = () => {
  let logout = () => (window.location.href = "/logout");

  return (
    <UserInfoContainer 
      email="bob@example.com" 
      logout={logout} 
    />
  );
};
```

The first impression of this pattern is a good one. The `UserInfoContainer` has a clean and simple API. Unfortunately the apparently cleanliness of this API is a result of "sweeping dust under the rug". As we dig into the implementation it will be come clear how complex `UserInfoContainer` really is, and how difficult making changes can be.

### **src/components/hoc-demo/UserInfoContainer.tsx –** [**Source**](https://github.com/forestryio/react-patterns-article/blob/master/src/components/hoc-demo/UserInfoContainer.tsx)

```typescript
import { withUser } from "./withUser";
import { UserInfo } from "../UserInfo";
import { LoadingScreen } from "../LoadingScreen";
import { ErrorScreen } from "../ErrorScreen";

export const UserInfoContainer = withUser(
  UserInfo, 
  LoadingScreen, 
  ErrorScreen
);
```

Unless you're familiar with HOCs already–and maybe even then–looking at the source of `UserInfoContainer` will probably give you pause. It turns out that `UserInfoContainer` is actually generated dynamically by the `withUser` function. The returned component renders the `LoadingScreen` while the user is loading, then renders either the `UserInfo` or the `ErrorScreen` depending on whether the request is successful or not. Not all HOCs have this API but that's part of the problem. Most HOC APIs have many configuration options. There is just no way to know what's happening, without reading the docs or source. As we will see shortly, you better hope the documentation is good; HOCs are often dense and difficult reads.

Aside from their opacity the, HOCs are surprisingly difficult to re-use. Any time an existing component needs the user, you must first create another component. If `A` renders `B`, but now you want `B` to be given the user, you must create a third component `withUser(B, ...)` that will be rendered by `A` now instead. The same applies to swapping out the `LoadingScreen` for a simpler spinner–you're going to have to create a new component. Over time this proliferation of one-line container components can make navigating your code base difficult.

### **src/components/hoc-demo/withUser.tsx –** [**Source**](https://github.com/forestryio/react-patterns-article/blob/master/src/components/hoc-demo/withUser.tsx)

```typescript
import React from "react";
import { User } from "../../user";
import { loadUser } from "../../api";

// These are three pieces of state we must keep track of.
interface WithUserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

// The component we're wrapping must accept at least a `user`.
interface BaseComponentProps {
  user: User;
}

// This HOC takes in 3 components:
// 1. `Component` is rendered once the data is loaded.
// 2. `Loading` is rendered while loading.
// 3. `Error` is rendered if there's an error in loading the data.
export function withUser<P extends BaseComponentProps = BaseComponentProps>(
  Component: React.ComponentType<P>,
  Loading: React.ComponentType<{}>,
  Error: React.ComponentType<{}>
) {
  // WithUser's props will have all of the wrapped components props,
  // except for "user", and it will also have an "email" prop.
  //
  // For example, when given:
  //
  //   withUser<{ user: User, trialDaysRemaining: number }>
  //
  // The expected props will be:
  //
  //   type WithUserProps = { trialDaysRemaining: number, email: string }
  type WithUserProps = Pick<P, Exclude<keyof P, "user">> & { email: string };

  return class WithUser extends React.Component<WithUserProps, WithUserState> {
    state: WithUserState = { user: null, loading: true, error: null };

    componentDidMount() {
      this.loadUser(this.props.email);
    }

    componentDidUpdate(prevProps: WithUserProps) {
      if (prevProps.email !== this.props.email) {
        this.loadUser(this.props.email);
      }
    }

    loadUser = (email: string) => {
      loadUser(email)
        .then(this.setUser)
        .catch(this.setError);
    };

    setUser = (user: User) => this.setState({ user, loading: false });

    setError = (error: string) => this.setState({ error, loading: false });

    render() {
      if (this.state.loading) return <Loading />;
      if (this.state.error) return <Error />;

      let { email, ...componentProps } = this.props;

      return <Component {...componentProps} user={this.state.user} />;
    }
  };
}
```

Opening up `withUser`, we see that it is dynamically creating a class called `WithUser`, which is handling both data fetching and conditional rendering. This violation of the Single Responsibility Principle is subtle, but is what leads to the unfortunate proliferation of components when `UserInfo` is used in two different locations with different `Loading` components.

There are two odd things about the way these components are rendered. First, `WithUser` references its child components as variables. Second, it actually accessing them through a closure. While this is not necessarily a bad thing, it does add a slight smell to the code.

**_Gymnastics in Types_**

And check out those types! Getting the types right requires some unpleasant gymnastics. The types are complex, error prone, and hard to read. Aside from all these things, they are extremely fragile. The most painful part of using Typescript, in my experience, has been the process of switching `withUser(A, B, C)` to `withUser(A as any, B, C)` after a new Typescript version breaks the types for the HOCs. This problem is amplified by the dynamic nature of the types, which makes them error messages cryptic and frightening. For example, if you were to accidentally pass a `cake` prop to `HostingInfoContainer` you would be given the following error:

    Type '{ email: string; logout: () => string; cake: string; }' 
      is not assignable to type 
       'IntrinsicAttributes 
        & IntrinsicClassAttributes<withUser<Props>.WithUser> 
        & Readonly<{ children?: ReactNode; }> 
        & Readonly<WithUserProps>'.
      Property 'cake' does not exist on type 
      	'IntrinsicAttributes 
         & IntrinsicClassAttributes<withUser<Props>.WithUser> 
         & Readonly<{ children?: ReactNode; }> 
         & Readonly<WithUserProps>'.
      ts(2322)

While a helpful bit of text is in the message ("Property 'cake' does not exist") it still could use some work.

**The Flow of Props**

Another gripe I have with the way `WithUser` works is that it messes with the flow of props. The whole point of `WithUser(UserInfo)` is to pass new data to it's wrapped component–which is fine–but it _also_ passes everything else that it's given to the wrapped component. The types should prevent `UserInfo` from being given unexpected props, but the challenge of correctly typing HOCs means this doesn't always happen in practice.

Why is this a problem? Experience has shown that implicit passing all parent props makes tracing the flow of props through the app difficult. Determining where a piece of data comes from, or where it will be used, can be a pain. Am I being overly fussy? Maybe for this contrived example; but this friction in tracing data flow can become a real problem as the project grows.

**Problems Compound**

I'm going to take a step back from this particular HOCs to mention that using this kind of composition for data fetching does not scale. Consider what happens when we want to also load a list of notifications to show with the `UserInfo`. Assuming we put that behaviour into a similar HOC as `withUser`, we might try something like this:

```typescript
const UserInfoWithUser = withUser(
  UserInfo, 
  LoadingScreen, 
  ErrorScreen
);

export const UserInfoContainer = withNotifications(
  UserInfoWithUser, 
  LoadingScreen,
  ErrorScreen
);
```

There are two issues with this approach: it is slow and it causes UI flickering. 

The slowdown is because the notifications request must finish before the user request can even begin. Can you get around this? Probably, if you happen to own `withUser`, but it's going to be hard, and the typing issues mentioned earlier will probably get even worse. Besides you probably won't own all of the HOCs you use. This difficulty in designing HOCs that let you make requests in parallel is a serious disadvantage to this pattern. It's not impossible but it's a lot harder than the alternatives (RenderProps and Hooks).

Flickering can occur even though both HOCs are being given the same `LoadingScreen` component. This flickering occurs because a new instance of `LoadingScreen` is created for each request/HOC. The re-mounting will cause the spinner to move back to its original position, resulting in a strange twitch in its spin. Decoupling the rendering of the `LoadingScreen` from the loading of data is the only way I know how to do that, but this would require significant amounts of refactoring. Most likely it would require the addition of a third component between `WithUser` and `UserInfo`.

Finally, dynamically creating classes is magical. And while magic is powerful it is also dangerous and we tend to have less control over it then we think.

## Render Props/Children

**TL;DR**

Good:

1. `WithUser` does a better job of respecting SRP.
2. `WithUser` accepts only what it needs in order to load the user (i.e. `email`)
3. The types are significantly easier to understand.
4. We no longer need to create a new component when we need to start loading the user for an existing component.
5. It is now possible to fetch multiple pieces of information in parallel.

Bad:

1. Data fetching is still happening inside our JSX expression..
2. We've actually added lambdas to the JSX that conditionally render children.
3. `RenderProps` is requires the use of closures for `logout` to be passed to `UserInfo`.
4. Although we could fetch multiple pieces of information in parallel, doing so would require nesting our lambdas and increasing the closure scope. This quickly leads to a pyramid of doom.

**src/components/render-props-demo/index.tsx –** [**Source**](https://github.com/forestryio/react-patterns-article/blob/master/src/components/render-props-demo/index.tsx)

```typescript
import * as React from "react";
import { WithUser } from "./WithUser";
import { LoadingScreen } from "../LoadingScreen";
import { ErrorScreen } from "../ErrorScreen";
import { UserInfo } from "../UserInfo";

export const RenderPropsDemo = () => {
  let logout = () => (window.location.href = "/logout");

  return (
    <WithUser email="bob@example.com">
      {user => {
        if (user.loading) return <LoadingScreen />;
        if (user.error || !user.data) return <ErrorScreen />;
        return <UserInfo user={user.data!} logout={logout} />;
      }}
    </WithUser>
  );
};
```

This demo component is longer than the `HocDemo`, but it has several improvements over the HOC pattern.

The `WithUser` component is now addressed explicitly in the demo. This component takes a function as a child, and passes the state of the request to that function. Now it only accepts `email`–the prop needed to load the user. No other props are accepted, so it doesn't pass them through to the child. 

This pattern better adheres to the Single Responsibility Principle. The rendering of the `LoadingScreen` is not coupled to the loading of data. Instead, `WithUser` _only_ loads the data and its child decides how to handle that. 

It would now be possible to make multiple requests in parallel. For example:

```typescript
<WithNotifications>
  {notifications => (
    <WithUser email="bob@example.com">
      {user => {
        if (user.loading || notifications.loading) {
          return <LoadingScreen />;
        }
        if (user.error || notifications.error) {
          return <ErrorScreen />;
        }
        return (
          <UserInfo 
            user={user.data} 
            notifications={notifications.data} 
            logout={logout} 
          />;
         )
      }}
    </WithUser>
  )}
</WithNotifications>
```

This takes me to the biggest downside of this approach: complex lambda's in our JSX. Being able to embed javascript expressions is a huge benefit of JSX, but the Render Props pattern really takes that to the extreme. If you're not careful you can end up with a pyramid of doom as the lambdas pile up. 

This is a problem we've noticed particularly with the `react-apollo`.

***

**src/components/render-props-demo/WithUser.tsx –** [**Source**](https://github.com/forestryio/react-patterns-article/blob/master/src/components/render-props-demo/WithUser.tsx)

```typescript
import * as React from "react";
import { User } from "../../user";
import { loadUser } from "../../api";

// A component that provides the user through render children
interface WithUserProps {
  email: string;
  children(state: WithUserState): React.ReactNode;
}

interface WithUserState {
  data: User | null;
  loading: boolean;
  error: string | null;
}

export class WithUser extends React.Component<WithUserProps, WithUserState> {
  state: WithUserState = {
    data: null,
    loading: false,
    error: null
  };

  componentDidMount() {
    this.loadUser(this.props.email);
  }

  componentDidUpdate(prevProps: WithUserProps) {
    if (prevProps.email !== this.props.email) {
      this.loadUser(this.props.email);
    }
  }

  loadUser = (email: string) => {
    loadUser(email)
      .then(this.setUser)
      .catch(this.setError);
  };

  setUser = (data: User) => this.setState({ data, loading: false });

  setError = (error: string) => this.setState({ error, loading: false });

  render() {
    return this.props.children(this.state);
  }
}
```

1. 

## Hooks

**src/components/hooks-demo/index.tsx**

[Source](https://github.com/forestryio/react-patterns-article/blob/master/src/components/hooks-demo/index.tsx)

```typescript
import * as React from "react";
import { useUser } from "./useCurrentUser";
import { LoadingScreen } from "../LoadingScreen";
import { ErrorScreen } from "../ErrorScreen";
import { UserInfo } from "../UserInfo";

export const HooksDemo = () => {
  let logout = () => (window.location.href = "/logout");

  let user = useUser("bob@example.com");
  if (user.loading) return <LoadingScreen />;
  if (user.error || !user.data) return <ErrorScreen />;

  return <UserInfo user={user.data} logout={logout} />;
};
```

***

**src/components/hooks-demo/useUser.ts**

[Source]()

```typescript
import { useState, useEffect } from "react";
import { User } from "../../user";
import { loadUser } from "../../api";

export function useUser(email: string) {
  let [data, setData] = useState<User | null>(null);
  let [error, setError] = useState<string | null>(null);
  let [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadUser(email)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [email]);

  return { data, loading, error };
}
```

Good:

1. `useUser` hook has one job–load user data.
2. Loading data is still done the `render` body but it's no longer inside the JSX expression.
3. The types are almost entirely inferred.
4. `HooksDemo` is now flat and does not require closures to pass `logout` to `UserInfo`
5. With the user state accessible in the main body of the `HooksDemo` we could load multiple pieces of data in parallel and render a single `LoadingScreen` without nesting.

Bad:

1. hooks API is still new and a bit magical