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

Below is the `UserInfoView`, a simple component that renders a little piece of UI with the users name, email address, and button to logout. A `Sidebar` component needs to render this information, but in order to do so it must first load the user data.

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

**src/components/hoc-demo/UserInfoContainer.tsx**

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

**src/components/hoc-demo/withUser.tsx**

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

 1. `withUser` does a terrible job of adhering to the Singe Responsibility Principle (SRP).
 2. We're adding components to the JSX tree to handle data fetching.
 3. Not only that, but the loading of data is completely coupled to the rendering of _specific_ presentation components. If you need to switch out the `Spinner` component for `UserInfo`, you will need to create _another_ component using `withUser`.
 4. Every time an existing component needs access to the user, you must create a _new_ component using `withUser`. This means you would have to find all uses of that component, and replace them with calls to a completely different component and start passing in a new prop: "email".
 5. The props that the `UserInfo` component accepts is the union of both `WithUser` and `UserInfo`'s props.
 6. Getting the types right requires some gymnastics. They are cumbersome, error prone, and hard to read.
 7. Dynamically defining classes gives me the heebie-jeebies.
 8. This is a lot of code.
 9. The test cases for this would be ridiculous.
10. The type errors for `UserInfoContainer` are horrifying. For example, if you try to add a `cake` prop you will get the following compilation warning:

        Type '{ email: string; logout: () => string; cake: string; }' is not assignable to type 'IntrinsicAttributes & IntrinsicClassAttributes<withUser<Props>.WithUser> & Readonly<{ children?: ReactNode; }> & Readonly<WithUserProps>'.
          Property 'cake' does not exist on type 'IntrinsicAttributes & IntrinsicClassAttributes<withUser<Props>.WithUser> & Readonly<{ children?: ReactNode; }> & Readonly<WithUserProps>'.ts(2322)

## Render Props/Children

**src/components/render-props-demo/index.tsx**

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

**src/components/render-props-demo/WithUser.tsx**

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
3. The types are significantly easier to understand and write.
4. We no longer need to create a new component when we need to start loading the user for a new component.

Bad:

1. The loading of data is still coupled to the rendering of data.
2. There are some complex lambdas in the JSX.
3. We're still adding Component to the JSX tree to handle data fetching.
4. `Sidebar` is now nested and requires the use of closures for `logout` to be passed to `UserInfo`.

## Hooks

**src/components/hooks-demo/index.tsx**

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

**src/components/hooks-demo/useUser.ts**

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

1. `useUser` hook has one job
2. Loading data is still done the `render` body but it's no longer in the JSX expression.
3. The types are almost entirely inferred.
4. `Sidebar` is now flat and does not require closures to pass `logout` to `UserInfo`
5. With the user state accessible in the main body of the `Sidebar` we could more easily load multiple pieces of data in parallel and only render a single `Loading` view.

Bad:

1. hooks API is still new and a bit magical