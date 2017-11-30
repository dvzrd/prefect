# Prefect

A full-stack JavaScript solution for **User Authentication** using *React/Redux*, *Node/Koa* and *MongoDB*.

## Stack

The following libraries and/or frameworks are used in conjunction to create the user authentication pattern:

**Client:** [React](https://github.com/facebook/react) / [Redux](https://github.com/reactjs/redux)

**Server:** [Koa](https://github.com/koajs/koa) / [Node](https://github.com/nodejs/node)

**Database:** [MongoDB](https://github.com/mongodb/mongo)

## Setup

For reasons explained in the next section, the `api/` and `app/` directories are used to decouple the **server** from the **client**. The two independent modules contain code that has seperate dependency requirements. A connection between both modules is established using terminal commands, executed seperately inside the `app/` and `api/` directories.

The **client** module requires a single operation - calling `webpack-dev-server` to bundle the app and start a development server running on localhost. The **server** module requires two seperate operations - calling `nodemon` to monitor changes in the source used to automatically restart the server, and calling `mongod` to handle data requests, manage data access, and perform background management operations as the primary daemon process for the `MongoDB` system.

### Installing dependencies

To install dependecies for both modules, open a terminal window inside the root directory and run the following commands:

```
> cd api
> npm install
> cd ../app
> npm install
```

### Running the server

To activate the `daemon` process, open a new terminal tab inside the `api/` directory and run the following command:

```
> mongod
```

To activate the `nodemon` utility, open a new terminal tab inside the `api/` directory and run the following command:

```
> npm run start
```

### Running the client

To start a `development server` on localhost, open a new terminal tab inside the `app/` directory and run the following command:

```
> npm run start
``` 

## Structure

The structure used to organize the code is based on personal opinions, following the standards recommended by the **MongoDB, Koa, React/Redux, and Node** communities.

In order to ensure flexibility of future integration and maintenance, the **client** and **server** code is decoupled into independent modules - seperated by the `api/` and `app/` directories.

Accounting for future scalibility isn't the only reason for maintaining a structured development environment. An organized code structure can often ease the burden of code navigation faced by new contributors.

### Directory Tree

```
api/
  config/
  controllers/
  models/
  routes/
  test/
  utils/
app/
  src/
    components/
      authentication/
      dashboard/
      form/
      header/
      input/
      loader/
      navigation/
      notification/
    constants/
      copy/
      design/
      interface/
    containers/
      authentication/
      navigation/
    modules/
      authentication/
      user/
    routes/
      authenticated/
    utils/
```

### API

The `api/` directory contains all files related to the server, organized inside directories specific to code written using the `Koa`, `Node` and `MongoDB` libraries.

#### Config

**Auth** - configure koa passport for login

**Database** - configure database for various enviornments

**Email** - configure email for various environments

**Server** - configure server for various environments

#### Controllers

##### Auth

**createTokenCtx** - create JWT info for ctx.body

**jwtAuth** - authenticate a user via a JWT in the Authorization header

**register** - register a new user, if a user with that email address does not already exist

**forgotPassword** - request password reset sends an email with a reset link for security

**resetPassword** - use token from email to reset password

**requireRole** - ensure user has a high enough role to access an endpoint

**getAuthenticatedUser** - return JSON for the authenticated user

##### User

**getUsers** - Returns JSON for all users

**getUser** - Returns JSON for specified user

**editUser** - Edits single user

**deleteUser** - Deletes single user

#### Models

**User** - schema for mongoDB user collection

#### Routes

**Auth** - koa routes for auth request endpoints

**User** - koa routes for user request endpoints 

#### Test

**User** - tests for user authentication

#### Utils

##### Email

**sendEmail** - send emails with mailgun

##### Error

**errorHandler** - handle server errors

**errorLogger** - log errors to console

##### User

**standardizeUser** - standardizes user and strips unnecessary data

**generateJWT** - signs JWT with user data

**getRole** - return a numerical value, which corresponds to the user's role

##### Validation

**responseValidator** - validate responses and return corresponding errors

**filterSensitiveData** - filter out sensitive data from a request body

### APP

The `app/` directory contains all files related to the client, organized inside directories specific to code written using the `React` and `Redux` libraries.

#### Components

**Authentication** - renders authentication forms and links

**Dashboard** - renders dashboard (must be authenticated)

**Form** - renders form (auth)

**Header** - renders header (logo and nav)

**Input** - renders form inputs (redux-form)

**Loader** - renders loading screen (when auth request is processing)

**Navigation** - renders router links

**Notification** - renders form errors and messages 

#### Constants

##### Copy

**authentication** - copy for authentication forms

**dashboard** - copy for dashboard

**meta** - copy for meta data

**navigation** - copy for navigation menu

##### Design

**composition** - css variables for design composition (colors, space, width, etc..)

**content** - css variables for design content (fonts, sizes, margins, etc...)

**structure** - css variables for design structure (ratio, scales, fractions, etc...)

##### Interface

**breakpoints** - media query breakpoints

**elements** - common elements with base styles  using styled-components

**proptypes** - common propTypes that are shared across multiple components

**requests** - redux action types and request endpoints

**styles** - common styles using styled-components css feature

#### Containers

##### Authentication

**index** - higher order component to wrap components that need to be authenticated.

**forgot_password** - container for forgotPassword authentication method

**login** - container for login authentication method

**register** - container for register authentication method

**reset_password** - container for resetPassword authentication method

##### Dashboard

**index** - container for dashboard component

##### Navigation

**index** - container for navigation component

#### Modules

**Authentication** - change auth and get authenticated user

**User** - change auth and get [authenticated] user(s)

**Form** - process forms through redux-form

##### Authentication

**changeAuthentication** - change authentication request

**login** - authenticate a user with an email and password

**register** - create a new account user account

**setPostAuthPath** - save desired pre-auth path to state

**logoutUser** - log user out by clearing auth state and token cookie

**forgotPassword** - send user an email with a token to reset their password

**resetPassword** - Reset a user's password, given a valid token

**getAuthenticatedUser** - retrieve the logged in user's information

##### User

**getUser** - fetch user from API, given id

**getUsers** - fetch users from API

**getAuthenticatedUser** - authenticated user selector

#### Routes

**Login** - container authentication renders login component

**Register** - container authentication renders register component

**Forgot Password** - container authentication renders forgot password component

**Reset Password** - container authentication renders reset password component

##### Authenticated

**Dashboard** - container dashboard renders dashboard component

#### Utils

##### Cookie

**setCookie** - sets a cookie in the user's browser

**getCookie** - retrieves a cookie. Not super necessary, but it keeps things uniform

**deleteCookie** - removes a cookie. Not super necessary, but it keeps things uniform

##### Environment

**getEnvironment** - returns the current environment, or development by default

**getApiUrl** - returns the URL for the api, given the current environment

**getAppUrl** - returns the URL for the app, given the environment

##### HTTP

**logError** - log error without UI display

**httpRequest** - generic action to make an http request with axios

**post** - generic action to make a POST request with axios

**put** - generic action to make a PUT request with axios

**get** - generic action to make a GET request with axios

**del** - generic action to make a DELETE request with axios

##### Media

**media** - iterates through media query breakpoints to create a media template utility using styled-components css feature

##### Store

**updateStore** - returns an object containing updated state. This helper builds generic state (messages, errors, loading)

**buildGenericInitialState** - builds initial state for a set of constants (loading, errors, messages)

**removeMetaFromState** - remove metadata from state (general selector)

## Resources

A list of resources on the topic of authentication, relative to the  libraries used: 

* [Building and Authenticating NodeJS Apps](https://auth0.com/blog/building-and-authenticating-nodejs-apps/)
* [Authentication API with Node and Express](http://blog.slatepeak.com/creating-a-simple-node-express-api-authentication-system-with-passport-and-jwt/)
* [Basic API with Node Express and Mongo](http://blog.slatepeak.com/refactoring-a-basic-authenticated-api-with-node-express-and-mongo/)
* [React Redux with JWT Authentication](http://blog.slatepeak.com/build-a-react-redux-app-with-json-web-token-jwt-authentication/)
* [Koa from scratch](https://github.com/ranisalt/koa-from-scratch)
