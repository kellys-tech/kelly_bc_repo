
//set variables for start quiz button
var start = document.querySelector("#button");


//set variables for questions, options and answers
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
        options ["numbers and strings", "other arrays", "booleans", "all of the above"],
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