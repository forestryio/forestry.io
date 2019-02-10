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
For the past 3 years, we have been using Typescript and React at [Forestry.io](http://forestry.io). In that time we have used and abused many of the React community's patterns for extracting common behavior. The three most important patterns–listed chronologically–are:

1. Higher Order Components (HOCs)
2. Render Props
3. Hooks

We have seen these patterns collide with the realities of a rapidly changing code base. Each of these patterns has been a significant improvement on it's predecessor. To demonstrate this claim, we'll take a look at how each of these patterns can be used to create a re-useable abstraction for fetching user data and passing it to a component.

[Browse the source on Github!](https://github.com/forestryio/react-patterns-article)

## The Presentation Component

Below is the `UserInfoView`, a simple component that renders a little piece of UI with the users name, email address, and button to logout. The demo components needs to load and render this information.

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

## HOCs

**src/components/hoc-demo/index.tsx**

[Source](https://github.com/forestryio/react-patterns-article/blob/master/src/components/hoc-demo/index.tsx)

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

***

**src/components/hoc-demo/UserInfoContainer.tsx**

[Source](https://github.com/forestryio/react-patterns-article/blob/master/src/components/hoc-demo/UserInfoContainer.tsx)

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

***

**src/components/hoc-demo/withUser.tsx**

[Source](https://github.com/forestryio/react-patterns-article/blob/master/src/components/hoc-demo/withUser.tsx)

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

Good:

1. The API for `UserInfo` is really simple. 
2. `Sidebar` is extremely easy to read.

Bad:

 1. `withUser` in no way adheres to the Singe Responsibility Principle (SRP).
 2. We're adding components to the JSX expression to handle data fetching.
 3. The constructed component both loads data and renders _specific_ presentation components. If you need to switch out the `Spinner` component for `UserInfo`, you will need to create _another_ component using `withUser`.
 4. Any time an existing component needs access to the user, a new component must be created using `withUser`. This means you will have to find all uses of that component, and replace them with calls to a completely different component.
 5. The props that the `UserInfoContainer` accepts are the union of both `WithUser`'s props and `UserInfo`'s props.
 6. Getting the types right requires some gymnastics. They are cumbersome, error prone, and hard to read.
 7. This API would not make it possible to fetch multiple pieces of data in parallel, because the parent must finish loading before the child can start. 
 8. Functions that create classes gives me the heebie-jeebies.
 9. This is a lot of code, which means there's a big surface area for bugs.
10. The number and variety of tests required to get this covered is high.
11. The type errors for `UserInfoContainer` are horrifying. For example, if you try to add an unwanted `cake` prop you will see the following compilation warning:

        Type '{ email: string; logout: () => string; cake: string; }' is not assignable to type 'IntrinsicAttributes & IntrinsicClassAttributes<withUser<Props>.WithUser> & Readonly<{ children?: ReactNode; }> & Readonly<WithUserProps>'.
          Property 'cake' does not exist on type 'IntrinsicAttributes & IntrinsicClassAttributes<withUser<Props>.WithUser> & Readonly<{ children?: ReactNode; }> & Readonly<WithUserProps>'.ts(2322)

## Render Props/Children

**src/components/render-props-demo/index.tsx**

[Source](https://github.com/forestryio/react-patterns-article/blob/master/src/components/render-props-demo/index.tsx)

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

***

**src/components/render-props-demo/WithUser.tsx**

[Source](https://github.com/forestryio/react-patterns-article/blob/master/src/components/render-props-demo/WithUser.tsx)

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