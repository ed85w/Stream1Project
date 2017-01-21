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