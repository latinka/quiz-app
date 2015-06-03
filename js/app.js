//Question bank
var allQuestions = [
	{
		question		: "On what date is Harry's birthday?",
		image     		: "img/birthday-cake.png",
		choices 		: [
							"August 15",
							"January 1",
							"July 31",
							"May 7"
							],
		correct			: 2, 
		explanationc	: "Correct! The only child of James and Lily Potter, Harry was born on the 31st of July. On his 11th birthday he learned he's a wizard and received his acceptance letter to Hogwarts!",
		explanationw	: "Don't sweat it- that's why we have Facebook!)The only child of James and Lily Potter, Harry was born on the 31st of July. On his 11th birthday he learned he's a wizard and received his acceptance letter to Hogwarts!", 
		hint			: "Hagrid gives Harry a birthday cake as a gift when they first meet in the Hut-on-the-Rock.", 
	},
	{
		question  		: "What kind of core does Harry's wand have?", 
		image 			: "img/wand.png",
		choices 		: [
							"Phoenix feather",
							"Dragon heartstring",
							"Unicorn hair",
							"Tail hair of a Thestral"
							], 
		correct			: 0,
		explanationc	: "Correct! Harry's wand is 11'' long, made of holly, and has a phoenix feather core. This was described by Ollivander to be an unusual combination of wand core and wood.",
		explanationw	: "Maybe you had too much butterbeer!)Harry's wand is 11'' long, made of holly, and has a phoenix feather core. This was described by Ollivander to be an unusual combination of wand core and wood.",
		hint			: "Harry's and Voldemort's wands are brothers- they have the same core! Priori Incantatem!", 
	},
	{
		question 		: "Where do the Weasleys live?", 		
		image			: "img/burrow.png",
		choices 		: [
							"Godric's Hollow",
							"The Burrow",
							"Hogsmeade",
							"Shell Cottage"
							], 
		correct 		: 1, 
		explanationc	: "Correct! The Burrow is the family home of the Weasley family. It is held up by magic and was the Headquarter's of the Order of the Phoenix after Dumbledore's passing.",
		explanationw 	: "Molly won't be happy with you! The Burrow is the family home of the Weasley family. It is held up by magic and was the Headquarter's of the Order of the Phoenix after Dumbledore's passing.", 
		hint			: "Ron: It's not much, but it's home. Harry: I think it's brilliant!", 
	},
	{
		
		question 		: "How many kids are in the Weasley family?", 		
		image			: "img/weasley2.png",
		choices 		: [
							"5",
							"4",
							"9",
							"7"
							], 
		correct 		: 3, 
		explanationc	: "Correct! Bill, Charlie, Percy, Fred, George, Ron and Ginny.",
		explanationw 	: "Even their mother has a special device to keep track of them all! Bill, Charlie, Percy, Fred, George, Ron and Ginny.", 
		hint			: "Fred and George are two different people although they look the same!", 
	},
	{
		
		question 		: "What does Professor McGonagall teach?", 		
		image			: "img/cat.png",
		choices 		: [
							"Potions",
							"Herbology",
							"Divination",
							"Transfiguration"
							], 
		correct 		: 3, 
		explanationc	: "Correct! Professor Minerva McGonagall is a teacher of Transfiguration, Head of House Gryffindor, registered animagus and later on- Headmistress of Hogwarts!",
		explanationw 	: "School isn't just about trips to Hogsmeade. Professor Minerva McGonagall is a teacher or Transfiguration, Head of House Gryffindor, registered animagus and later on- Headmistress of Hogwarts!", 
		hint			: "'This is some of the most complex and dangerous magic you will learn at Hogwarts. Anyone messing around in my class will leave and not come back. You have been warned.'", 
	},
	{
		
		question 		: "Who played in the Quidditch World Cup final?", 		
		image			: "img/snitch.png",
		choices 		: [
							"England and France",
							"Romania and Peru",
							"Bulgaria and Ireland",
							"China and Kenya"
							], 
		correct 		: 2, 
		explanationc	: "Correct! The 422nd Quidditch World Cup was held in England. Its official sponsors were Butterbeer, Pumpkin juice, Gringotts Wizarding bank and Nimbus 2001. The final was between Ireland and Bulgaria. Ireland won.",
		explanationw 	: "Maybe you're more into Muggle sports. The 422nd Quidditch World Cup was held in England. Its official sponsors were Butterbeer, Pumpkin juice, Gringotts Wizarding bank and Nimbus 2001. The final was between Ireland and Bulgaria. Ireland won.", 
		hint			: "Victor Krum caught the Snitch! Brackium Emendo!", 
	},
	{
		
		question 		: "What was James Potter's nickname?", 		
		image			: "img/map.png",
		choices 		: [
							"Moony",
							"Wormtail",
							"Padfoot",
							"Prongs"
							], 
		correct 		: 3, 
		explanationc	: "Correct! After years of learning to become animagi in order to accompany their friend Remus in his transformations, James, Sirius and Peter finally mastered the art. Potter became a stag animagus, which earned him the nickname Prongs.",
		explanationw 	: "After years of learning to become animagi in order to accompany their friend Remus in his transformations, James, Sirius and Peter finally mastered the art. Potter became a stag animagus, which earned him the nickname Prongs.", 
		hint			: "I solemnly swear that I'm up to no good! ", 
	},
	{
		
		question 		: "What form does Harry's patronus take?", 		
		image			: "img/harry.png",
		choices 		: [
							"A stag",
							"An otter",
							"A werewolf",
							"A doe"
							], 
		correct 		: 0, 
		explanationc	: "Correct! Each patronus is unique to the wizard who conjures it. Harry's is a stag.",
		explanationw 	: "Hopefully you won't encounter any Dementors soon! Each patronus is unique to the wizard who conjures it. Harry's is a stag.", 
		hint			: "Harry's and James' patronuses have the same shape! Expecto Patronum!", 
	},
	{
		
		question 		: "Who is the Half-Blood Prince?", 		
		image			: "img/book.png",
		choices 		: [
							"Harry Potter",
							"Sirius Black",
							"Rubeus Hagrid",
							"Severus Snape"
							], 
		correct 		: 3, 
		explanationc	: "Correct! Hermione's research revealed that Prince was the maiden name of Snape's mother.",
		explanationw 	: "We need more tolerant, non- racist people like you! Hermione's research revealed that Prince was the maiden name of Snape's mother.", 
		hint			: "Harry first encounters the misterious Half-Blood-Prince in one of his textbooks. Levicorpus!", 
	},
	{
		
		question 		: "What does Dumbledore bequeath to Hermione?", 		
		image			: "img/hallows.png",
		choices 		: [
							"Gryffindor's Sword",
							"The Elder Wand",
							"The Tales of Beedle the Bard",
							"The Pensieve"
							], 
		correct 		: 2, 
		explanationc	: "Correct! The Tales of Beedle the Bard is where Harry, Ron and Hermione first read the legend of the Deathly Hallows.",
		explanationw 	: "Well, it's almost over anyhow! The Tales of Beedle the Bard is where Harry, Ron and Hermione first read the legend of the Deathly Hallows.", 
		hint			: "Maybe you should go read The Tale of the Three Brothers!", 
	},
]; 


