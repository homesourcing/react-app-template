## IDE Setup

I recommend either `VSCode` or `WebStorm`.
For WebStorm users there is an included .idea folder that contains the necessary configuration.

I think you should always be using format on save (prettier) + optimize imports.

## VS Code:

Recommended theme: `One Dark Pro`

Recommended font: `FiraCode Pro`

Recommended file icons: `Material Design Icons`

Recommended plugins: `GitHub Copilot`, `SonarLint`, `i18n Ally`

Shortcuts:

`F1` - Run most commands from one place.

`CTRL + P` - Search for file. Good for quickly opening new things without having to find them through the explorer.

`right click + go to definition` - Very useful for navigating code you are not used to yet.

## WebStorm:

Font, theme, and file icons are all default as it already comes with `JetBrains Mono`

Recommended plugins: `GitHub Copilot`, `SonarLint`, `i18n Ally`

Shortcuts:

`CTRL + Shift + F` - Search for any text on the project.

`Shift + Shift` - Search anywhere for most things such as classes, functions, etc.

`CTRL + B` - Very useful for navigating code you are not used to yet. Basically a quicker version of go to definition.

## Code Quality Stuff

`.github`

The dependabot makes sure your project is always up-to-date. This is very important.

The pull request action serves as a basic template for running tests and styling checks before you merge the code.
You should always open a pull request and let these actions run before you merge your code.

`.husky` - https://typicode.github.io/husky/#/

The template comes pre-configured with Husky and checks the code quality using the `Google TypeScript Style Guide`.

`Google TypeScript Style Guide` - https://google.github.io/styleguide/tsguide.html

There is a linting setup that basically forces you to follow these conventions.

There are also some example components / pages that serve as a starting point for your project.
The goal here is to give you an idea on how to structure your project so it's readable as it grows in size.

## Comes with

`TypeScript` - https://www.typescriptlang.org/

Should be mandatory for any serious modern JavaScript projects.

`@tanstack/react-query` - https://tanstack.com/query/v4/docs/overview

Very nice library for fetching data. Pairs nicely with components, comes with caching, loading states etc.
This usually completely eliminates the need for using redux as well.

`styled-components` - https://styled-components.com/docs/basics

Very nice library for styling components. Lets you write CSS in JS.

`axios` - https://axios-http.com/docs/intro

Best HTTP client library.

`react-i18next` - https://react.i18next.com/guides/quick-start

Best library for internationalization. Will likely be needed when working with European clients as they like to have their apps localized.

`react-router-dom` - https://reactrouter.com/docs/en/v6/getting-started/overview

Routing library that you will need for 99% of single page apps.

`Mantine` - https://mantine.dev/pages/getting-started/

Very nice UI Component kit library based on TypeScript. I would recommend avoiding the use of `@mantine/forms` but everything else is excellent.

If you don't like Mantine feel free to get rid of it and install something else.
The pre-installed parts of it are `@mantine/core` and `@mantine/hooks`.

`msw` - https://mswjs.io/docs/

Mock Service Worker is used mainly for mocking out the back end when you're writing integration tests.

## Available Scripts

First you need to run

### `npm install`

Then, in the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.