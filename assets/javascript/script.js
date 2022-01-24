//start button displays that quiz has started when clicked, displays 1st question
var buttonEl = document.querySelector("#button");

buttonEl.addEventListener("click", function() {
  alert("The quiz has started");
  displayContent()
  
});


function displayContent() {
  document.getElementById("qOne").style.display = "block";
}


// lets user know that answer was right or wrong

var correctAnswer = document.querySelector("#correct")

function correct() {
  // check if answer is right
  if (correctAnswer === true) {
    alert("You are correct!")
  } else {
    alert("You are wrong!")
  }


  //display you are correct
}


correctAnswer.addEventListener("click", function () {
  alert("you are right")
})


// NEW function w/ ARRAY TO HOLD QUESTIONS

function quizTime () {
  
  let questions =
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

  for ( var i= 0; i < questions.lenght; i++) {
    
  }
}




//display question 
// tell user whether the answer was right or wrong
// log points for correct answer
//proceed to next question
// let user know score