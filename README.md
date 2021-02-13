# trading-vue-js-web-component-example

Use vue-custom-element to wrap trading-vue-js as a Web Component

## Why?

[trading-vue-js](https://github.com/tvjsx/trading-vue-js) is freaking awesome and I'd really like to be able to use it in my [Angular](https://angular.io/) (web component) based project. This repo serves as an example of how this can be done.

## How?

Using [vue-custom-element](https://github.com/karol-f/vue-custom-element) we can create a custom web component (== web component) that wraps the `trading-vue` component provided by TVJS.

This repo is just an example. To use these clone the repo and apply the code to your specific use case.

## Demo

https://johanneshoppe.github.io/trading-vue-js-web-component-example/


## Project setup
```
npm install
```

### Compiles and hot-reloads for development

This executes the Vue.js web server and starts `App.vue` as usual. Great for fast experiments.

```
npm start
```

### Compiles and minifies for production

This builds the custom element,

```
npm run build
```

Use the following command to start a web server at the same time. Here you can see if everything works in an stand-alone environment.


```
npm run build-and-serve
```
