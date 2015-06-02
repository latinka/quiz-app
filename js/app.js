$(document).ready(function() {
	//$(".count").hide();
	$(".question").hide();
	$("#qimage").hide();
	$(".answers").hide();
	$(".hint").hide();
	$(".overlay").hide();
	$(".next").hide();
	$(".explanation").hide();

$("#start").on("click", function(){
	$("#simage").hide();
	$("h1").hide();
	$("#start").hide();
	$(".count").show();
	$(".question").show();
	$("#qimage").show();
	$(".answers").show();
	$(".hint").show();
	
});

$(".hint").on("click", function(){
	$(".overlay").fadeIn(500);
});

$(".close").on("click", function(){
	$(".overlay").fadeOut(500);
});

$("li").on("click", function(){
	$(".hint").hide();
	$(".next").fadeIn(500);
	$(".explanation").fadeIn(500);
});
	
})