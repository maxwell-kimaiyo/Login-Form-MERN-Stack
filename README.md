# MERN CRUD

A Login and registration form based on JSON Web Token Authorization and encrypted password stored in mongoDB build using MongoDB, Express.js, and Node.js at the back-end and React/Redux for the UI.

Cookies is used at the client side to store user information

<img src="https://raw.githubusercontent.com/maxwell-kimaiyo/Login-Form-MERN-Stack/master/Capture1.JPG?raw=true"/>


## Getting Started

### Prerequisites

Your machine should have npm(or yarn), NodeJS and MongoDB server installed to use this locally

### Installation

```js
git clone https://github.com/maxwell-kimaiyo/Login-Form-MERN-Stack.git

- Install server dependencies(in root directory)

```

```js
npm install
```

- Install client dependencies

```js
cd client
npm install
```

- You can either use your own local mongoDB database or any cloud database just change mongoURI and secretOrKey in config.js file

```js
export default {
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost:27017/User',
};

```

- This app uses concurrently so you don't need to run 2 different instances for client and server, use this command in root directory to run the app.

```js
npm run dev
```

## Support

Reach out to me at one of the following places!

- Twitter at <a href="http://twitter.com/maxxmalakwen" target="_blank">`@maxxmalakwen`</a>

Let me know if you have any questions. [Email Maxwell](developerkimaiyo@gmail.com)



---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2015 © <a href="http://fvcproductions.com" target="_blank">Maxwell Kimaiyo</a>.