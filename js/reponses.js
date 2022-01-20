function getBotResponse(input) {
    // Question 1 : En quoi consiste votre offre ?
    if ((input == "En quoi consiste votre offre ?") || (input == "en quoi consiste votre offre ?") || (input == "en quoi consiste votre offre") || (input == "En quoi consiste votre offre")) {
        return "Digital Consultant est la marque qui réunit les meilleurs indépendants et entreprise du Web pour livrer un service, personnalisé et de bout en bout qui s'adapte à la structure et au portefeuille de ses clients.";
    }

    // Question 2 : Quelles solutions proposez-vous ?
    if ((input == "Quelles solutions proposez-vous ?") || (input == "quelles solutions proposez-vous ?") || (input == "Quelles solutions proposez-vous") || (input == "quelles solutions proposez-vous")) {
        return "Voici quelques solutions que nous pouvons réaliser avec vous : un site web, un e-commerce, une création de marque, une stratégie de communivation, un audit, un chat bot, une application mobile, des solutions ERP.";
    } 

    // Question 2b : site web :
    if ((input == "site web") || (input == "un site web") || (input == "Site Web") || (input == "site Web")) {
        return "Notre but est de vous assurez votre présence en ligne en publiant le contenu essentiel de votre activité sur un site internet entièrement personnalisé.";
    }

    // Question 2b : e-commerce :
    if ((input == "e-commerce") || (input == "un e-commerce") || (input == "ecommerce") || (input == "e commerce")) {
        return "Notre but est de vous proposez une solution de site e-commerce vous permettant de vendre 24 heures sur 24 et 7 jours sur 7.";
    }

    // Question 2b : création de marque :
    if ((input == "création de marque") || (input == "une creation de marque") || (input == "une création de marque") || (input == "creation de marque")) {
        return "Nous créons l'identité visuelle originale de votre marque à travers la création de son logo, de sa charte graphique et la conception de votre site internet.";
    } 

    // Question 2b : stratégie de communication :
    if ((input == "stratégie de communication") || (input == "strategie de communication") || (input == "une stratégie de communication") || (input == "une strategie de communication")) {
        return "Notre but est de vous proposez un accompagnement sur mesure, mené par des professionnels de la communication.";
    } 
    
    // Question 2b : audit :
    if ((input == "audit") || (input == "un audit")) {
        return "Nous cherchons ensemble quels sont vos axes d’amélioration possibles, nous analysons les méthodes et outils mis en place par votre entreprise.";
    } 
    
    // Question 2b : chat bot :
    if ((input == "chat bot") || (input == "un chat bot")) {
        return "Mettez l'intelligence artificielle au service de votre relation client. Automatisez les tâches à faible valeur ajoutée et créez des services interactifs.";
    } 

    // Question 2b : application mobile :
    if ((input == "application mobile") || (input == "une application mobile")) {
        return "Rendre votre entreprise mobile n’est plus un sujet de débat. Aujourd’hui vos clients et employés s’attendent à interagir avec vous du bout des doigts.";
    } 
    
    // Question 2b : solutions ERP :
    if ((input == "solutions ERP") || (input == "solutions erp") || (input == "des solutions ERP") || (input == "des solutions erp")) {
        return "Nos solutions ERP s’adaptent aux besoins et aux spécificités du marché de la prestation de services et répondent aux enjeux des professionnels.";
    } 


    // Simple responses
    if (input == "Bonjour") {
        return "Bonjour !";
    } else if ((input == "Merci au revoir") || (input == "Au revoir")) {
        return "Au revoir !";
    } else if (input == "Merci pour votre réponse !") {
        return "Je vous en prie !";
    } else if ((input == "Merci") || (input == "merci")) {
        return "Si vous des questions plus spécifiques veuillez vous dirigez vers la page 'Contact' ";
    } else {
        return "Je n'ai pas compris votre question.";
    }
}