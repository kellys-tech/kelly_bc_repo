
//set variables for quiz buttons
var start = document.querySelector("#button");

var quizQuest = document.getElementById(".quest");
var quizInp1 = document.getElementById(".userinput1");
var quizImp2 = document.getElementById(".userinput2");
var quizInp3 = document.getElementById(".userinput3");
var quizInp4 = document.getElementById(".userinput4");
var quizAns = document.getElementById(".ans");



var score= 0;

//set variables for questions, options and answers
var questions = [
{
    question: "Commonly used data types DO NOT include ____.", 
    options: ["strings", "alerts", "booleans", "numbers"],
    answer: "alerts"
},
{
    question: "The condition in an if/else statement is enclosed within ____.",
    options: ["quotes","curly brackets","parentheses", "square brackets"],
    answer: "parentheses"
},       
{
    question: "Arrays in JavaScript can be used to store ____.", 
    options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above"
},
{
    question: "String values must be enclosed within ____ when being assigned to variables.", 
    options: ["parentheses", "commas", "curly brackets", "quotes"],
    answer: "quotes"
},
{
    question:  "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: ["JavaScript", "terminal/bash", "for loops","console log"],
    answer: "console log"
}]
//console.log questions, options and answer to verify code is working to this point
    console.log(questions[0])
    console.log(questions[1])
    console.log(questions[2])
    console.log(questions[3])
    console.log(questions[4])

//hide question and answer card
document.getElementById("questCard").style.display = "none";

//create function to click Start Quiz button
document.getElementById("start").addEventListener("click", startQuiz)

//display first question card 
function startQuiz () {
    document.getElementById("questCard").style.display = "block";
    document.getElementById("homepage").style.display = "";
    document.getElementById("quest").innerHTML = "";
    document.getElementById("userinput1").innerHTML = "";
    document.getElementById("userinput2").innerHTML = "";
    document.getElementById("userinput3").innerHTML = "";
    document.getElementById("userinput4").innerHTML = "";
    document.getElementById("ans").innerHTML = "";

}
   
    
//function renderCard(){
    //check the index length
//})


//var time;
//1
//start the time
//2
//countdown
//2.5
//countdownwrong reduce 10s
//3
//stop time

//localstorage 
// var userScore=
// [
//     {
//         name:"sue", 
//         score:10
//     },
//     {
//         name:"sam", 
//         score:1
//     }
// ]
// //display the results run a for loop based on userScore.length
// userScore[1].name
// userScore[1].score


//start.addEventListener("click", function () {

//},

    //else function endGame()
    
   //index=0;
   //restart time;




    

    //onclick for the btn=> grab userinput
    //checkResults(userinput, game.answer[index]);
    //index++;
    //renderCard();
    //if out of bound.. go to endGame()
//}

//function checkResults(userinput, answer){
    //if they are the same keep on going
    //else wrong tell them.. and decrement time
//}

//function endGame(){}


//BEGIN EXTRAS HERE
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