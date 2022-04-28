//start button displays that quiz has started when clicked, displays 1st question
var buttonEl = document.querySelector("#button");
var questionEl = document.querySelector("#question-header");
var answerEl = document.querySelectorAll(".answer")
var counter = 0;
var score = null;
var displayScore = document.querySelector("your-score")
var a1 = document.querySelector('#a1')
var a2 = document.querySelector('#a2')
var a3 = document.querySelector('#a3')

const questions =
  [
    {
      question: "What is an array?",
      options: ["A special type of variable that can hold more than one value", "A CSS property?", "I don't know"],
      Answer: "A special type of variable that can hold more than one value"
    },

    {
      question: "What is console.log used for?",
      options: ["changing visability on the document", "Debugging code", "I don't know"],
      Answer: "Debugging code"
    },

    {
      question: "What does the || symbol mean?",
      options: ["OR", "AND", "I don't know"],
      Answer: "OR"
    },

    {
      question: " What does the && symbol mean?",
      options: ["AND", "IF", "TRUE"],
      Answer: "AND"
    },

    {
      question: "How would you code greater than or equal to?",
      options: ["<", "+_", ">="],
      Answer: ">="
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

function validateANs(event) {
  event.preventDefault();
  alert(event.target.value, "Button clicked")  //process answer increment counter to next question

  if (event.target.value === questions[counter].Answer) {
    window.alert("Correct")
    score += 10

  } else {
    window.alert("wrong")
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
  // document.getElementById("feedback").textContent = "";


  if (counter === 4) {
    return endOfQuiz()
  } else {

    for (var i = 0; i < 3; i++) {

      (i <= 5)
      //display text on the radio buttons 
      console.log(answerEl[i]);
      //Display text of the button 
      answerEl[i].textContent = questions[counter].options[i];
      answerEl[i].value = questions[counter].options[i];



      //Add event listiner 
      answerEl[i].addEventListener("click", validateANs);
    }

  }
 console.log(score)
}

function endOfQuiz() {

  // document.getElementById("your-score").style.display = "block";

  document.getElementById("qOne").style.display = "none";
  var initials = window.prompt(`Your score is ${score}. Please enter your name to save your data`)

  var saveData = {
    name: initials,

    finalScore: score
  }

  var playerData = []
  playerData.push(saveData)
  console.log(saveData)

  localStorage.setItem("PlayerData", JSON.stringify(playerData))

}



