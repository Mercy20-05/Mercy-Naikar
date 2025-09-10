const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Trainer Marking Language",
      "Hyper Text Markup Language",
      "High Text Markup Language",
      "Hyper Tool Multi Language"
    ],
    answer: 1
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: 2
  },
  {
    question: "Which is not a JavaScript framework?",
    options: ["React", "Angular", "Vue", "Python"],
    answer: 3
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "/* */", "#", "<!-- -->"],
    answer: 0
  }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const scoreElement = document.getElementById("score");
const progressElement = document.getElementById("progress");

function loadQuestion() {
  let q = questions[currentQuestion];
  questionElement.textContent = q.question;
  optionsElement.innerHTML = "";
  progressElement.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
  nextBtn.disabled = true;

  q.options.forEach((option, index) => {
    const btn = document.createElement("div");
    btn.textContent = option;
    btn.classList.add("option");
    btn.onclick = () => selectAnswer(index, btn);
    optionsElement.appendChild(btn);
  });
}

function selectAnswer(index, btn) {
  const correctIndex = questions[currentQuestion].answer;
  const allOptions = document.querySelectorAll(".option");

  allOptions.forEach(opt => opt.onclick = null); // disable further clicks

  if (index === correctIndex) {
    btn.classList.add("correct");
    score++;
  } else {
    btn.classList.add("wrong");
    allOptions[correctIndex].classList.add("correct");
  }

  nextBtn.disabled = false;
}

function showResult() {
  quizBox.classList.add("hidden");
  resultBox.classList.remove("hidden");
  scoreElement.textContent = `You scored ${score} out of ${questions.length}`;
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

// Load first question
loadQuestion();
