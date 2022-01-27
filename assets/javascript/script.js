//start button displays that quiz has started when clicked, displays 1st question
var buttonEl = document.querySelector("#button");
var questionEl = document.querySelector("#question-header");
var answerEl = document.querySelectorAll(".answer")
var counter = 0
var score = ""


buttonEl.addEventListener("click", function () {
  alert("The quiz has started");
  displayContent()

});
for (var i = 0; i < answerEl.length; i++) {
  answerEl[i].addEventListener("click", function (e) {
    alert(e.target.value)  //process answer increment counter to next question
    counter += 1
    displayContent()
  })
}



function displayContent() {
  document.getElementById("qOne").style.display = "block";
  questionEl.textContent = questions[counter].question;
  answerEl.textContent = questions[counter].options;
  document.getElementsByClassName("start-button").style.display = ""


  for (var i = 0; i < answerEl.length; i++) {
    if (i === questions[i].answer) {
      answerEl[i].value = "Correct";
      score += 10

    } else {
      answerEl[i].value = "Wrong";
      score -= 5;
    }
  }
}


// lets user know that answer was right or wrong






//  function w/ ARRAY TO HOLD QUESTIONS


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



//display question
// tell user whether the answer was right or wrong
// log points for correct answer
//proceed to next question
// let user know score