console.log("hi");
setTimeout( ()=>{
    console.log("Coders");
},2000);

let questions = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    answer: "Delhi"
  },

  {
    question:"What is the capital city of Japan?",
    options:["Hiroshima","Tokyo","Osaka","Kyoto"],
    answer:"Tokyo"
  },
  {
    question:"Which planet is known as the Red Planet?",
    options:["Mars", "Venus", "Saturn", "Jupiter"],
    answer:"Mars"
  },
  {
    question:"What is the square root of 64?",
    options:["7","6","8","9"],
    answer:"8"
  },
  // Add more questions
];

let current = 0;
let score = 0;

function loadQuestion() {
  let q = questions[current];
  document.getElementById("question").innerText = q.question;
  let opts = document.querySelectorAll("#options li");
  opts.forEach((opt, i) => {
    opt.innerText = q.options[i];
  });
}

function checkAnswer(selected) {
  if (selected.innerText === questions[current].answer) {
    score++;
    document.getElementById("score").innerText = "Score: " + score;
  }
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    alert("Quiz Over! Final Score: " + score);
  }
}

loadQuestion();


