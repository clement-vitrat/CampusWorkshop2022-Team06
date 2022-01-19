window.addEventListener("DOMContentLoaded", (event) => {
    // Appel de la zone "NOS VALEURS"
        document.getElementById('tit_page').textContent = id.tit_page;

    // Appel de la zone "NOS SOLUTIONS"
        document.getElementById('titre_solution').textContent = id.titre_solution;
        document.getElementById('titre2_solution').textContent = id.titre_solution;
		document.getElementById('sol1').textContent = id.sol1;
		document.getElementById('sol2').textContent = id.sol2;
		document.getElementById('sol3').textContent = id.sol3;
		document.getElementById('sol4').textContent = id.sol4;
		document.getElementById('sol5').textContent = id.sol5;
		document.getElementById('sol6').textContent = id.sol6;
		document.getElementById('sol7').textContent = id.sol7;
		document.getElementById('sol8').textContent = id.sol8;

    // Appel de la zone "NOTRE PRESTATION"
        document.getElementById('titre_prestation').textContent = id.titre_prestation;
        document.getElementById('titre2_prestation').textContent = id.titre_prestation;
		document.getElementById('prest1_nom').textContent = id.prest1_nom;
		document.getElementById('prest1_desc').textContent = id.prest1_desc;
		document.getElementById('prest2_nom').textContent = id.prest2_nom;
		document.getElementById('prest2_desc').textContent = id.prest2_desc;
		document.getElementById('prest3_nom').textContent = id.prest3_nom;
		document.getElementById('prest3_desc').textContent = id.prest3_desc;
});






var imd_index = 0;
showSlides();
function showSlides() {
  var i;
  var img_desc = document.getElementsByClassName("description");
  var dots = document.getElementsByClassName("pos_indic");
  for (i = 0; i < img_desc.length; i++) {
    img_desc[i].style.display = "none";  
  }
  imd_index++;
  if (imd_index > img_desc.length) {imd_index = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  img_desc[imd_index-1].style.display = "block";  
  dots[imd_index-1].className += " active";
  setTimeout(showSlides, 5000); // Change les images toutes les 5 secondes
}