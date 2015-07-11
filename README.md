# toLowerCase directive

This directive lowercases all of its input so you don't have to.

Simply add the attribute `to-lower-case` on your input. The usage of `ng-model` is required.

See the demo [here](http://tinacious.github.io/toLowerCase).


## Project requirements

This project depends on Angular 1.x.


## Usage

### Installation

Install using Bower:

```
bower install toLowerCase-angular
```

You can also install it manually by copying the `to-lower-case.js` file into your project.


### Using in your project

Add the directive as a dependency to your app:

```js
angular.module('myApp', ['toLowerCase'])
```

Use on any directive like so—don't forget that you must use `ng-model` for this directive to work:

```html
<input type="email" ng-model="emailAddress" to-lower-case />
```
