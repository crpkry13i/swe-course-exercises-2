### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
    Some ways of managing asynchronous code in JavaScript are: **Promises**, **async/await**, **callbacks**, **event listeners**, and **asynchronous generators**.

- What is a Promise?
    A Promise is an object that represents the eventual completion or failure of an asynchronous operation.

- What are the differences between an async function and a regular function?
    The differences between an async function and a regular function are that an async function always returns a Promise, and a regular function can return a Promise or a value.

- What is the difference between Node.js and Express.js?
    The difference between Node.js and Express.js is that Express.js is a framework for creating web applications, while Node.js is a runtime environment for JavaScript.

- What is the error-first callback pattern?
    The error first callback pattern is a common way of handling asynchronous code in JavaScript. It is a pattern where the first argument to a callback is an error object, and the second argument is the value that the callback should return.

- What is middleware?
    Middleware is a common pattern in Node.js applications. Middleware is a function that is called by another function, and is used to modify the behavior of the function that it is called by.

- What does the `next` function do?
    The `next` function is a function that is called by the middleware function to pass control to the next middleware function.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
    The following code has a few issues. The first issue is that it is not optimized. The second issue is that it is not modular. The third issue is that it is not well-structured. The fourth issue is that it is not well-named.

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
