// Defining variables to their html element
var startButton = document.getElementById('startBtn')
var nextButton = document.getElementById('nextBtn')
var questionBox = document.getElementById('questionBox')
var questionEl = document.getElementById('question')
var answerButtons = document.getElementById('answerBtns')
var btn = document.getElementsByClassName('btn')
var timer = document.getElementById('timer')
var timeRemaining = document.getElementById('timeRemaining')
var showAnswerEl = document.getElementById('showAnswer')

var numCorrect = 0
var numIncorrect = 0

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
            'A.) HTML2',
            'B.) HTML1',
            'C.) HTML5',
            'D.) HTML4'
        ],

        answer: 'C.) HTML5'
    },

    {
        question: 'The following is an example of an HTML Tag',
        
        answers: [
            'A.) *div*',
            'B.) <tag>',
            'C.) .HTML',
            'D.) >span<'
        ],

        answer: 'B.) <tag>'
    },

    {
        question: 'CSS was released in what year?',
            
        answers: [
            'A.) 1996',
            'B.) 2000',
            'C.) 1991', 
            'D.) 2012'
        ],

        answer: 'A.) 1996'
    },
    
    {
        question: 'To connect a CSS file to an HTML file you need what kind of tag?',
                
        answers: [
            'A.) <script>',
            'B.) <connect>',
            'C.) <add>',
            'D.) <link>'
        ],

        answer: 'D.) <link>'
    },
    
    {
        question: 'All of the following are Self-Closing Tags EXCEPT?',
                
        answers: [
            'A.) <link>',
            'B.) <br>',
            'C.) <html>',
            'D.) <input>'
        ],

        answer: 'C.) <html>'
    }

]

// Variable for questionIndex, can ++ later to proceed to next question
var questionIndex = 0;
// Makes clicking on a button run a function
startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', nextQuestion)

// Adding Timer functionality
var timePool = 120;
// Hide the start button and display a question
function startQuiz() {
    startButton.classList.add('hidden');
    questionBox.classList.remove('hidden');
    // nextButton.classList.remove('hidden');
    questionIndex = 0;
// Reduce timepool by 1 every second, stops at 0 and executes final function
    var startTimer = setInterval(function() {
        timePool--;
        timeRemaining.textContent = timePool;
        if(timePool <= 0) {
            clearInterval(startTimer);
            if (questionIndex < questions.length - 1) {
                gameOver();
            }
        }
    },1000);
    showQuestion()
}

// Displays the question
function showQuestion () {
    questionEl.textContent = questions[questionIndex].question;
    btnAEl.textContent = questions[questionIndex].answers[0];
    btnBEl.textContent = questions[questionIndex].answers[1];
    btnCEl.textContent = questions[questionIndex].answers[2];
    btnDEl.textContent = questions[questionIndex].answers[3];

}
// Introduces next question
function nextQuestion() {
    showQuestion()
    showAnswerEl.classList.add('hidden')
}

function showAnswer(answer) {
showAnswerEl.classList.remove('hidden')

if(questions[questionIndex].answer === questions[questionIndex].answers[answer]){
    numCorrect++
    showAnswerEl.textContent = "Correct!"
} else {
    timePool -= 10
    timeRemaining.textContent = timePool
    showAnswerEl.textContent = "Incorrect! The correct Answer is " + questions[questionIndex].answer
}
// Cycles to next question
    questionIndex++;
// Allows the answer to be shown beneath the quiz for 3 seconds before proceeding
if (questionIndex < questions.length) {
    setTimeout(function() {nextQuestion()}, 3000)
} else {
//end game
    gameOver()
}
}


// Provide parameters for show answer when buttons with these functions are pressed.
function checkA() {showAnswer(0)}
function checkB() {showAnswer(1)}
function checkC() {showAnswer(2)}
function checkD() {showAnswer(3)}
// Quiz Button Event Listeners
btnAEl.addEventListener('click', checkA)
btnBEl.addEventListener('click', checkB)
btnCEl.addEventListener('click', checkC)
btnDEl.addEventListener('click', checkD)