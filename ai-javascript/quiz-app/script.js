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

console.log(currentQuestion);

const quizContainer = document.querySelector('.quiz-container');
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const submitBtn = document.getElementById("submit");
const resultEl = document.getElementById("result");

function loadQuestion(){
  const current = quizData[currentQuestion];
  questionEl.innerText = current.question;
  optionsEl.innerHTML = "";

  current.options.forEach(option => {
    const div = document.createElement("div");
    div.classList.add("option");

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.value = option;

    const label = document.createElement("label");
    label.innerText = option;

    div.appendChild(input);
    div.appendChild(label);
    optionsEl.appendChild(div);
  });
}
function getSelected(){
  const answers = document.querySelectorAll('input[name="answer"]');
  let selected;

  answers.forEach(answer =>{
    
    if(answer.checked){
      selected = answer.value;
    }
  });

  return selected;
}

submitBtn.addEventListener('click', () =>{
  const answer = getSelected();
  if(answer){
    if(answer === quizData[currentQuestion].correct){
      score++;
    }
    currentQuestion++;

    if(currentQuestion < quizData.length){
      loadQuestion();
    }else{
      showResult();
    }
  }
});

function showResult(){
  quizContainer.innerHTML = `
    <h2> Your score ${score} / ${quizData.length}</h2>
    <button onclick="location.reload()">Reload</button>
    `

}

loadQuestion();