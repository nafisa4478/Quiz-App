const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById("answer-buttons");


startButton.addEventListener("click", startQuiz);

let shuffledQuestions, currentQuestionIndex;

function startQuiz(){
    // console.log("Start");
    startButton.classList.add("hide");
    shuffledQuestions = questons.sort(() => Math.random() - 0.5)
    // console.log(shuffledQuestions)
    currentQuestionIndex = 0;
    setNextQuestion()
}

function setNextQuestion(ques){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(ques){
    questionElement.innerText = ques.question;
    questionContainerElement.classList.remove("hide")
    ques.answers.forEach((answer)=>{
        // console.log(answer)
        const button = document.createElement("button")
        button.innerText = answer.text;
        console.log(button)
        button.classList.add('btn');
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        answerButtons.appendChild(button)
        button.addEventListener('click', selectAnswer)
    })
}

function selectAnswer(e){
    const button = e.target;
    if(button.dataset.correct){
        button.classList.add("correct")
    }
}

function resetState(){
    clearStatusClass()
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function clearStatusClass(){

}

let questons = [
    {
        question: "what is 2 + 2?",
        answers: [
            {text: "4", correct: true},
            {text: "34", correct: false},
        ]
    },
    {
        question: "what is 2 * 7?",
        answers: [
            {text: "24", correct: false},
            {text: "14", correct: true},
        ]
    }
]