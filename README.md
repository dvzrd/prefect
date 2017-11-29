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

* Auth

* Database

* Email

* Server

#### Controllers

* Auth

* User

#### Models

* User

#### Routes

* Auth

* User

#### Test

* User

#### Utils

* Email

* Error

* User

* Validation

### APP

The `app/` directory contains all files related to the client, organized inside directories specific to code written using the `React` and `Redux` libraries.

#### Components

##### Authentication

##### Dashboard

##### Form

##### Header

##### Input

##### Loader

##### Navigation

##### Notification

#### Constants

##### Copy

##### Design

##### Interface

#### Containers

##### Authentication

##### Navigation

#### Modules

* **Authentication** - change auth and get authenticated user
* **User** - change auth and get [authenticated] user(s)
* **Form** - process forms through redux-form

##### Authentication

* **changeAuthentication** - change authentication request
* **login** - authenticate a user with an email and password
* **register** - create a new account user account
* **setPostAuthPath** - save desired pre-auth path to state
* **logoutUser** - log user out by clearing auth state and token cookie
* **forgotPassword** - send user an email with a token to reset their password
* **resetPassword** - Reset a user's password, given a valid token
* **getAuthenticatedUser** - retrieve the logged in user's information

##### User

* **getUser** - fetch user from API, given id
* **getUsers** - fetch users from API
* **getAuthenticatedUser** - authenticated user selector

#### Routes

* **Login**
* **Register**
* **Forgot Password**
* **Reset Password**

##### Authenticated

* **Dashboard**
* **Profile**

#### Utils

* **Cookie**
* **Environment**
* **HTTP**
* **Media**
* **Store**

## Documentation

Coming soon

## Resources

A list of resources on the topic of authentication, relative to the  libraries used: 

* [Building and Authenticating NodeJS Apps](https://auth0.com/blog/building-and-authenticating-nodejs-apps/)
* [Authentication API with Node and Express](http://blog.slatepeak.com/creating-a-simple-node-express-api-authentication-system-with-passport-and-jwt/)
* [Basic API with Node Express and Mongo](http://blog.slatepeak.com/refactoring-a-basic-authenticated-api-with-node-express-and-mongo/)
* [React Redux with JWT Authentication](http://blog.slatepeak.com/build-a-react-redux-app-with-json-web-token-jwt-authentication/)
* [Koa from scratch](https://github.com/ranisalt/koa-from-scratch)
