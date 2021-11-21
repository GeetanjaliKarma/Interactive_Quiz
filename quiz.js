var questions = [
    {
        question: "Which one is the smallest ocean in the world?",
        choices: ["Indian", "Pacific", "Atlantic", "Arctic"],
        correct_answer: 3
    },
    {
        question: "Which country gifted the 'Statue of Liberty' to USA in 1886?",
        choices: ["France", "Canada", "Brazil", "England"],
        correct_answer: 0
    },
    {
        question: "Who invented JavaScript?",
        choices: ["Douglas Crockford","Sheryl Sandberg","Brendan Eich", "None"],
        correct_answer: 2
    },
    {
        question: "Which one of these is a JavaScript package manager?",
        choices: ["Node.js","TypeScript","npm", "None"],
        correct_answer: 2
    },
    {
        question: "Which tool can you use to ensure code quality?",
        choices: ["Angular","jQuery","RequireJS","ESLint"],
        correct_answer: 3
    }

]

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;


$(document).ready(function(){
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();
    $(this).find(".nextButton").on("click", function(){
        console.log("clicked")
        if (!quizOver) {
            value = $("input[type = 'radio']:checked").val();
            console.log(value);
            if (value == undefined) {
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();   
            } else {
                $(document).find(".quizMessage").hide();
                console.log(questions[currentQuestion].correct_answer)
                if (value == questions[currentQuestion].correct_answer) {
                    correctAnswers++;
                }
                currentQuestion++;
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver = true;
                }
            }
        } else {
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });

});
function displayCurrentQuestion() {

    console.log("In display current Question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .questions");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length; 


    $(questionClass).text(question);


    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type = "radio" value =' + i + ' name = "dynradio" />' + choice + '</li>').appendTo(choiceList);  
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of " + questions.length);
    $(document).find(".quizContainer > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
}





