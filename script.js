// Jeu de devinette avec interface HTML

const min = 1; // Limite inférieure
const max = 100; // Limite supérieure
const nombreMystere = Math.floor(Math.random() * (max - min + 1)) + min; // Générer le nombre mystère
let tentative = 0;

// Initialiser les éléments HTML
document.getElementById("range").textContent = `${min} et ${max}`;
const feedback = document.getElementById("feedback");
const attempts = document.getElementById("attempts");
const submitButton = document.getElementById("submit");
const guessInput = document.getElementById("guess");

// Fonction pour vérifier la réponse
submitButton.addEventListener("click", () => {
    const reponse = parseInt(guessInput.value, 10);
    tentative++;

    if (isNaN(reponse)) {
        feedback.textContent = "Ce n'est pas un nombre valide. Veuillez réessayer !";
    } else if (reponse < min || reponse > max) {
        feedback.textContent = `Le nombre doit être compris entre ${min} et ${max}.`;
    } else if (reponse < nombreMystere) {
        feedback.textContent = "C'est plus !";
    } else if (reponse > nombreMystere) {
        feedback.textContent = "C'est moins !";
    } else {
        feedback.textContent = `🎉 Félicitations ! Vous avez trouvé le nombre ${nombreMystere} en ${tentative} tentative(s).`;
        submitButton.disabled = true;
        guessInput.disabled = true;
    }

    attempts.textContent = `Tentative(s) : ${tentative}`;
    guessInput.value = ""; // Réinitialiser le champ
});
