# About

This is Webpack 4 configuration for ES5/ES6 React components written in Typescript to be used as a module in other apps or modules.

Develop, debug, test and distribute react component(s) easy.

# Usage

Replace the `my-awesome-react-component` with the name of you new module. A new folder will be created with this name from the point you will call it. 
```
git clone http://github.com/aneldev/dyna-ts-react-module-boilerplate my-awesome-react-component
cd my-awesome-react-component
yarn run create
```
That's it. 

# Why is `create-react-app` different?

It is different because `create-react-app` creates react applications and includes everything an application needs.

The `dyna-ts-react-module-boilerplate` creates modules, it creates react components that will be used in react applications or in other modules.

Tip: Instead of `create-react-app` use the `create-react-app-typescript` where forks the `create-react-app` and supports Typescript.

# Compatibility

- React 16

For React 15 use the tag v4.1.5 of this repo.

# Features

- Write in Typescript, .tsx, .ts, but also .jsx & .js are supported
- Ready for react-router, dev server serves deep links and multiple ports
- Load inline images
- Configured font loader
- Load Fonts Awesome
- Supports CSS, SCSS & LESS on the same time
- cssModules (with `*.module.less/scss` filename pattern)
- Test with Jest, snapshots are also supported
- Distribute as module with TypeScript Definitions (ready to import)
- Distributed versions works in Javascript and Typescript projects
- Detect circular dependencies (where leads to import `undefined` or `null` values)

# Environment

This boilerplate runs only under Linux.

Scripts of this package are not designed for windows command line!

For windows users there are multiple ways: 
- [Git bash](https://git-scm.com/downloads) (probably you have this already installed on your machine)
- [Win10 Ubuntu shell](https://www.howtogeek.com/249966/how-to-install-and-use-the-linux-bash-shell-on-windows-10/) _recommended for windows users_
- [Cygwin terminal](http://www.cygwin.com/)
- Any other bash command line

# Folder structure

The source code of your project is under the `/src/` folder only. What will be distributed is what it is exported from the `/src/index.tsc`.

There are loaders for various files, like: `.less`, `.scss`, `.svg`, `.jpg`, `etc.`. Loaders *are loaded* in `/webpack.loaders.js`, where you can add your own loaders that will be used for all tasks (npm scripts).

Under the `/dev/app/` folder there is a small web application that uses this component in different ways. This way you can develop, debug and make a showcase to demonstrate of how your component(s) can be used.

Under the `/dev/public/` folder is the http folder of the application, you should not do anything there because this is not distributed.

# Develop

## Start the Demo

`yarn start`

or, if you want to start it to different port

`yarn start-to -- 3232`

to start in port 3232.

This is useful if you want to run other Component Demos at the same time.

The app is always exposed to `127.0.0.1` by default. 

## Develop with the Showcase as Demo

This boilerplate uses the [dyna-showcase](https://github.com/aneldev/dyna-showcase) to show how your module is rendered under different props. The concept is the same as the StoryBook but it is much lighter and without styles and some tools that help the debugging and development. 

- Implement your component(s) under `src/`
- Implement the usage of your components(s) in `dev/showcase/showcase.tsx`
- Call `yarn start`
- Open in any browser [http://localhost:3200](http://localhost:3200) to **develop**, **debug** or **preview**.

## Develop with you custom Demo

If you don't want to use the `dyna-showcase` for any reason you should do this:
- remove the `dyna-showcase`, with `yarn remove --dev dyna-showcase`
- delete all the files under the `./dev`, except the `./dev/index.tsx`
- develop your demo app under the `./dev` folder
- load your demo from the `./dev/index.tsx`

The `yarn start` will launch your app. 

# Test

## Write tests

For tests this boilerplate uses the [Jest](https://facebook.github.io/jest/).

Test files can be anywhere but they should have a name `*.(test|spec).(ts|tsx|js|jsx)`. There is a `tests/` folder if you want to use it but this is not mandatory.

## Run tests
 
Call `yarn test` to run your tests and coverage.

Call `yarn test-watch` to run your tests after any change, with no coverage.

# Build

`yarn build`

Build creates your distributable version of your component under `./dist`. Typescripts declaration will be created there too.

You don't really need to use the `build`, since the `release` script is calling the `build`.

You will need this is if you have linked this package with another local package (like yarn link or so).

# Release

`yarn release`

- builds the component
- bumps the patch version
- publishes to npm _and_
- is pushes the changes to your repo

The output is not compressed, while it is intended to be used in other apps where it will be bundled and compressed. This also makes your component debuggable.

**For private packages**, where you don't want to expose them to `yarn`, remove the `yarn pulish` call from the `publish-push` script.

# Exclude dependencies from the output bundle

You can exclude dependencies from the distributed bundle by declaring them in the `/webpack.dist.config.hs`. By default, all dependencies are declared there. 

# Features (tips)

## Link your modules easily

In case that the `yarn link` doesn't work correctly this boilerplate offers a ready sync unidirectional mechanism.

0. Copy `./syncExternalsList.sample.js` to `./syncExternalsList.js` once only. 
1. Update the `./syncExternalsList.js` list with external apps you want to keep them sync.
2. Call `yarn sync-externals`

If you use the Ubuntu shell of Win10, in the `./syncExternalsList.js` you can add a windows path prefixing it with the `*tus*`, _which stands for `to ubuntu shell`_.

Example, check the 2nd line of `./syncExternalsList.sample.js`.

**Note:** the `./syncExternalsList.js` is git ignored! 

# Known issues

- HMR is not working

_Forks are welcome!_

# Interesting for typescript module (without react component)?

If you are interested in a **typescript module**, with other words if you want to implement everything like we do here but without any react components, check this out this [dyna-ts-module-boilerplate](https://github.com/aneldev/dyna-ts-module-boilerplate) repo.

# References

[Webpack configuration](https://webpack.github.io/docs/webpack-dev-server.html#webpack-dev-server-cli)
