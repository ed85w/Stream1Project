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
		      title: 'Dynamic Group Header - 123',
		      content: 'Dynamic Group Body - 1',
		    },
		    {
		      title: 'Dynamic Group Header - 2',
		      content: 'Dynamic Group Body - 2'
		    },
		    {
		    	title: "i've added this one",
		    	content: "dwfnweof"
		    }
		  ];

		  $scope.items = ['Item 1A', 'Item 2', 'Item 3'];

		  $scope.addItem = function() {
		    var newItemNo = $scope.items.length + 1;
		    $scope.items.push('Item ' + newItemNo);
		  };

		  $scope.status = {
		    isCustomHeaderOpen: false,
		    isFirstOpen: true,
		    isFirstDisabled: false
		  };

    });