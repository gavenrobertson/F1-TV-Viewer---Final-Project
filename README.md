# F1 Race Viewer 🏎️🏁
This project was inspired by being such huge F1 racing fans 
so we decieded to make an application that has a list of various functionality.

## What API did we use?
For this project there are only a couple of quality F1 API's 
but we decided on going with the Ergast API which can be found here:
http://ergast.com/mrd/

This API simply returns everysingle driver that has ever raced an F1 car,
it returns a list of every season raced by that driver, also it returns
the name of the races as well as the lap count and live lap data.

## Some Functionality of our Application
This is our main page that shows the list of every driver, this was 
implemented with an option to use arrow keys and navigate through the lists.

![Main Page](https://user-images.githubusercontent.com/94574064/233915317-219a248d-a860-4be0-a2ba-2498366f9197.png)

The image below details the actual races for the selected driver.

![Another Image](https://user-images.githubusercontent.com/94574064/233915491-9ef2d8b1-70c3-4efa-b993-4fcf0d01940e.png)

This image shows our lap functionality, the way we designed this lap data to be
displayed was to implement a counter that would tick and change the laps
every 5 ish seconds and then display the realtime lap data it's self.

Check it out yourself by running our app!!

*Note that drivers prior to the mid 1960s won't have lap data due to F1 not tracking it during that time.*

![Lap Functionality](https://user-images.githubusercontent.com/94574064/233915822-33a79822-35d0-4a26-b120-8e852c94edcf.png)

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
