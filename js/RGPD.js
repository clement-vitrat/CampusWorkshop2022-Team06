window.addEventListener("DOMContentLoaded", (event) => {
    // Appel de la zone pour les "RGPD"
    // Introduction 
        document.getElementById('tel_DigiConsul').textContent = id.tel_DigiConsul;
        document.getElementById('type_site').textContent = id.type_site;

    // Données recueillis de façon non automatique
        document.getElementById('methode_recup_donne').textContent = id.methode_recup_donne;
    
    // Comment nous utilisons les données personnelles
        document.getElementById('utilisation_donnee').textContent = id.utilisation_donnee;
        document.getElementById('utilisation_donnee_recup').textContent = id.utilisation_donnee_recup;

    // Avec qui nous partageons les données personnelles
        document.getElementById('donne_partager_tiers').textContent = id.donne_partager_tiers;
        document.getElementById('donne_partager_fins').textContent = id.donne_partager_fins;

    // Comment nous protégeos vos données personnelles
        document.getElementById('nom_protocole_secu').textContent = id.nom_protocole_secu;
    
    // Comment modifier, supprimer ou contester les données recueillies
        document.getElementById('agent_protect_nom').textContent = id.agent_protect_nom;
        document.getElementById('agent_protect_adr').textContent = id.agent_protect_adr;
        document.getElementById('agent_protect_mail').textContent = id.agent_protect_mail;
        document.getElementById('agent_protect_tel').textContent = id.agent_protect_tel;

    // Contact
        document.getElementById('contact_tel').textContent = id.contact_tel;
        document.getElementById('contact_adr').textContent = id.contact_adr;
        document.getElementById('contact_mail').textContent = id.contact_mail;
    
    // Final
        document.getElementById('date_vigueur').textContent = id.date_vigueur;
        document.getElementById('copyright_date').textContent = id.copyright_date;
});