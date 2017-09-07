
angular.module('ContactDirective',[]).directive('contactDetails', function() {
  return {
    restrict: 'A',    // A -> attribute
    templateUrl: 'templates/contact.html'
  };
});

