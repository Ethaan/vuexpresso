# Vuexpresso

Vuexpresso is a skeleton app that uses the new techs like
 `vue`, `vuex`, `graphql`, `webpack`, `apollo`, between others (See complete list below).

Mainly inspired by

* [Frappe](https://github.com/dweldon/frappe)

# Getting Started

**Note** remember to have Mongo proccess running on the background or edit `config/index.js` with a cloud mongodb instance (default to localhost)

Take a look [here](https://docs.mongodb.com/manual/tutorial/manage-mongodb-processes/) to know how to run the mongo server

```
git clone https://github.com/Ethaan/vuexpresso.git
npm install -g babel-cli
yarn
yarn dev
```

# Other Commands

`yarn run storybook` - Serves a play server using [storybook](https://github.com/storybooks/storybook)

# What includes

### Graphql server

By default it runs a server on `/graphql`, in order to make the API calls, you can delete the part where the server is initialized on `build/dev-server.js` if you have an external API server

### GraphiQL UI
**default** to `/graphiql` but you can change it on `data/base-config.js`;

### Storybook UI.

It uses `Storbook` to render and test components much better in real time, check the [official repo](https://github.com/storybooks/storybook)

### Vuex Config.

Vuex is already all setup so you can only worry about adding modules, an example can be found here `src/store/modules/notifications.js`;

### Vue Router

Routes live inside `src/routes.js`

### Webpack

Using [Webpack master example](https://github.com/vuejs-templates/webpack/tree/master/template) as reference, with slight modifications to make it work with ES6 and graphql

### Jade & Stylus

You can easy remove Jade and stylus by simply removing them from the tag like `<template lang="jade"></template` => `<template></template` same for stylus.

# Libraries and Technologies used

* [Express](http://expressjs.com/)

* [VueJS](https://vuejs.org/)

* [Storybook](https://github.com/storybooks/storybook)

* [Vuex](https://github.com/vuejs/vuex)

* [Vue-Router](https://github.com/vuejs/vue-router)

* [Vue-Apollo](https://github.com/Akryum/vue-apollo)

* [Apollo-client](http://dev.apollodata.com/)

* [GraphQL](http://facebook.github.io/graphql/)

* [Webpack](https://github.com/webpack/webpack)

* [Pug](https://github.com/pugjs/pug)

* [Stylus](https://github.com/stylus/stylus)

* [Lodash](https://github.com/lodash/lodash)

* [Babel](https://github.com/babel/babel)

* [Mongo](https://github.com/mongodb/mongo)

* [Eslint](https://github.com/eslint/eslint)

TODO

- [x] Build for Production
