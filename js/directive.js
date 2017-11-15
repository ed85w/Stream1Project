//this isn't required unless contact page is to be duplicated
angular.module('ContactDirective',[]).directive('contactDetails', function() {
  return {
    restrict: 'A',    // A -> attribute
    templateUrl: 'templates/contact.html'
  };
});

