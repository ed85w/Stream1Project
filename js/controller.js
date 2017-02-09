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
			$(".bandpage-image-container").mouseover(function(){
					$(this).addClass("show-paragraphs");
			})
			$(".bandpage-image-container").mouseout(function(){
					$(this).removeClass("show-paragraphs");
			})
		});

    })
    .controller('GigsController', function($scope, $sce){

    	$scope.oneAtATime = true;

    		// List of gigs and venues etc
		  $scope.groups = [
		    {
		      date: '1st Jan 2017',
		      city: 'New York',
		      venue: 'Midtown Loft and Terrace',
		      map: $sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?q=Midtown%20Loft%20%26%20Terrace%2C%20267%205th%20Ave%2C%20New%20York%2C%20NY%2010016%2C%20USA&key=AIzaSyB2Ash-HsNf33hrwvEO_1xdMwhaO1wPTA8"),
		      price: 12.5
		    },
		    {
		      date: '2nd Feb 2017',
		      city: 'Mexico City',
		      venue: 'Zinco Jazz Club',
		      map: $sce.trustAsResourceUrl("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.501915333837!2d-99.13936348538523!3d19.43391524567516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92d280b90af%3A0x28e1fe0a9a9084fb!2sZinco+Jazz+Club!5e0!3m2!1sen!2suk!4v1485980051355")
		   },
		    {
		      date: '3rd March 2017',
		      city: 'Havana',
		      venue: 'Tropicana Club',
		      map: $sce.trustAsResourceUrl("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58721.09741120626!2d-82.4541617210688!3d23.094584919428815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88cd70cf97dbc25d%3A0xb980d751c3a3ea6c!2sCabaret+Tropicana!5e0!3m2!1sen!2suk!4v1485980259628")
		    },
		    {
		      date: '4th April 2017',
		      city: 'New York',
		      venue: 'Times Square',
		      map: $sce.trustAsResourceUrl("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12089.121476192215!2d-73.98822058108964!3d40.755857823252065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1sen!2suk!4v1485980362537")
		    },
		    {
		      date: '5th May 2017',
		      city: 'London',
		      venue: 'The O2 Arena',
		      map: $sce.trustAsResourceUrl("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9934.528247401262!2d-0.0014088172686770155!3d51.501619146683844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x981ded0cf3b9dadf!2sThe+O2!5e0!3m2!1sen!2suk!4v1485980686069")
		    },
		    {
		      date: '6th June 2017',
		      city: 'London',
		      venue: 'Apollo Victoria Theatre',
		      map: $sce.trustAsResourceUrl("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9936.006152835862!2d-0.15403275141899156!3d51.494839259392805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfbe3b26f42e3485b!2sApollo+Victoria+Theatre!5e0!3m2!1sen!2suk!4v1485980777669")
		    },
		    {
		      date: '7th July 2017',
		      city: 'Liverpool',
		      venue: 'The Cavern Club',
		      map: $sce.trustAsResourceUrl("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4756.944723855205!2d-2.992363266847864!3d53.40637787791445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b212e349cd1c9%3A0x3b50330ca98cf538!2sCavern+Club!5e0!3m2!1sen!2suk!4v1485980836171")
		    },
		    {
		      date: '8th August 2017',
		      city: 'Madrid',
		      venue: 'Teatro Calderón',
		      map: $sce.trustAsResourceUrl("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6075.420661136144!2d-3.706631034595328!3d40.41526745136905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x532790fe7a68f71f!2sTeatro+Calder%C3%B3n!5e0!3m2!1sen!2suk!4v1485980911263")
		    }
		  ];

		  // $scope.items = ['Item 1A', 'Item 2', 'Item 3'];

		  $scope.status = {
		    isCustomHeaderOpen: false,
		    isFirstOpen: true,
		    isFirstDisabled: false
		  };
	})
	.controller('MusicController', function($scope){

	});

    // });