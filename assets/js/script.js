// Defining positional variables
var startButton = document.getElementById('startBtn')
var nextButton = document.getElementById('nextBtn')
var questionBox = document.getElementById('questionBox')
var questionEl = document.getElementById('question')
var answerButtons = document.getElementById('answerBtns')
// Adding button ids for text placement
var btnAEl = document.getElementById('btnA')
var btnBEl = document.getElementById('btnB')
var btnCEl = document.getElementById('btnC')
var btnDEl = document.getElementById('btnD')

// Creating an Array containing the quiz's questions
var questions = [
    {
        question: 'What is the current iteration of HTML?',
        
        answers: [
            {text: 'A.) HTML2', correct: false},
            {text: 'B.) HTML1', correct: false},
            {text: 'C.) HTML5', correct: true},
            {text: 'D.) HTML4', correct: false}
        ]
    },

    {
        question: 'The following is an example of an HTML Tag',
        
        answers: [
            {text: 'A.) *div*', correct: false},
            {text: 'B.) <tag>', correct: true},
            {text: 'C.) .HTML', correct: false},
            {text: 'D.) >span<', correct: false}
        ]   
    },

    {
        question: 'CSS was released in what year?',
            
        answers: [
            {text: 'A.) 1996', correct: true},
            {text: 'B.) 2000', correct: false},
            {text: 'C.) 1991', correct: false},
            {text: 'D.) 2012', correct: false}
        ]   
    },
    
    {
        question: 'To connect a CSS file to an HTML file you need what kind of tag?',
                
        answers: [
            {text: 'A.) <script>', correct: false},
            {text: 'B.) <connect>', correct: false},
            {text: 'C.) <add>', correct: false},
            {text: 'D.) <link>', correct: true}
        ]   
    },
    
    {
        question: 'All of the following are Self-Closing Tags EXCEPT?',
                
        answers: [
            {text: 'A.) <link>', correct: false},
            {text: 'B.) <br>', correct: false},
            {text: 'C.) <html>', correct: true},
            {text: 'D.) <input>', correct: false}
        ]   
    }

]

// Variable for questionIndex, can ++ later to proceed to next question
var questionIndex = 0;

// Makes clicking on a button run a function
startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', nextQuestion)

// Hide the start button and display a question
function startQuiz() {
    startButton.classList.add('hidden');
    questionBox.classList.remove('hidden');
    questionIndex = 0;

    nextQuestion()
}

// Loads up the next question in the array into text
function nextQuestion () {
    questionEl.textContent = questions[questionIndex].question;

}