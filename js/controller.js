angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {

    	$(document).ready(function(){
			// Function to loop through background-images
			function imageLoop (){
				$("#rotatorContainer div").last().fadeOut(500,function(){
					$(this).insertBefore($("#rotatorContainer div").first()).show();
				});
			}

			setInterval(function(){
				imageLoop();
			}, 5000);

		});
    	// END OF JQUERY
    })
    .controller('BandController', function($scope){
    	
    	$(document).ready(function(){
			// BAND PAGE
			$("p.bandpage-paragraphs").mouseenter(function(){
				if ($(this).css("position")=="absolute") {
					$(this).toggleClass("show-paragraphs");
					$(this).siblings("img").toggleClass("grey-image");
				}
			})
			$("p.bandpage-paragraphs").mouseleave(function(){
				if ($(this).css("position")=="absolute") {
					$(this).toggleClass("show-paragraphs");
					$(this).siblings("img").toggleClass("grey-image");
				}
			})
		});

    })
    .controller('GigsController', function($scope){

    	$scope.oneAtATime = true;

		  $scope.groups = [
		    {
		      date: '1st Jan 2017',
		      city: 'New York',
		      venue: 'place a',
		      // map:
		    },
		    {
		      date: '2nd Feb 2017',
		      city: 'Mexico City',
		      venue: 'place a',
		      // map:
		    },
		    {
		      date: '3rd March 2017',
		      city: 'Havana',
		      venue: 'place c',
		      // map:
		    }
		  ];

		  $scope.items = ['Item 1A', 'Item 2', 'Item 3'];

		  $scope.status = {
		    isCustomHeaderOpen: false,
		    isFirstOpen: true,
		    isFirstDisabled: false
		  };

    });