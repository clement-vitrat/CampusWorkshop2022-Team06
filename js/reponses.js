function getBotResponse(input) {
    // Question 1 : En quoi consiste votre offre ?
    if (input == "En quoi consiste votre offre ?") {
        return "";
    } else if (input == "en quoi consiste votre offre ?") {
        return "";
    } else if (input == "en quoi consiste votre offre") {
        return "";
    } else if (input == "En quoi consiste votre offre") {
        return "";
    }

    // Question 2 : Quelles solutions proposez-vous ?
    if (input == "Quelles solutions proposez-vous ?") {
        return "Voici quelques solutions que nous pouvons réaliser avec vous : un site web, un e-commerce, une création de marque, une stratégie de communivation, un audit, un chat bot, une application mobile voire des solutions ERP.";
        return "Une de nos solutions vous intéresse-elles ?";
    } else if (input == "quelles solutions proposez-vous ?") {
        return "Voici quelques solutions que nous pouvons réaliser avec vous : un site web, un e-commerce, une création de marque, une stratégie de communivation, un audit, un chat bot, une application mobile voire des solutions ERP.";
    } else if (input == "Quelles solutions proposez-vous") {
        return "Voici quelques solutions que nous pouvons réaliser avec vous : un site web, un e-commerce, une création de marque, une stratégie de communivation, un audit, un chat bot, une application mobile voire des solutions ERP.";
    } else if (input == "quelles solutions proposez-vous") {
        return "Voici quelques solutions que nous pouvons réaliser avec vous : un site web, un e-commerce, une création de marque, une stratégie de communivation, un audit, un chat bot, une application mobile voire des solutions ERP.";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}