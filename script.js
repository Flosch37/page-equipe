function casser(){
   let prenomSupprimer = prompt("Qui voulez vous supprimer ?").toLowerCase(); 
   const elementADetruire = document.getElementById(prenomSupprimer);
   elementADetruire.parentNode.removeChild(elementADetruire);
}

function modify(){
    let modifText = prompt("Qui voulez vous modifier?").toLowerCase(); 
    let elementAModif = document.getElementById(modifText);
    let nouveauText = prompt("ecrivez ici le nouveau texte de " + modifText);
    let paragrapheAModifier = elementAModif.childNodes[7];
    paragrapheAModifier.innerText = nouveauText;

}

function addtask(){
    let prenom = prompt("Quel est votre prénom ?").toLowerCase();
    let quelPoste = prompt("Quel est votre poste ?").toLowerCase();
    let texteDescription = prompt("Quel est votre texte ?").toLowerCase();

    let cardContenaire = document.querySelector(".lesImages");


    let image = document.createElement("img");
    image.src = "mon_image.png";

    let h2 = document.createElement("h2");
    h2.innerText = prenom;
    
    let h3 = document.createElement("h3");
    h3.innerText = quelPoste;
    h3.classList.add("h3")

    let p = document.createElement("p");
    p.innerText = texteDescription;
    p.classList.add("lesPostes");
    
    let imageCard = document.createElement("div");
    imageCard.classList.add("image-card");
    imageCard.id = prenom;

    imageCard.appendChild(image);
    imageCard.appendChild(h2);
    imageCard.appendChild(h3);
    imageCard.appendChild(p);
    cardContenaire.appendChild(imageCard);



}