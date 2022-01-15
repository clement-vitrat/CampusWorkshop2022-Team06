
// SCRIPT DU MENU (BARRE DE NAVIGATION)
let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

// Fonction qui permet de cliquer
toggle.addEventListener('click', function() {
    body.classList.toggle('open');
})







// CREATION DU JSON
window.addEventListener("DOMContentLoaded", (event) => {
    // Appel de la zone "OU SOMMES-NOUS ?"
        document.getElementById('titre_lieu').textContent = id.titre_lieu;
        document.getElementById('titre2_lieu').textContent = id.titre2_lieu;
        document.getElementById('comm_lieu').textContent = id.comm_lieu;
        document.getElementById('lieu1').textContent = id.lieu1;
        document.getElementById('lieu2').textContent = id.lieu2;
        document.getElementById('lieu3').textContent = id.lieu3;
        document.getElementById('lieu4').textContent = id.lieu4;
});    
window.addEventListener("DOMContentLoaded", (event) => {
    // Appel de la zone pour les "CONDITIONS GENERALES D'UTILISATION"
    // Introduction 
        document.getElementById('CGU_vigueur').textContent = id.CGU_vigueur;
        document.getElementById('disposition_par').textContent = id.disposition_par;
        document.getElementById('adresse_site').textContent = id.adresse_site;
    // Article 1 : Les mentions légales
        document.getElementById('edition_direction_assuree_par').textContent = id.edition_direction_assuree_par;
        document.getElementById('edition_direction_domicile_adresse').textContent = id.edition_direction_domicile_adresse;
        document.getElementById('edition_direction_nb_telephone').textContent = id.edition_direction_nb_telephone;
        document.getElementById('edition_direction_adresse_mail').textContent = id.edition_direction_adresse_mail;
        document.getElementById('nom_de_hebergeur_site').textContent = id.nom_de_hebergeur_site;
        document.getElementById('siege_social_hebergeur_site').textContent = id.siege_social_hebergeur_site;
        document.getElementById('nb_telephone_hebergeur_site').textContent = id.nb_telephone_hebergeur_site;
    // Article 2 : Acces au site
        document.getElementById('services_gratuits_pour_utilisateur').textContent = id.services_gratuits_pour_utilisateur;
        document.getElementById('services_site_internet').textContent = id.services_site_internet;
    // Article 3 : Collecte de donnée
        document.getElementById('site_declaré_CNI_numero').textContent = id.site_declaré_CNI_numero;
        document.getElementById('droit_acces_donnes_perso_utilisateur_par_mail').textContent = id.droit_acces_donnes_perso_utilisateur_par_mail;
        document.getElementById('droit_acces_donnes_perso_utilisateur_par_voie_postale').textContent = id.droit_acces_donnes_perso_utilisateur_par_voie_postale;
    // Article 8 : Publication par l'utilisateur
        document.getElementById('publication_par_utilisateur').textContent = id.publication_par_utilisateur;

});