$(document).ready(function() {

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
	$("#count").show();
	$(".question").show();
	$("#qimage").show();
	$(".answers").show();
	$(".hint").show();
	currentQuestion++;
	counter();
	askQuestion();
});

$(".hint").on("click", function(){
	$(".transparent").show();
	$(".overlay").fadeIn(500);
});

$(".close").on("click", function(){
	$(".overlay").fadeOut(500);
});

$("ul").on("click", "li", function(){
	$(".hint").hide();
	$(".next").fadeIn(500);
	$(".explanation").fadeIn(500);
});

var currentQuestion = -1;
var score = 0;

var counter = function(){
	$("#count").text("Question " + (currentQuestion+1) + " of 10");
};

//var quiz = document.getElementById("quiz");

$(".next").on("click", function(){
	currentQuestion++;
	counter();
	$(".next").hide();
	$(".explanation").hide();
	$(".hint").show();
	$("ul").empty();
	askQuestion();
});

function askQuestion(){
	var choices = allQuestions[currentQuestion].choices;
	$(".ask").text(allQuestions[currentQuestion].question);
	for (var i = 0; i < choices.length; i++){
		$("<li>").text(choices[i]).appendTo("ul");
	};
	$(".explanation").text(allQuestions[currentQuestion].explanationc);
	$(".hint-text").text(allQuestions[currentQuestion].hint);
	$("#qimage").attr("src", allQuestions[currentQuestion].image);
};

});