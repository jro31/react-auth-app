Starting from [Create React App](https://github.com/facebook/create-react-app), this is the **React** repo of the [React + Rails API Authentication](https://youtube.com/playlist?list=PLgYiyoyNPrv_yNp5Pzsx0A3gQ8-tfg66j) course (the Rails repo can be found [here](https://github.com/jro31/rails-authentication)), and includes commits of examples of:

* Part 5 - [Generating and Configuring the React JS Authentication Application](https://youtu.be/ZAu_7tQnXTo) (note that I used 'Create React App', rather than the project used in the video)
  * Adding `react-router-dom` and `axios`, and creating the `<Home>` and `<Dashboard>` components and adding their routes - [Commit link](https://github.com/jro31/react-auth-app/commit/98ffef487d612763ff33fae9c8316c2f35d94370)
    * Note that I installed version 5 of `react-router-dom` (with `npm install react-router-dom@5`) because version 6 has removed the `<Switch>` component being used in the tutorial
* Part 6 - [Building the React Registration Component](https://youtu.be/AWLgf_xfd_w)
  * Creating the `<Registration>` component, and successfully creating a user in the Rails app, from the form in this component - [Commit link](https://github.com/jro31/react-auth-app/commit/b0ead1530d592dd6b0889533b46276e2ef537678)
    * To replicate this with the exact code in this commit, make sure that the Rails app is running at `http://localhost:3001/`
* Part 7 - [React JS Render Props for Managing the Logged In State and Redirecting Users](https://youtu.be/zSt5G3s3OJI)
  * Adding a `loggedInStatus` state and passing this through the `<Route>` props to the `<Home>` and `<Dashboard>` components - [Commit link](https://github.com/jro31/react-auth-app/commit/deaad1183cb8e78018e49f72c35161232a4f0dc5)
  * Redirecting the user to the `<Dashboard>` page when their registration is successful - [Commit link](https://github.com/jro31/react-auth-app/commit/82a71e578f57d452b7807333bb864f11881f078a)
  * Updating the `loggedInStatus` and setting the `user` state when a user successfully registers - [Commit link](https://github.com/jro31/react-auth-app/commit/47924435e472896763382d297f5d1c65ee2dfe4a)
* Part 8 - [Building the Login Component in React JS](https://youtu.be/QoLUB0QkUaE)
  * Creating a `<Login>` component and allowing users to login from the homepage - [Commit link](https://github.com/jro31/react-auth-app/commit/07804cce5baacb24cd0365bdac60668b90202393)
* Part 9 - [How to Check if a User is Logged In with React](https://youtu.be/EbUNgXQIqrk)
  * Check whether a user is logged-in by calling `http://localhost:3001/logged_in` from `useEffect()` in `App.js` - [Commit link](https://github.com/jro31/react-auth-app/commit/856f1b10b03282a3504cca27ee81a650149262fe)
