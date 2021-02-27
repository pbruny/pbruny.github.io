const word = document.getElementById('word')
const score = document.getElementById('score')
const text = document.getElementById('text')
const time = document.getElementById('time')
const endGame = document.getElementById('end-game-container')
const settingsBtn = document.getElementById('settings-btn')
const settings = document.getElementById('settings')
const settingsForm = document.getElementById('settings-form')
const difficultySelect = document.getElementById('difficulty')

const words = [
  'fel',
  'sol',
  'mel',
  'amor',
  'fato',
  'auge',
  'sede',
  'após',
  'pose',
  'sagaz',
  'louco',
  'negro',
  'cerne',
  'expor',
  'gleba',
  'jeito',
  'dogma',
  'empatia',
  'prolixo',
  'candura',
  'alegria',
  'conciso',
  'modesto',
  'coragem',
  'sentido',
  'recíproco',
  'consoante',
  'interesse',
  'paradigma',
  'programação',
  'orientação',
  'amamentação',
]

let randomWord
let currentScore = 0
let currentTime = 15
let difficulty =
  localStorage.getItem('difficulty') !== null
    ? localStorage.getItem('difficulty')
    : 'easy'
time.innerHTML = currentTime + ' sec'

difficultySelect.value = difficulty

const timeInterval = setInterval(updateTime, 1000)

text.focus()

function updateTime() {
  currentTime--
  time.innerHTML = currentTime + ' sec'

  if (currentTime === 0) {
    clearInterval(timeInterval)
    gameOver()
  }
}

function addTimeWhenHitCorrectWord(difficulty) {
  if (difficulty === 'hard') {
    currentTime += 2
  } else if (difficulty === 'medium') {
    currentTime += 4
  } else {
    currentTime += 6
  }
}

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)]
}

function addWordToDOMElement() {
  randomWord = getRandomWord()
  word.innerHTML = randomWord
}

function updateScore() {
  currentScore++
  score.innerHTML = currentScore
}

function gameOver() {
  endGame.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is: ${currentScore}</p>
    <button onclick="location.reload()">Reload game</button>
  `

  endGame.style.display = 'flex'
}

addWordToDOMElement()

text.addEventListener('input', (event) => {
  const inputText = event.target.value

  if (inputText === randomWord) {
    addWordToDOMElement()
    updateScore()
    addTimeWhenHitCorrectWord(difficulty)
    updateTime()
    event.target.value = ''
  }
})

settingsBtn.addEventListener('click', () => {
  settings.classList.toggle('hide')
})

settingsForm.addEventListener('change', (event) => {
  difficulty = event.target.value
  localStorage.setItem('difficulty', difficulty)
})
