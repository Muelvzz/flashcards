const openBtn = document.getElementById("addCard")
const closeBtn = document.getElementById("closeModal")
const modal = document.getElementById("modal")
const showCard = document.querySelector(".questions")

let flashcards = []
let currentIndex = 0
let showAnswer = false

// Pop-up for the add flashcards
openBtn.addEventListener("click", () => {
    modal.classList.add("open");
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
});

fetch("/api/data")
    .then(response => response.json())
    .then(data => {
        for (const answer in data) {
            const question = data[answer]
            showCard.textContent = question
            console.log(showCard)
        }
    })
    .catch(error => console.error("Error", error))