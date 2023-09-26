const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    // if(currentQuestionIndex > questions.length) currentQuestionIndex = 0;
    // console.log(questions.length);
    if(currentQuestionIndex < questions.length-1 && currentQuestionIndex >= 0) { //1<2-1
        // nextButton.innerText = "Next";
        currentQuestionIndex++; // 1
    } else{

    }
    setNextQuestion();
})


function startGame() {
    // console.log('startGame',currentQuestionIndex);
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(()=> Math.random() - 0.5)
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    // console.log('setNextQuestion', currentQuestionIndex);
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach((answer) => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button);
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide');
    while(answerButtonsElement.firstChild) {
        // console.log(answerButtonsElement.firstChild)
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    // console.log(e.target)
    const selectedButton = e.target;
    // console.dir(selectedButton)
    const correct = selectedButton.dataset.correct; // true, undefined
    setStatusClass(document.body, correct);
    // console.log(answerButtonsElement)
    // console.log(answerButtonsElement.children) // array-like-object
    // console.log(Array.from(answerButtonsElement.children))
    Array.from(answerButtonsElement.children).forEach(button => {
        // console.dir(button)
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1) { //2>0+1
        nextButton.classList.remove('hide')
    }else {
        startButton.classList.remove('hide')
        startButton.innerText = 'Restart';
        nextButton.classList.add('hide');
    }
    
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if(correct) {
        element.classList.add('correct')
    }else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    // console.log(element)
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'What is 2+2?',
        answers: [
            {text: '4', correct: true},
            {text: '22', correct: false}
        ]
    }, // 0
    {
        question: 'What is 2+6?',
        answers: [
            {text: '8', correct: true},
            {text: '25', correct: false}
        ]
    } //1
]