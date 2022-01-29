//start button displays that quiz has started when clicked, displays 1st question
var buttonEl = document.querySelector("#button");
var questionEl = document.querySelector("#question-header");
var answerEl = document.querySelectorAll(".answer")
var counter = 0;
var score = "";
var displayScore = document.querySelector("your-score")

const questions =
  [
    {
      question: "What is an array?",
      options: ["A special type of variable that can hold more than one value", "A CSS property?", "I don't know"],
      Answer: 0,
    },

    {
      question: "What is console.log used for?",
      options: ["changing visability on the document", "Debugging code", "I don't know"],
      Answer: 1,
    },

    {
      question: "What does the || symbol mean?",
      options: ["OR", "AND", "I don't know"],
      Answer: 0,
    },

    {
      question: " What does the && symbol mean?",
      options: ["AND", "IF", "TRUE"],
      Answer: 0,
    },

    {
      question: "How would you code greater than or equal to?",
      options: ["<", "+_", ">="],
      Answer: 2,
    },
  ];



buttonEl.addEventListener("click", function (event) {
  event.preventDefault();
  alert("The quiz has started");
  displayContent()
  startClock();
});

function startClock() {

}

//for (var i = 0; i < answerEl.length; i++) {
//answerEl[i].addEventListener("click", function (event) {
function validateANs(event) {
  event.preventDefault();
  alert(event.target.value, "Button clicked")  //process answer increment counter to next question

  if (event.target.value === questions[counter].answer) {
    document.getElementById("feedback").textContent = "Correct";
    score += 10

  } else {
    document.getElementById("feedback").textContent = "Wrong";
    score -= 5;
  }
  //Move to next question 
  counter += 1
  displayContent();
}



function displayContent() {
  document.getElementById("qOne").style.display = "block";
  questionEl.textContent = questions[counter].question;
  answerEl.textContent = questions[counter].options;
  buttonEl.style.display = "none"
  console.log("answerEl", answerEl);

  //reset the feedback element to blank text 
  document.getElementById("feedback").textContent = "";

  for (var i = 0; i < 5; i++) {

    if (i <= 4) {
      //display text on the radio buttons 
      console.log(answerEl[i]);
      //Display text of the button 
      answerEl[i].textContent = questions[counter].options[i];
      answerEl[i].value = questions[counter].options[i];
      //Add event listiner 
      answerEl[i].addEventListener("click", validateANs);
    }

    if (i = 5) { 
      endOfQuiz()
    }
    

  }

}

function endOfQuiz() {

  document.querySelector("your-score").style.display = "block";
  document.getElementById("qOne").style.display = "block";



}
// lets user know that answer was right or wrong






//  function w/ ARRAY TO HOLD QUESTIONS



//display question
// tell user whether the answer was right or wrong
// log points for correct answer
//proceed to next question
// let user know score

localStorage.setItem("player")