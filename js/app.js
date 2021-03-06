//Question bank
var allQuestions = [{
    question: "On what date is Harry's birthday?",
    image: "img/birthday-cake.png",
    alt: "Birthday Cake",


    choices: [
        "August 15",
        "January 1",
        "July 31",
        "May 7"
    ],
    correct: 2,
    explanationc: "Correct! The only child of James and Lily Potter, Harry was born on the 31st of July. On his 11th birthday he learned he's a wizard and received his acceptance letter to Hogwarts!",
    explanationw: "Don't sweat it- that's why we have Facebook! The only child of James and Lily Potter, Harry was born on the 31st of July. On his 11th birthday he learned he's a wizard and received his acceptance letter to Hogwarts!",
    hint: "Hagrid gives Harry a birthday cake as a gift when they first meet in the Hut-on-the-Rock.",
}, {
    question: "What kind of core does Harry's wand have?",
    image: "img/wand.png",
    alt: "Magic wand",
    choices: [
        "Phoenix feather",
        "Dragon heartstring",
        "Unicorn hair",
        "Tail hair of a Thestral"
    ],
    correct: 0,
    explanationc: "Correct! Harry's wand is 11'' long, made of holly, and has a phoenix feather core. This was described by Ollivander to be an unusual combination of wand core and wood.",
    explanationw: "Maybe you had too much butterbeer! Harry's wand is 11'' long, made of holly, and has a phoenix feather core. This was described by Ollivander to be an unusual combination of wand core and wood.",
    hint: "Harry's and Voldemort's wands are brothers- they have the same core! Priori Incantatem!",
}, {
    question: "Where do the Weasleys live?",
    image: "img/burrow.png",
    alt: "House",
    choices: [
        "Godric's Hollow",
        "The Burrow",
        "Hogsmeade",
        "Shell Cottage"
    ],
    correct: 1,
    explanationc: "Correct! The Burrow is the family home of the Weasley family. It is held up by magic and was the Headquarters of the Order of the Phoenix after Dumbledore's passing.",
    explanationw: "Molly won't be happy with you! The Burrow is the family home of the Weasley family. It is held up by magic and was the Headquarter's of the Order of the Phoenix after Dumbledore's passing.",
    hint: "Ron: It's not much, but it's home. Harry: I think it's brilliant!",
}, {

    question: "How many kids are in the Weasley family?",
    image: "img/weasley2.png",
    alt: "Child",
    choices: [
        "5",
        "4",
        "9",
        "7"
    ],
    correct: 3,
    explanationc: "Correct! Bill, Charlie, Percy, Fred, George, Ron and Ginny.",
    explanationw: "Don't worry- even their mother has a special device to keep track of them all! Bill, Charlie, Percy, Fred, George, Ron and Ginny.",
    hint: "Fred and George are two different people although they look the same!",
}, {

    question: "What does Professor McGonagall teach?",
    image: "img/cat.png",
    alt: "Cat",
    choices: [
        "Potions",
        "Herbology",
        "Divination",
        "Transfiguration"
    ],
    correct: 3,
    explanationc: "Correct! Professor Minerva McGonagall is a teacher of Transfiguration, Head of House Gryffindor, registered animagus and later on- Headmistress of Hogwarts!",
    explanationw: "School isn't just about trips to Hogsmeade! Professor Minerva McGonagall is a teacher or Transfiguration, Head of House Gryffindor, registered animagus and later on- Headmistress of Hogwarts!",
    hint: "'This is some of the most complex and dangerous magic you will learn at Hogwarts. Anyone messing around in my class will leave and not come back. You have been warned.'",
}, {

    question: "Who played in the Quidditch World Cup final?",
    image: "img/snitch.png",
    alt: "Snitch",
    choices: [
        "England and France",
        "Romania and Peru",
        "Bulgaria and Ireland",
        "China and Kenya"
    ],
    correct: 2,
    explanationc: "Correct! The 422nd Quidditch World Cup was held in England. Its official sponsors were Butterbeer, Pumpkin Juice, Gringotts Wizarding Bank and Nimbus 2001. The final was between Ireland and Bulgaria. Ireland won.",
    explanationw: "Maybe you're more into Muggle sports! The 422nd Quidditch World Cup was held in England. Its official sponsors were Butterbeer, Pumpkin juice, Gringotts Wizarding bank and Nimbus 2001. The final was between Ireland and Bulgaria. Ireland won.",
    hint: "Victor Krum caught the Snitch! Brackium Emendo!",
}, {

    question: "What was James Potter's nickname?",
    image: "img/map.png",
    alt: "Marauder's map",
    choices: [
        "Moony",
        "Wormtail",
        "Padfoot",
        "Prongs"
    ],
    correct: 3,
    explanationc: "Correct! After years of learning to become animagi in order to accompany their friend Remus in his transformations, James, Sirius and Peter finally mastered the art. Potter became a stag animagus, which earned him the nickname Prongs.",
    explanationw: "After years of learning to become animagi in order to accompany their friend Remus in his transformations, James, Sirius and Peter finally mastered the art. Potter became a stag animagus, which earned him the nickname Prongs.",
    hint: "I solemnly swear that I'm up to no good! ",
}, {

    question: "What form does Harry's patronus take?",
    image: "img/harry.png",
    alt: "Harry Potter",
    choices: [
        "A stag",
        "An otter",
        "A werewolf",
        "A doe"
    ],
    correct: 0,
    explanationc: "Correct! Each patronus is unique to the wizard who conjures it. Harry's is a stag.",
    explanationw: "Hopefully you won't encounter any Dementors soon! Each patronus is unique to the wizard who conjures it. Harry's is a stag.",
    hint: "Harry's and James' patronuses have the same shape! Expecto Patronum!",
}, {

    question: "Who is the Half-Blood Prince?",
    image: "img/book.png",
    alt: "Textbook",
    choices: [
        "Harry Potter",
        "Sirius Black",
        "Rubeus Hagrid",
        "Severus Snape"
    ],
    correct: 3,
    explanationc: "Correct! Hermione's research revealed that Prince was the maiden name of Snape's mother.",
    explanationw: "We need more tolerant, non- racist people like you! Hermione's research revealed that Prince was the maiden name of Snape's mother.",
    hint: "Harry first encounters the misterious Half-Blood-Prince in one of his textbooks. Levicorpus!",
}, {

    question: "What does Dumbledore bequeath to Hermione?",
    image: "img/hallows.png",
    alt: "Deathly Hallows symbol",
    choices: [
        "Gryffindor's Sword",
        "The Elder Wand",
        "The Tales of Beedle the Bard",
        "The Pensieve"
    ],
    correct: 2,
    explanationc: "Correct! The Tales of Beedle the Bard is where Harry, Ron and Hermione first read the legend of the Deathly Hallows.",
    explanationw: "Well, it's almost over anyhow! The Tales of Beedle the Bard is where Harry, Ron and Hermione first read the legend of the Deathly Hallows.",
    hint: "Maybe you should go read The Tale of the Three Brothers!",
}, ];


