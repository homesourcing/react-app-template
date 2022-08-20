## Code Quality Stuff

`dependabot` - from GitHub

The dependabot makes sure your project is always up-to-date. This is very important.

`husky` - https://typicode.github.io/husky/#/

The template comes pre-configured with Husky and cheks the code quality using the `Google TypeScript Style Guide`.

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

`MirageJS` - https://miragejs.com/quickstarts/react/develop-a-component/

Excellent tool that allows you to mock out the back end. It works both for writing tests and for development.

`react-i18next` - https://react.i18next.com/guides/quick-start

Best library for internationalization. Will likely be needed when working with European clients as they like to have their apps localized.

## Optional (Does not come installed by default)

`Mantine` - https://mantine.dev/pages/getting-started/

Very nice UI Component kit library based on TypeScript. I would recommend avoiding the use of `@mantine/forms` but everything else is excellent.    

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