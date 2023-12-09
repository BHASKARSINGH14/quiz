const quizData = [{
        question: 'What is the capital of France?',
        options: ['Berlin', 'Paris', 'Madrid', 'Rome'],
        correctAnswer: 'Paris'
    },
    {
        question: 'Which planet is known as the Red Planet?',
        options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
        correctAnswer: 'Mars'
    },
    {
        question: 'What is the largest mammal?',
        options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
        correctAnswer: 'Blue Whale'
    }
];

let currentQuestion = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const currentQuizData = quizData[currentQuestion];

    questionContainer.innerHTML = `<p>${currentQuizData.question}</p>`;

    optionsContainer.innerHTML = '';
    currentQuizData.options.forEach((option, index) => {
        optionsContainer.innerHTML += `
        <input type="radio" name="answer" value="${option}" id="option${index}">
        <label for="option${index}">${option}</label><br>
      `;
    });
}



function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');

    if (!selectedOption) {
        // Display a message to the user instead of using an alert
        optionsContainer.innerHTML += '<p style="color: red;">Please select an answer!</p>';
        return;
    }

    optionsContainer.innerHTML = ''; // Clear the message

    if (selectedOption.value === quizData[currentQuestion].correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResults();
    }
}


function showResults() {
    questionContainer.innerHTML = `<p>You've completed the quiz!</p>`;
    optionsContainer.innerHTML = `<p>Your score: ${score} out of ${quizData.length}</p>`;
}
document.addEventListener('DOMContentLoaded', function() {
    startQuiz();
});