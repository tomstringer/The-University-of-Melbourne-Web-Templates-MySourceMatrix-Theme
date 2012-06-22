$(document).ready(function(){
	//style all questions as closed
	$(".question").addClass("closed"); 
	$(".question").append(" <a class='more'>More</a>");
	//make sure first question is styled as open
	//$(".question:first").removeClass("closed").addClass("opened"); 
	$(".answer").hide(); //hide answers
	// $(".answer:first").show(); //show first answer
	//question click
	$(".question").click(function() {
		$(".answer").slideUp("fast");
		$(".question").removeClass("opened").addClass("closed");
		$(".question.closed a").replaceWith("<a class='more'>More</a>");
		
		if ($(this).next(".answer").is(":hidden")) {
			$(this).next(".answer").slideDown("fast");
			$(this).removeClass("closed").addClass("opened");
			$(".question.opened a").replaceWith("<a class='less'>Less</a>");
		}              
	});
});