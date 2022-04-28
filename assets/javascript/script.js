//start button displays that quiz has started when clicked, displays 1st question
var buttonEl = document.querySelector("#button");
var questionEl = document.querySelector("#question-header");
var answerEl = document.querySelectorAll(".answer")
var counter = 0;
var score = "";
var displayScore = document.querySelector("your-score")
var a1 = document.querySelector('#a1')
var a2 = document.querySelector('#a2')
var a3 = document.querySelector('#a3')

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
  ] ;



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

  if (event.target.value === questions[counter].Answer) {
    window.alert("Correct")
    // document.getElementById("feedback").textContent = "Correct";
    score += 10

  } else {
    window.alert("wrong")
    // document.getElementById("feedback").textContent = "Wrong";
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

    if (i <= 5) {
      //display text on the radio buttons 
      console.log(answerEl[i]);
      //Display text of the button 
      answerEl[i].textContent = questions[i].options[i];
      answerEl[i].value = questions[i].options[i];

      // a1.value = questions[0].options[0];
      // a1.textContent = questions[0].options[0];


      // a2.value = questions[1].options[1];
      // a2.textContent = questions[1].options[1];


      // a3.value = questions[2].options[2];
      // a3.textContent = questions[2].options[2];

      //Add event listiner 
      answerEl[i].addEventListener("click", validateANs);
    }

    if (counter === 6) { 
      endOfQuiz()
    }
    

  }

}

function endOfQuiz() {

  //document.querySelector("your-score").style.display = "block";
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