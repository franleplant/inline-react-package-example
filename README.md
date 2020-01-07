# Example of a inline-react-package

To see `mylib` in action it please use two terminals


**Terminal 1**

```sh
cd mylib

# Install dependencies
yarn

# Link it so that the playground can consume it
yarn link

# Build a fresh copy
yarn build

# Or, Watch for changes and rebuild
yarn watch
```

**Terminal 2**

```sh
cd playground

# Install dependencies
yarn

# use my-lib
yarn link my-lib

# Build a fresh copy
yarn start
```


Note
- This is rather rudimentary dev workflow, if you want to have a similar playground for components you should use something like Storybook. This is just to simulate a real world component usage.

- For emotion theming to really work there needs to be a single copy of `@emotion/core` in your app, otherwise theme composition wont work (which is 50% of the reason for having a theme to begin with). Enforce this by having all `emotion` packages be peer dependencies of your libraries and a direct dependency of your app.
