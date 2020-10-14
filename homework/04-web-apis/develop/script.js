
//set variables for questions, options and answer
var questions = [
    {
        question: "Commonly used data types DO NOT include ____.",
        options: ["strings", "alerts", "booleans", "numbers"],
        answer: "alerts",
    },
    {
        question: "The condition in an if/else statement is enclosed within ____.",
        options: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses",
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above",
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        options: ["parentheses", "commas", "curly brackets", "quotes"],
        answer: "quotes",
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: ["JavaScript", "terminal/bash", "for loops", "console log"],
        answer: "console log"
    }]
    console.log(questions)

    //trigger onclick to start quiz
    document.querySelector("#start").onclick = function(){
        showQuestion();
};
    
//set variables button and set current question index to 0 to start quiz
var start = document.querySelector("#button");
var currentQuest = 0;

//function to get and display questions and answer options
function showQuestion() {
    document.querySelector("#homepage").style.display = "none";
    console.log(questions[currentQuest]);
    var thisQuest = (questions[currentQuest]);
    document.querySelector("#questCard").textContent = thisQuest.question;

    document.querySelector("#optionsCard").textContent = "";
    thisQuest.options.forEach(function(answer) {
    var newBtn = document.createElement("button");
    newBtn.textContent = answer;
    newBtn.addEventListener("click", selectAnswer);
    document.querySelector("#optionsCard").appendChild(newBtn);
    });
}
//function for action after selecting an answer
function selectAnswer(k) {
    console.log("selectAnswers")
    //evaluate 
    //if they are not at the end of the questions then display next question
    if (currentQuest < 4) {
        console.log ("next question please");
        nextQuestion();
    }
    //if at last question display end game
    else {
        endgame()
        displayScores();
    }
        //if time is up
            //if not go to next question
           //else endGame
}

//function to display next question
function nextQuestion() {
    console.log("updating the index")
    currentQuest++;
    checkround();
}

//check if you should end or go to the next card
function checkround() {
    console.log("next card");
    console.log("Index:"+ currentQuest);
    //check if you can go to the next card
    showQuestion();
    //check if you are done (index location vs the length of the array)
        //endgame();
}

function displayScores(){
    document.querySelector("#submitForm").style.display = "block";
    console.log("submit quiz")
}
function addUser(){}


function startTime(){}

function countTime(){}
function stopTime(){}

//startGame();

//function restart(){}

function endgame(){
   console.log("GAME OVER");
   document.querySelector("#questCard").style.display = "none";
   document.querySelector("#optionsCard").style.display = "none";
    //do localstorage stuff

    //show (input user data) and hide stuff (questionarea)
   // onclickfx when the hit submit add data to ls and show them the results page
}
    
//ACCEPTANCE CRITERIA
//GIVEN I am taking a code quiz
//WHEN I click the start button (in HTML file)
///THEN a timer starts and I am presented with a question

//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and score

//OPTIONAL RESTART
//function restart(){
    //reappend container contents