var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// FONCTION AJOUT D'UN COMMENTAIRE ENTIER
function addBlog(blog_div_photo_img, blog_div_com_user, blog_div_com_time, blog_div_com_titre, blog_div_com_text) {
    /* Recherche ID du dernier commentaire */
    const id_comm = document.getElementById('list_blog')
    const id_comm_art = id_comm.getElementsByTagName('article')
    var id_comm_max = 0;
    for(let i=0; i < id_comm_art.length; i++) {
        const id_comm_num = id_comm_art[i].id.substr(8)
        if (id_comm_num > id_comm_max) {id_comm_max=id_comm_num}
    }
    /* Création des différents éléments du commentaire */
    const new_blog = document.getElementById('list_blog')
	/* Création de l'élément `article de class=comment_blog` */
	const new_blog_post = document.createElement('article')
	new_blog_post.setAttribute('id', 'comment-'+(Number(id_comm_max)+1))
    new_blog_post.setAttribute('class', 'comment_blog')
	/* Création de l'élément `div_photo` */
	const new_blog_div_photo = document.createElement('div')
	new_blog_div_photo.setAttribute('class', 'photo_blog')
	/* Création de l'élément `img` */
	const new_blog_div_photo_img = document.createElement('img')
	new_blog_div_photo_img.setAttribute('alt', '')
	new_blog_div_photo_img.setAttribute('src', blog_div_photo_img)
	/* Création de l'élément `div_commentaire` */
	const new_blog_div_comm = document.createElement('div')
	new_blog_div_comm.setAttribute('class', 'commentaire')
	/* Création de l'élément `user` */
	const new_blog_div_com_user_ico = document.createElement('i')
	new_blog_div_com_user_ico.setAttribute('class' ,'fas fa-user-circle')
	const new_blog_div_com_user = document.createElement('p')
	new_blog_div_com_user.setAttribute('class', 'comment_user')
	/* Création de l'élément `time` */
	const new_blog_div_com_time_ico = document.createElement('i')
	new_blog_div_com_time_ico.setAttribute('class', 'far fa-clock')
	const new_blog_div_com_time = document.createElement('p')
	new_blog_div_com_time.setAttribute('class', 'comment_time')
	/* Création de l'élément `h4_titre` */
	const new_blog_div_com_titre = document.createElement('h4')
	/* Création de l'élément `p_expli` */
	const new_blog_div_com_text = document.createElement('p')
	/* Création de l'élément `hr_separation` */
	const new_blog_div_com_lig = document.createElement('hr')
	new_blog_div_com_lig.setAttribute('class', 'separation')
	/* Création du bouton like` */
	const new_blog_div_com_like = document.createElement('button')
	new_blog_div_com_like.setAttribute('id', 'like_post')
    new_blog_div_com_like.setAttribute('class', 'bt_like')
	const new_blog_div_com_like_ico = document.createElement('i')
	new_blog_div_com_like_ico.setAttribute('class', 'fa fa-thumbs-up')
	const new_blog_div_com_like_nb = document.createElement('span')
	new_blog_div_com_like_nb.setAttribute('class', 'comment_like')
	


    /* Ajouts des différents éléments de l'article à leur place */
    new_blog.append(new_blog_post)
    new_blog_post.append(new_blog_div_photo)
    new_blog_div_photo.append(new_blog_div_photo_img)
    new_blog_post.append(new_blog_div_comm)
    new_blog_div_comm.append(new_blog_div_com_user_ico)
	new_blog_div_com_user_ico.append(new_blog_div_com_user)
    new_blog_div_comm.append(new_blog_div_com_time_ico)
	new_blog_div_com_time_ico.append(new_blog_div_com_time)
    new_blog_div_comm.append(new_blog_div_com_titre)
    new_blog_div_comm.append(new_blog_div_com_text)
    new_blog_div_comm.append(new_blog_div_com_lig)
	new_blog_div_comm.append(new_blog_div_com_like)
    new_blog_div_com_like.append(new_blog_div_com_like_ico)
    new_blog_div_com_like_ico.append(new_blog_div_com_like_nb)

    
    /* Ajouts du texte dans les différents éléments de l'article */
    new_blog_div_com_user.innerText = blog_div_com_user
    new_blog_div_com_time.innerText = blog_div_com_time
    new_blog_div_com_titre.innerText = blog_div_com_titre
    new_blog_div_com_text.innerText = blog_div_com_text
	new_blog_div_com_like_nb.innerText = '0'
}


addBlog('../img/chatbot.webp', 'Petit JEAN', 'Jeudi 20 janvier 2022 - 21:105', 'External Intervenant', 'Je suis le meilleur!!!')


// ENOIE LE FORMULAIRE
const bt_envoyer = document.querySelector("#ajout_post input.form_bouton")
bt_envoyer.setAttribute('type', 'button') /* Changement du type du bouton 'Envoyer' */

bt_envoyer.onclick = function() {
    /* Récupération nom et commentaire saisie dans la zone de donnée */
    const nom_comment = document.querySelector("#ajout_post input.comment_nom").value
    const titre_comment = document.querySelector("#ajout_post input.comment_titre").value
    const desc_comment = document.querySelector("#ajout_post textarea.comment_desc").value
    /* Définition de la date */
    let date_com = new Date()
    let date_com_jour = date_com.toLocaleDateString('fr-FR', {year: 'numeric', month: 'long', day: 'numeric'})
    let date_com_heure = date_com.toLocaleTimeString('fr-FR', {hour: 'numeric', minute: 'numeric', second: 'numeric'})
    let date_com_total = date_com_jour + ' - ' + date_com_heure
    /* Ajout du commentaire */   
    addBlog('',nom_comment, date_com_total, titre_comment,desc_comment)
    /* Remise à zéro du formulaire */
    document.querySelector("#ajout_post input.comment_nom").value = ''
	document.querySelector("#ajout_post input.comment_titre").value = ''
    document.querySelector("#ajout_post textarea.comment_desc").value = ''
	modal.style.display = "none";

}

AUGMENTER LE NOMBRE AFFICHE SUR LE BOUTON LIKE
var bt_like = document.getElementById('like_post')
var num_bt_like = bt_like.querySelector('span')
var like_fait; /* Création d'une variable like_fait valeur indéfinie */
bt_like.onclick = function() {
    if (like_fait != true) { /* Controle si like_fait est vrai */
        num_bt_like.textContent = Number(num_bt_like.textContent) + 1
        like_fait = true /* Mise à vrai de like_fait suite premier clic */
    }
}