$(document).ready(function() {

    $(".question, #qimage, .answers, .hint, #modal, .next, .feedback, .results, .explanation, .blur, #overlay, #restart").hide();

    //Load the picture, question and answers after clicking the "Start" button.
    $("#start").on("click", function() {
        $("#simage, h1, #start").hide();
        $("#count, .question, #qimage, .answers, .hint").show();
        currentQuestion++;
        counter();
        askQuestion();
    });

    //Show the hint overlay after clicking on "Show Hint".
    $(".hint").on("click", function() {
        $("#count").hide();
        $("#overlay").fadeIn(700);
        $("#modal").fadeIn(700);
    });

    //Close the hint overlay by clicking the "X" in the upper right corner.
    $(".close").on("click", function() {
        $("#count").show();
        $("#modal").fadeOut(500);
        $("#overlay").fadeOut(500);
    });

    //Close the hint overlay by clicking outside of it.
    $("#overlay").on("click", function() {
        $("#count").show();
        $("#modal").fadeOut(500);
        $("#overlay").fadeOut(500);
    });

    //Show explanation and check answer for correctness after the user picks an answeer.
    $("#answers").on("click", "input:not([readonly])", function() {
        $(".hint").hide();
        $(".explanation").fadeIn(500);
        checkAnswer();
        if (currentQuestion >= allQuestions.length - 1) {
            $(".results").fadeIn(500);
            $(".next").hide();
        } else {
            $(".next").fadeIn(500);
        }
    });

    var currentQuestion = -1;
    var score = 0;

    //Function to show how far user has progressed inthe feedback-t.
    var counter = function() {
        $("#count").text("Question " + (currentQuestion + 1) + " of 10");
    };


    //Function to load the questions, answers, images and hints for every question.
    function askQuestion() {
        $(".ask").text(allQuestions[currentQuestion].question);
        var choices = allQuestions[currentQuestion].choices;

        for (var i = 0; i < choices.length; i++) {
            var radio_button = $("<input>")
                .attr("id", "choices-" + i)
                .attr("type", "radio")
                .attr("name", "options")
                .attr("value", i)
                .attr("checked", i === this.user_choice)
                .appendTo("#answers");

            var choice_label = $("<label>")
                .text(choices[i])
                .attr("for", "choices-" + i)
                .appendTo("#answers");
        }

        $(".hint-text").text(allQuestions[currentQuestion].hint);
        $("#qimage").attr("src", allQuestions[currentQuestion].image);
        $("#qimage").attr("alt", allQuestions[currentQuestion].alt);
    }

    //Function to check if answer is correct.
    function checkAnswer() {
        $("input[type = 'radio']").prop("readonly", true);
        var userAnswer = $("input[type = 'radio']:checked").val();
        var correctAnswer = allQuestions[currentQuestion].correct;
        if (userAnswer == correctAnswer) {
            $(".explanation").text(allQuestions[currentQuestion].explanationc);
            $("input[type = 'radio']:checked + label").addClass("right");
            $("input[type = 'radio']:not(:checked) + label").addClass("answered");
            score++;
        } else {
            $(".explanation").text(allQuestions[currentQuestion].explanationw);
            $("input[type = 'radio']:checked + label").addClass("wrong");
            $("input[value = '" + allQuestions[currentQuestion].correct + "']:not(:checked) + label").addClass("right");
            $("input[type = 'radio']:not(:checked) + label").addClass("answered");
            $("input[value = '" + allQuestions[currentQuestion].correct + "']:not(:checked) + label").removeClass("answered");
        }
    }

    //Function to get results.
    function getResults() {
        $(".correct-count").text("You got " + score + " out of 10 correct!");
        if (score >= 9) {
            $(".headline").text("You are a true Potterhead!");
            $(".feedback-text").text("You love all things Harry Potter and stil haven't given up hope that one day you will find your very own Hogwarts letter in the mail.");
        } else if (score >= 7) {
            $(".headline").text("You know your Harry Potter facts!");
            $(".feedback-text").text("Although some minor details might have escaped your memory, you're still part of the worldwide fandom!");
        } else if (score >= 5) {
            $(".headline").text("You know the basics!");
            $(".feedback-text").text("Maybe it's been a while since you read the books but you remember enough to not feel awkward when someone mentions Harry Potter.");
        } else if (score >= 3) {
            $(".headline").text("You're a bit rusty!");
            $(".feedback-text").text("Your Harry Potter knowledge has waned over the years. Maybe it's time to read those books again!");
        } else if (score >= 1) {
            $(".headline").text("You are a Muggle!");
            $(".feedback-text").text("You need to catch up on your reading or at least see the movies again so you can bring back some magic into your life!");
        } else {
            $(".headline").text("Magic is not your thing!");
            $(".feedback-text").text("Have you ever heard the name Harry Potter?");
        }
    }

    //Clear feedback and ask question when "Next" is clicked.
    $(".next").on("click", function() {
        currentQuestion++;
        counter();
        $(".next, .explanation").hide();
        $(".hint").show();
        $("label, input[type='radio']").remove();
        askQuestion();
    });

    //Clear everything and show results upon clicking "Results".
    $(".results").on("click", function() {
        $("#count, .hint, #answers, #qimage, .explanation, .results").hide();
        $("#restart, .feedback").show();
        getResults();
    });

    //Reload page function.
    function reloadPage() {
        location.reload();
    }

    //Reload the page when user clicks "Play Again".
    $("#restart").on("click", function() {
        reloadPage();
    });

});