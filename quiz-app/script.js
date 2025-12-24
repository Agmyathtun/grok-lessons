const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correct: "Mars"
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correct: "4"
  },
  {
    question: "Which language is this quiz built with?",
    options: ["Python", "Java", "JavaScript", "Ruby"],
    correct: "JavaScript"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const submitBtn = document.getElementById("submit");
const resultEl = document.getElementById("result");

function loadQuestion(){
  const current = quizData[currentQuestion];
  questionEl.innerText = current.question;
  optionsEl.innerHTML = "";
}