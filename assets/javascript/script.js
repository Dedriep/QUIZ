//start button
var buttonEl = document.querySelector("#button");

buttonEl.addEventListener("click", function() {
  alert("The quiz has started");
  displayContent()
  
});

var correctAnswer = document.querySelector("#correct")


function displayContent() {
  document.getElementById("qOne").style.visibility = "block";
}


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


//display question 
// tell user whether the answer was right or wrong
// log points for correct answer
//proceed to next question
// let user know score