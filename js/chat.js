// Collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

// Création de la date et l'heure du premier message
function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    $("#chat-timestamp").append(time);
    
}


// Creation du premier message
function firstBotMessage() {
    let firstMessage = "Bonjour, je suis le chatbot DigiConsult ! Comment puis-je vous aidez ? 🤖";
    
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Récupère la réponse
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

// Configuration de la réponse
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = getResponse();
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// Gère l'envoi de texte via des clics de bouton
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

}

// Configuration du bouton "enveloppe"
function sendButton() {
    getResponse();
}

// Configuration du bouton "coeur"
function heartButton() {
    buttonSendText("Merci pour votre réponse !")
}

// Appuyez sur enter pour envoyer le message
$("#textInput").keypress(function (e) {
    getResponse();
})
