var startButton = document.getElementById('startBtn')
var nextButton = document.getElementById('nextBtn')
var questionBox = document.getElementById('questionBox')
let shuffledQuestions, currentQuestionIndex
var questionElement = document.getElementById('question')
var answerButtons = document.getElementById('answerBtns')

startButton.addEventListener('click', startGame)

function startGame() {
    startButton.classList.add('hide');
    // shuffledQuestions = questions.sort(function(){ Math.random() - .5}); Initial version, converted to arrow function
	shuffledQuestions = questions.sort(() => Math.random() - .5);

}