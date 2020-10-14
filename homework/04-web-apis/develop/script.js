
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

//console log questions, options and answer to verify code is working to this point
    console.log(questions)
//trigger onlcick
    document.querySelector("#start").onclick = function(){
        //verify click works
        // alert("click");
        //do your needed show cards
        showQuestion();

    };
    
//set variables and for quiz questions and options
var start = document.querySelector("#button");
var currentQuest = 0;
var questionText = document.querySelector(".questCard");
var optionsText = document.querySelector(".optionsCard")

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

function selectAnswer(k) {
    console.log("selectAnswers")
    console.log(k.target.textContent);
    //evaluate the userinput when they are wrong 

    //or if they are at the end
    nextQuestion();
}

function nextQuestion() {
    console.log("updating the index")
    currentQuest++;
    checkround();
}

var index=0;

function startGame(){
    console.log("starting");
    //hide btn
//call to display
    displayCard();
}

function displayCard(){
    console.log("displaycard");
        //display q
        //display ans
        //displaychoices
        //onclick for the btns
            //when user click on btn..
                checkAns("helloworld");
}

function checkAns(userinput){
    console.log("checking ans")
    console.log("userinput: "+userinput)
}

function addUser(){}
function displayScores(){}

function startTime(){}

function countTime(){}
function stopTime(){}

startGame();

//function restart(){}


//check if you should end or go to the next card
function checkround() {
    console.log("next card");
    console.log("Index:"+ currentQuest);
    //check if you can go to the next card
    showQuestion();
    //check if you are done (index location vs the length of the array)
        //endgame();

}

function endgame(){
    alert("GAME OVER");
    //do ls stuff

    //show (input user data) and hide stuff (questionarea)
   // onclickfx when the hit submit add data to ls and show them the results page
}



// when user clicks on answer button
    //if {
    //it is not the last question, then present next question
    // }
    // else {
        //present end game screen (user sees their score and enters initials to save score)
    // }


    
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