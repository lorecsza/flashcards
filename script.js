const flashcards = [
    {
        question: "O que é um gene?",
        answer: "Um gene é uma sequência de DNA que codifica uma proteína e determina características hereditárias."
    },
    {
        question: "O que é um alelo?",
        answer: "Um alelo é uma variante de um gene que ocupa a mesma posição no cromossomo."
    },
    {
        question: "Qual é a diferença entre genótipo e fenótipo?",
        answer: "Genótipo é a composição genética de um organismo, enquanto fenótipo é a expressão visível ou funcional dessa composição."
    },
    {
        question: "O que é mutação genética?",
        answer: "Mutação é uma alteração no material genético que pode levar a variações nas características dos organismos."
    },
    {
        question: "O que é hereditariedade?",
        answer: "Hereditariedade é o processo pelo qual as características são transmitidas dos pais para os descendentes."
    }
];

let currentIndex = 0;
let isShowingAnswer = false;
const flashcardContent = document.getElementById('flashcardContent');
const progressBar = document.getElementById('progressBar');

// Mostra a pergunta atual
function showFlashcard() {
    const flashcard = flashcards[currentIndex];
    flashcardContent.textContent = isShowingAnswer ? flashcard.answer : flashcard.question;
    flashcardContent.classList.toggle('show-answer', isShowingAnswer);
    updateProgress();
}

// Alterna entre pergunta e resposta
function toggleFlashcard() {
    isShowingAnswer = !isShowingAnswer;
    showFlashcard();
}

// Vai para o próximo flashcard
function nextFlashcard() {
    isShowingAnswer = false;
    currentIndex = (currentIndex + 1) % flashcards.length;
    showFlashcard();
}

// Atualiza a barra de progresso
function updateProgress() {
    const progress = ((currentIndex + 1) / flashcards.length) * 100;
    progressBar.style.width = progress + "%";
}

// Inicializa o primeiro flashcard
showFlashcard();