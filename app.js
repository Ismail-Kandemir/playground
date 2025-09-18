const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

// Oyunu başlat
startButton.addEventListener('click', startGame)

// Sonraki soruya geç
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - 0.5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Kimin Götü Yanıyor?',
    answers: [
      { text: 'Arda', correct: true },
      { text: 'Cem', correct: false }
    ]
  },
  {
    question: 'Canserin ne zaman mermisi gidecek?',
    answers: [
      { text: 'Evi değiştirirse', correct: false },
      { text: 'Ağlaması bittiğinde', correct: true },
      { text: 'İnterneti değiştirdiğinde', correct: false },
      { text: 'Ne biliyim olum ölçmedim ki awkk', correct: false }
    ]
  },
  {
    question: 'Cemin ikinci ismi nedir?',
    answers: [
      { text: 'Sniper', correct: true },
      { text: 'Tahsin', correct: false },
      { text: 'Yılmaz', correct: false },
      { text: 'Yılar', correct: false }
    ]
  },
  {
    question: 'İsmailin elleri neden titriyor?',
    answers: [
      { text: 'Banane AWk', correct: false },
      { text: 'Çünkü titirek bir ibine', correct: true }
    ]
  },
  {
    question: 'Canser is my girl???',
    answers: [
      { text: 'No', correct: false },
      { text: 'Canser is my girl', correct: true },
      { text: 'Nah', correct: false },
      { text: 'Nein', correct: false }
    ]
  }
]