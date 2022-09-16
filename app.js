const word_input = document.getElementById("word-input");
const submit_button = document.querySelector("input[type='submit']");
const responses_container = document.getElementById("responses-container");

const count_vowels = function(event) {
    event.preventDefault();
    let word_submitted_by_user = word_input.value;
    let counter = 0;
    for (let i = 0; i < word_submitted_by_user.length; i++) {
        if (
            word_submitted_by_user[i] === "a" ||
            word_submitted_by_user[i] === "e" ||
            word_submitted_by_user[i] === "i" || 
            word_submitted_by_user[i] === "o" ||
            word_submitted_by_user[i] === "u" ||
            word_submitted_by_user[i] === "A" ||
            word_submitted_by_user[i] === "E" ||
            word_submitted_by_user[i] === "I" ||
            word_submitted_by_user[i] === "O" ||
            word_submitted_by_user[i] === "U") {
                counter++;
            }
    }
    let response = document.createElement("p");
    response.innerHTML = "The word " + word_submitted_by_user + " has " + counter + " vowels!"

    responses_container.appendChild(response);
}

submit_button.addEventListener("click", count_vowels);