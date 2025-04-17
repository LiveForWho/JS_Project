const questions = [
  {
    question: `Loài động vật nào được mệnh danh là "vua của muôn loài"?`,
    answers: [
      { text: "Voi", correct: false },
      { text: "Hổ", correct: false },
      { text: "Sư tử", correct: true },
      { text: "Cá sấu", correct: false },
    ],
  },
  {
    question: `Tháng nào có 28 ngày ?`,
    answers: [
      { text: "Tháng 12", correct: false },
      { text: "Tháng 2", correct: false },
      { text: "Chỉ thắng 2 năm nhuận", correct: false },
      { text: "Tất cả các tháng", correct: true },
    ],
  },
  {
    question: `Con gì không đi mà vẫn đến ?`,
    answers: [
      { text: "Con thoi", correct: false },
      { text: "Con đường", correct: true },
      { text: "Con tàu", correct: false },
      { text: "Con gió", correct: false },
    ],
  },
  {
    question: `Cái gì càng kéo càng ngắn ?`,
    answers: [
      { text: "Sợi dây", correct: false },
      { text: "Điếu thuốc", correct: true },
      { text: "Cái kéo", correct: false },
      { text: "Cái thước", correct: false },
    ],
  },
  {
    question: `Cái gì mà đi thì nằm, đứng cũng nằm, nhưng nằm lại đứng ?`,
    answers: [
      { text: "Cái bàn", correct: false },
      { text: "Cái ghế", correct: false },
      { text: "Bàn chân", correct: true },
      { text: "Cái giường", correct: false },
    ],
  },
  {
    question: `Con gì đập thì sống, không đập thì chết ?`,
    answers: [
      { text: "Con tim", correct: true },
      { text: "Con chim", correct: false },
      { text: "Con cá", correct: false },
      { text: "Con bướm", correct: false },
    ],
  },
  {
    question: `Cái gì luôn đi đến mà không bao giờ đến nơi ?`,
    answers: [
      { text: "Ngày mai", correct: true },
      { text: "Hôm qua", correct: false },
      { text: "Hôm nay", correct: false },
      { text: "Thời gian", correct: false },
    ],
  },
  {
    question: `Cái gì bạn không mượn mà trả ?`,
    answers: [
      { text: "Lời cảm ơn", correct: true },
      { text: "Tiền", correct: false },
      { text: "Đồ dùng", correct: false },
      { text: "Sách", correct: false },
    ],
  },
  {
    question: `Cái gì có 5 ngón tay nhưng không phải là bàn tay ?`,
    answers: [
      { text: "Bàn chân", correct: false },
      { text: "Găng tay", correct: true },
      { text: "Búp bê", correct: false },
      { text: "Đồng hồ", correct: false },
    ],
  },
  {
    question: `Cái gì càng thắng càng thua ?`,
    answers: [
      { text: "Cuộc thi", correct: false },
      { text: "Cuộc đua", correct: false },
      { text: "Cuộc chiến", correct: false },
      { text: "Cuộc đánh bài", correct: true },
    ],
  },
  {
    question: `Cái gì không đào mà sâu ?`,
    answers: [
      { text: "Cái hố", correct: false },
      { text: "Biển", correct: true },
      { text: "Sông", correct: false },
      { text: "Hồ", correct: false },
    ],
  },
  {
    question: `Cái gì không mọc mà cao ?`,
    answers: [
      { text: "Cây", correct: false },
      { text: "Núi", correct: true },
      { text: "Nhà", correct: false },
      { text: "Tháp", correct: false },
    ],
  },
  {
    question: `Cái gì không nói mà biết ?`,
    answers: [
      { text: "Sách", correct: false },
      { text: "Đồng hồ", correct: true },
      { text: "Tivi", correct: false },
      { text: "Radio", correct: false },
    ],
  },
  {
    question: `Cái gì không ăn mà no ?`,
    answers: [
      { text: "Bụng", correct: false },
      { text: "Bình gas", correct: true },
      { text: "Túi", correct: false },
      { text: "Bao", correct: false },
    ],
  },
  {
    question: `Cái gì không uống mà say ?`,
    answers: [
      { text: "Người", correct: false },
      { text: "Lá", correct: true },
      { text: "Hoa", correct: false },
      { text: "Quả", correct: false },
    ],
  },
  {
    question: `Cái gì không ngủ mà mơ ?`,
    answers: [
      { text: "Người", correct: false },
      { text: "Máy tính", correct: true },
      { text: "Điện thoại", correct: false },
      { text: "Tivi", correct: false },
    ],
  },
  {
    question: `Cái gì không chạy mà nhanh ?`,
    answers: [
      { text: "Xe", correct: false },
      { text: "Máy bay", correct: false },
      { text: "Tàu hỏa", correct: false },
      { text: "Thời gian", correct: true },
    ],
  },
  {
    question: `Cái gì không bay mà cao ?`,
    answers: [
      { text: "Máy bay", correct: false },
      { text: "Diều", correct: false },
      { text: "Mây", correct: false },
      { text: "Núi", correct: true },
    ],
  },
  {
    question: `Cái gì không nói mà hiểu ?`,
    answers: [
      { text: "Người", correct: false },
      { text: "Sách", correct: true },
      { text: "Tivi", correct: false },
      { text: "Radio", correct: false },
    ],
  },
  {
    question: `Cái gì không thấy mà biết ?`,
    answers: [
      { text: "Không khí", correct: true },
      { text: "Gió", correct: false },
      { text: "Mưa", correct: false },
      { text: "Nắng", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

const startQuiz = () => {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
};

const showQuestion = () => {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
};

const resetState = () => {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
};

const selectAnswer = (e) => {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
};

const showScore = () => {
  resetState();
  questionElement.innerHTML = `Your score ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
};

const handleNextButton = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
};

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
