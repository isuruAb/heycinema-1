This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Discussion

The technologies/tools used to build the app: React JS, Javascript, HTML, SASS, Bootstrap.

## Requirements

1. The basic ​heycinema​ ​header, as seen in the style guide.
2. A ​search bar​ that takes a string and calls the OMDB search endpoint on submit.
3. A list of ​search results​, displayed as ​tiles​ with the following information: ○ Image ○ Name ○ Year of release
4. Loading and error states handled.
5. Mobile friendly

## Feature List

1. Search movie
2. List search result
3. Mobile friendly

## Improvement Area

1. Redux store integration instead of local state as a store.
2. SEO friendly route for search & pagination

## Architecture

![react_app_architecture](https://user-images.githubusercontent.com/4952523/74857238-6c305600-5369-11ea-8b36-4a4c062ce3f3.jpg)

High Level Architecture

1. **Local Store:** This holds the whole state tree of the application. The only way to change the state inside it is via useQuery.
2. **Components:** The building blocks of React app. It is a javascript class/function accepts inputs(i.e. props) and returns a React element that describes how the UI should appear.
3. **useQuery hook:** A javascript function that is responsible to interact with the server, keeps server data copy in the local store and expose the store data to the components.

## Directory Structure

```
src
├── config
│   └── routes.js
├── components                          Collection of independent, reusable pieces (components)
│   └── Header                          (Example) Functional Component                                                    
│       ├── index.js                                                     
│       ├── index.module.scss           Css modules                                                    
│       ├── index.test.js               Component unit test   
│   └── ......  
└── container                           A single web page representation
│   └── Search.js                       (Example) A page to search and list movie 
│   └── ......                       
└── hooks                               Collection of custom hooks
│   └── useQuery.js 
│   └── ......     
└── styles                              Theme configuration
│   └── colors.scss 
│   └── custom.scss                         
```

## Why useQuery

Most of the react app does the following common execution:
1. Call API
2. Dispatch action (assume that this app is using redux store)
3. Cache the API response in store
4. Return store data as props to components.

useQuery is the very dynamic function that clubs all of the above in a very minimal and straightforward way.
It has very generic function to call API.
It has very generic function to dispatch action indicating api pending / success / failure.
It has very generic function to manipulate store based on API response.
It has very generic function to return store data to the components.

**It eliminates very repetative code hence reducing bugs & efforts**

## .env.sample - Environment variables

In your local machine before running the code, rename .env.sample to .env and replace the required valuess.

## How to run

In the project directory, you can run:

### `npm install`

Install all the dependencies require to run the application.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## CI/CD

Circle CI is used for CI
Heroku is used for CD. Heroku has .env values and can be configured/changed from Heroku admin panel.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
