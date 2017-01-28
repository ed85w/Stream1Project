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
					$(this).toggleClass("test");
					$(this).siblings("img").toggleClass("grey-image");
				}
			})
			$("p.bandpage-paragraphs").mouseleave(function(){
				if ($(this).css("position")=="absolute") {
					$(this).toggleClass("test");
					$(this).siblings("img").toggleClass("grey-image");
				}
			})
		});

    });