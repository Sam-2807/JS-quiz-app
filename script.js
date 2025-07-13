// Saare sawaal aur jawaab yahan rakhe hain
const questions = [
    {
        question: "GitHub kis company ka product hai?",
        options: ["Google", "Microsoft", "Apple", "Amazon"],
        answer: "Microsoft"
    },
    {
        question: "HTML ka poora naam kya hai?",
        options: ["HyperText Markup Language", "HomeText Markup Language", "HyperLink Markup Language"],
        answer: "HyperText Markup Language"
    },
    {
        question: "CSS ka istemal kiske liye hota hai?",
        options: ["Styling ke liye", "Logic ke liye", "Database ke liye"],
        answer: "Styling ke liye"
    }
];

// Zaroori HTML elements ko select karein
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit-btn');

// Function: Sawaalon ko page par dikhane ke liye
function buildQuiz() {
    let output = '';
    questions.forEach((currentQuestion, questionNumber) => {
        // Har sawaal ke options ke liye HTML taiyaar karein
        let optionsOutput = '';
        currentQuestion.options.forEach(option => {
            optionsOutput += `
                <label>
                    <input type="radio" name="question${questionNumber}" value="${option}">
                    ${option}
                </label><br>
            `;
        });

        // Poore sawaal ka HTML taiyaar karein
        output += `
            <div class="question-block">
                <div class="question">${currentQuestion.question}</div>
                <div class="options">${optionsOutput}</div>
            </div>
        `;
    });
    quizContainer.innerHTML = output;
}

// Function: Score calculate karne ke liye
function showScore() {
    let score = 0;
    questions.forEach((currentQuestion, questionNumber) => {
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (document.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.answer) {
            score++;
        }
    });
    resultContainer.innerHTML = `Aapka Score: ${score} out of ${questions.length}`;
}

// Shuruaat!
buildQuiz(); // Page load hote hi quiz banao
submitButton.addEventListener('click', showScore); // Button click hone par score dikhao
