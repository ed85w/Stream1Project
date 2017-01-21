angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
      $scope.myInterval = 5000;
      $scope.noWrapSlides = false;
      $scope.active = 0;
  
      // My slides
      $scope.slides = [
        {
          image: "img/croppedbobmarley.jpg",
          // text: "a",
          id: 0
        },
        {
          image: "img/croppedjimmycliff.jpg",
          // text: "b",
          id: 1
        },
        {
          image: "img/croppedreggae.jpg",
          // text: "c",
          id: 2
        },
      ];
    })
    .controller('BandController', function($scope){
    	$scope.title = "Band Page";
    });