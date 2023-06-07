const questions = [
    {
        question: "Who invented OOP?",
        answers: [
            { text: "Andrea Ferro", correct: false},
            { text: "Adele Goldberg", correct: false},
            { text: "Alan Kay", correct: true},
            { text: "Dennis Ritchie", correct: false},
        ]
    },
    {
        question: "Which was the first purely object oriented programming language developed?",
        answers: [
            { text: "Kotlin", correct: false},
            { text: "SmallTalk", correct: true},
            { text: "Java", correct: false},
            { text: "C++", correct: false},
        ]
    },
    {
        question: "Which feature of OOP indicates code reusability?",
        answers: [
            { text: "Abstraction", correct: false},
            { text: "Polymorphism", correct: false},
            { text: "Encapsulation", correct: false},
            { text: "Inheritance", correct: true},
        ]
    },
    {
        question: "Which among the following doesn’t come under OOP concept?",
        answers: [
            { text: "Data hiding", correct: false},
            { text: "Message passing", correct: false},
            { text: "Platform independent", correct: true},
            { text: "Data binding", correct: false},
        ]
    },
    {
        question: "The feature by which one object can interact with another object is____",
        answers: [
            { text: "Message reading", correct: false},
            { text: "Message Passing", correct: true},
            { text: "Data transfer", correct: false},
            { text: "Data Binding", correct: false},
        ]
    },
    {
        question: "How many types of access specifiers are provided in OOP (C++)?",
        answers: [
            { text: "4", correct: false},
            { text: "3", correct: true},
            { text: "2", correct: false},
            { text: "1", correct: false},
        ]
    },
    {
        question: "In multilevel inheritance, which is the most significant feature of OOP used?",
        answers: [
            { text: "Code efficiency", correct: false},
            { text: "Code readability", correct: false},
            { text: "Flexibility", correct: false},
            { text: "Code reusability", correct: true},
        ]
    },
    {
        question: "Which of the following is not true about polymorphism?",
        answers: [
            { text: "Helps in redefining the same functionality", correct: false},
            { text: "Increases overhead of function definition always", correct: true},
            { text: "It is feature of OOP", correct: false},
            { text: "Ease in readability of program", correct: false},
        ]
    },
    {
        question: " Which access specifier is usually used for data members of a class?",
        answers: [
            { text: "Protected", correct: false},
            { text: "Private", correct: true},
            { text: "Public", correct: false},
            { text: "Default", correct: false},
        ]
    },
    {
        question: "Which feature of OOP reduces the use of nested classes?",
        answers: [
            { text: "Inheritance", correct: true},
            { text: "Binding", correct: false},
            { text: "Abstraction", correct: false},
            { text: "Encapsulation", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNO = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNO + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});


startQuiz();