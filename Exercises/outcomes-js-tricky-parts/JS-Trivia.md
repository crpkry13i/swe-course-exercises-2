# JavaScript Trivia

1. What is a potential pitfall with using `typeof bar === "object"` to determine if bar is an object? How can this pitfall be avoided?
  Answer: A potential pitfall would be if bar was null since null is considered an object in JavaScript. To avoid this pitfall, use `bar !== null && typeof bar === "object"`.

2. What will the code below output to the console and why?

``` javascript
(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
```

  Answer: `a defined? false` and `b defined? true` because the b variable is defined in the global scope.

3. What will the code below output to the console and why?

``` javascript
  var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();
```

  Answer: `outer func:  this.foo = bar` and `outer func:  self.foo = bar` because the outer function is called first and the inner function is called second.

  `inner func:  this.foo = undefined` and `inner func:  self.foo = bar` because the inner function is called first and the outer function is called second.

4. What is the significance of, and reason for, wrapping the entire content of a JavaScript source file in a function block?

  Answer: This is an increasingly common practice, employed by many popular JavaScript libraries (jQuery, Node.js, etc.). This technique creates a closure around the entire contents of the file which, perhaps most importantly, creates a private namespace and thereby helps avoid potential name clashes between different JavaScript modules and libraries.

  Another feature of this technique is to allow for an easily referenceable (presumably shorter) alias for a global variable. This is often used, for example, in jQuery plugins. jQuery allows you to disable the `$` reference to the jQuery namespace, using `jQuery.noConflict()`. If this has been done, your code can still use `$` employing this closure technique, as follows:

  `(function($) { /* jQuery plugin code referencing $ */ } )(jQuery);`

5. What is the significance, and what are the benefits, of including 'use strict' at the beginning of a JavaScript source file?

  Answer: The short and most important answer here is that use strict is a way to voluntarily enforce stricter parsing and error handling on your JavaScript code at runtime. Code errors that would otherwise have been ignored or would have failed silently will now generate errors or throw exceptions. In general, it is a good practice.

6. Consider the two functions below. Will they both return the same thing? Why or why not?

``` javascript
function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}
```

  Answer: They will not return the same thing because the first function returns an object and the second function returns undefined.

7. What will the code below output? Explain your answer.

``` javascript
  console.log(0.1 + 0.2);
  console.log(0.1 + 0.2 == 0.3);
```

  Answer: `0.3` and `false` because the equality operator is not aware of the difference between 0.1 and 0.3.

8. In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?

``` javascript
(function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
})();
```

  Answer: `1, 4, 2, 3` because console.log(1) is logged first, then console.log(4). Then setTimeout(function(){console.log(2)}, 1000) is executed, then setTimeout(function(){console.log(3)}, 0) is executed.

9. Write a simple function (less than 160 characters) that returns a boolean indicating whether or not a string is a palindrome.

  Answer: `function isPalindrome(str) {return str === str.split('').reverse().join('');}`

10. Write a sum method which will work properly when invoked using either syntax below.

`console.log(sum(2,3));   // Outputs 5`
`console.log(sum(2)(3));  // Outputs 5`

  Answer:

  METHOD 1

  ``` javascript
  function sum(x) {
    if (arguments.length == 2) {
      return arguments[0] + arguments[1];
    } else {
      return function(y) { return x + y; };
    }
  }
  ```

  METHOD 2
``` javascript
  function sum(x, y) {
  if (y !== undefined) {
    return x + y;
  } else {
    return function(y) { return x + y; };
  }
}
```
