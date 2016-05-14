# angular-tolowercase

This **angular-tolowercase** is an Angular.js directive that lowercases all of its input so you don't have to.

Simply add the attribute `to-lower-case` on your input. The usage of `ng-model` is required.

See the demo [here](http://tinacious.github.io/angular-tolowercase).


## Project requirements

This project depends on Angular 1.x.


## Usage

### Installation

Install using Bower:

```
bower install angular-tolowercase
```

You can also install it manually by copying the `to-lower-case.js` file into your project.


### Using in your project

Add the directive as a dependency to your app:

```js
angular.module('myApp', ['td.tolowercase'])
```

Use on any input element like so—don't forget that you must use `ng-model` for this directive to work:

```html
<input type="email" ng-model="emailAddress" to-lower-case />
```
