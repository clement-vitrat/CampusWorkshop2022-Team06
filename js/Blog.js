var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




// AJOUT D'UN COMMENTAIRE ENTIER

function addComment(commentaire_nom, commentaire_date, commentaire_titre, commentaire_paragraphe, commentaire_like, commentaire_img) {
    /* Recherche ID du dernier commentaire */
    /*const id_comm = document.getElementsByClassName('comment_blog')
    const id_comm_art = id_comm.getElementsByClassName('div')
    var id_comm_max = 0;
    for(let i=0; i < id_comm_art.length; i++) {
        const id_comm_num = id_comm_art[i].id.substr(8)
        if (id_comm_num > id_comm_max) {id_comm_max=id_comm_num}
    }*/
    /* Création des différents éléments du commentaire */
    const new_commentaire = document.getElementById('blog')
        /* Création de l'élément `div_comment_blog` */
            const new_com_blog = document.createElement('div')
            new_com_blog.setAttribute('class', 'comment_blog')
        /* Création de l'élément `div_comment` */
            const new_com_div_comment = document.createElement('div')
            new_com_div_comment.setAttribute('class', 'comment-1')
        /* Création de l'élément `div_photo` */
            const new_com_div_photo = document.createElement('div')
            new_com_div_photo.setAttribute('class', 'photo_blog')
        /* Création de l'élément `img` */
            const new_com_div_photo_img = document.createElement('img')
            new_com_div_photo_img.setAttribute('alt', '')
        /* Création de l'élément `div_commentaire` */
            const new_com_div_commentaire = document.createElement('div')
            new_com_div_commentaire.setAttribute('class', 'commentaire')
            /* Création de l'élément `p_user` */
            const new_com_p_user = document.createElement('p')
            new_com_p_user.setAttribute('class', 'comment_user')
            /* Création de l'élément `p_time` */
            const new_com_p_time = document.createElement('p')
            new_com_p_time.setAttribute('class', 'comment_time')
            /* Création de l'élément `h4_titre` */
            const new_com_h4 = document.createElement('h4')
            /* Création de l'élément `p_expli` */
            const new_com_p = document.createElement('p')
            /* Création de l'élément `hr_separation` */
            const new_com_hr = document.createElement('hr')
            new_com_hr.setAttribute('class', 'separation')
            /* Création de l'élément `p_like` */
            const new_com_p_like = document.createElement('p')
            new_com_p_like.setAttribute('class', 'comment_like')


    /* Ajouts des différents éléments de l'article à leur place */
    new_commentaire.append(new_com_blog)
    new_com_blog.append(new_com_div_comment)
    new_com_div_comment.append(new_com_div_photo)
    new_com_div_comment.append(new_com_div_commentaire)
    new_com_div_photo.append(new_com_div_photo_img)
    new_com_div_commentaire.append(new_com_p_user)
    new_com_div_commentaire.append(new_com_p_time)
    new_com_div_commentaire.append(new_com_h4)
    new_com_div_commentaire.append(new_com_p)
    new_com_div_commentaire.append(new_com_hr)
    new_com_div_commentaire.append(new_com_p_like)

    
    /* Ajouts du texte dans les différents éléments de l'article */
    new_com_p_user.innerText = commentaire_nom
    new_com_p_time.innerText = commentaire_date
    new_com_h4.innerText = commentaire_titre
    new_com_p.innerText = commentaire_paragraphe
    new_com_p_like.innerText = commentaire_like
}


addComment('Clément VITRAT', 'Lundi 29 novembre 2021 - 16:25', 'Digital Consultant', 'Lorem ipsum je sai pas quoi dire !', '5', '../img/drapeau_espagne.webp')







// Ex 3 Q4 : ENOIE LE FORMULAIRE
const bt_envoyer = document.querySelector("#new-comment input.btn")
bt_envoyer.setAttribute('type', 'button') /* Changement du type du bouton 'Envoyer' */

bt_envoyer.onclick = function() {
    /* Récupération nom et commentaire saisie dans la zone de donnée */
    const nom_comment = document.querySelector("#new-comment input.form-control").value
    const sujet_comment = document.querySelector("#new-comment textarea.form-control").value
    /* Définition de la date */
    let date_com = new Date()
    let date_com_jour = date_com.toLocaleDateString('fr-FR', {year: 'numeric', month: 'long', day: 'numeric'})
    let date_com_heure = date_com.toLocaleTimeString('fr-FR', {hour: 'numeric', minute: 'numeric', second: 'numeric'})
    let date_com_total = date_com_jour + ' - ' + date_com_heure
    /* Ajout du commentaire */   
    addComment(nom_comment, date_com_total, sujet_comment)
    /* Remise à zéro du formulaire */
    document.querySelector("#new-comment input.form-control").value = ''
    document.querySelector("#new-comment textarea.form-control").value = ''
}