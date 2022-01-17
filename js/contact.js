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
});


// CONTACTEZ-NOUS
$(document).ready(function() {
    $('#boutton').click(function() {
        $('#contact').attr('action',
                            'mailto:clementvitrat@gmail.com?subject=' +
                            $('#name').val() + '&body=' + $('#message').val());
        $('#contact').submit();
    });
});



// NOS AGENCES 
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
}