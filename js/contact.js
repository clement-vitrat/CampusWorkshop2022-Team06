// CREATION DU JSON
window.addEventListener("DOMContentLoaded", (event) => {
    // Appel de la zone "NOS VALEURS"
        document.getElementById('tit_page').textContent = id.tit_page;

    // Appel de la zone "CONTACT"
        document.getElementById('titre_contact').textContent = id.titre_contact;
        document.getElementById('titre2_contact').textContent = id.titre_contact;

    // Appel de la zone "NOS AGENCES"
        document.getElementById('titre_agences').textContent = id.titre_agences;
        document.getElementById('titre2_agences').textContent = id.titre_agences;
		document.getElementById('ag1_lieu').textContent = id.ag1_lieu;
		document.getElementById('ag2_lieu').textContent = id.ag2_lieu;
		document.getElementById('ag3_lieu').textContent = id.ag3_lieu;
		document.getElementById('ag4_lieu').textContent = id.ag4_lieu;
		document.getElementById('ag1_adr_lig1').textContent = id.ag1_adr_lig1;
		document.getElementById('ag1_adr_lig2').textContent = id.ag1_adr_lig2;
		document.getElementById('ag1_adr_lig3').textContent = id.ag1_adr_lig3;
		document.getElementById('ag1_con_mail').textContent = id.ag1_con_mail;
		document.getElementById('ag1_con_tel').textContent = id.ag1_con_tel;
		document.getElementById('ag2_adr_lig1').textContent = id.ag2_adr_lig1;
		document.getElementById('ag2_adr_lig2').textContent = id.ag2_adr_lig2;
		document.getElementById('ag2_adr_lig3').textContent = id.ag2_adr_lig3;
		document.getElementById('ag2_con_mail').textContent = id.ag2_con_mail;
		document.getElementById('ag2_con_tel').textContent = id.ag2_con_tel;
		document.getElementById('ag3_adr_lig1').textContent = id.ag3_adr_lig1;
		document.getElementById('ag3_adr_lig2').textContent = id.ag3_adr_lig2;
		document.getElementById('ag3_adr_lig3').textContent = id.ag3_adr_lig3;
		document.getElementById('ag3_con_mail').textContent = id.ag3_con_mail;
		document.getElementById('ag3_con_tel').textContent = id.ag3_con_tel;
		document.getElementById('ag4_adr_lig1').textContent = id.ag4_adr_lig1;
		document.getElementById('ag4_adr_lig2').textContent = id.ag4_adr_lig2;
		document.getElementById('ag4_adr_lig3').textContent = id.ag4_adr_lig3;
		document.getElementById('ag4_con_mail').textContent = id.ag4_con_mail;
		document.getElementById('ag4_con_tel').textContent = id.ag4_con_tel;
});


// ENVOI MESSAGE
function EnvoiMail() {
	// Adresse de destination du mail de contact
	var dest="clementvitrat@gmail.com";
	
	//Objet du message
	var obj="Message de contact depuis le site DIGITAL CONSULTING"
	
	//Emetteur du message
	var emm=encodeURIComponent(document.getElementById("mess_mail").value);
	
	//Mise en forme du corpd du message
	var mess = "";
	mess="Message de "+encodeURIComponent(document.getElementById("mess_nom").value)
		+" "+encodeURIComponent(document.getElementById("mess_prenom").value)
		+encodeURIComponent("\n")
		+"Téléphone : "+encodeURIComponent(document.getElementById("mess_tel").value)
		+encodeURIComponent("\n")
		+"Adresse mail : "+emm
		+encodeURIComponent("\n\n")+"Message :"+encodeURIComponent("\n")
		+encodeURIComponent(document.getElementById("mess_message").value);
	
	// préparation du mailto
	var url="mailto:"+dest+"?cc="+emm+"&subject="+obj+"&body="+mess;
	
	// Ouverture de la messagerie
	document.location=url;	
}
 

// NOS AGENCES 
function ouv_agences(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("agence_detail");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("agence_lieu");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}