var startButton = document.getElementById('startBtn')
var nextButton = document.getElementById('nextBtn')
var questionBox = document.getElementById('questionBox')
var questionElement = document.getElementById('question')
var answerButtons = document.getElementById('answerBtns')

var questions = [
    {
        question: 'What is the current iteration of HTML?',
        
        answers: [
            {text: 'A.) HTML2', correct: false}
            {text: 'B.) HTML1', correct: false}
            {text: 'C.) HTML5', correct: true}
            {text: 'D.) HTML4', correct: false}
        ]
    },
    question: 'The following is an example of an HTML Tag',
        
    answers: [
        {text: 'A.) *div*', correct: false}
        {text: 'B.) HTML1', correct: false}
        {text: 'C.) HTML5', correct: true}
        {text: 'D.) HTML4', correct: false}
    ]
{
        
    }
]

startButton.addEventListener('click', startGame)

function startGame() {

}