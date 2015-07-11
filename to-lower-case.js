'use strict';

angular.module('toLowerCase', [])
.directive('toLowerCase', function () {
    return {
        require: 'ngModel',
        link: function (scope, elem, attrs, modelCtrl) {
            scope.$watch(function () {
                modelCtrl.$parsers.push(function (inputValue) {
                    var transformedInput = inputValue.toLowerCase();

                    if (transformedInput != inputValue) {
                        modelCtrl.$setViewValue(transformedInput);
                        modelCtrl.$render();
                    }

                    return transformedInput;
                });
            });
        }
    };
});
