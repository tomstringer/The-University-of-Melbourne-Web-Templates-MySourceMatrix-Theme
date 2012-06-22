$(document).ready(function(){
	//style all questions as closed
	$(".expand-title").addClass("closed"); 
	$(".expand-title").append(" <a class='more'>More</a>");
	//make sure first question is styled as open
	//$(".question:first").removeClass("closed").addClass("opened"); 
	$(".expand-content").hide(); //hide answers
	// $(".answer:first").show(); //show first answer
	//question click
	$(".expand-title").click(function() {
		$(".expand-content").slideUp("fast");
		$(".expand-title").removeClass("opened").addClass("closed");
		$(".expand-title.closed a").replaceWith("<a class='more'>More</a>");
		
		if ($(this).next(".expand-content").is(":hidden")) {
			$(this).next(".expand-content").slideDown("fast");
			$(this).removeClass("closed").addClass("opened");
			$(".expand-title.opened a").replaceWith("<a class='less'>Less</a>");
		}              
	});
});