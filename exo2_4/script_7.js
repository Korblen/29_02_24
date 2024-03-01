function botAdolescent(message) {
    if (message.trim() === "") {
        return "t'es en PLS ?";
    } else if (message === message.toUpperCase() && /[A-Z]/.test(message)) {
        return "Pwa, calme-toi...";
    } else if (message.includes("Fortnite")) {
        return "on s' fait une partie soum-soum ?";
    } else if (message.endsWith("?")) {
        return "Ouais Ouais...";
    } else {
        return "balek.";
    }
}

const userInput = prompt("Parle au bot :");
const botResponse = botAdolescent(userInput);
console.log(botResponse);