// afficher chaque lettre avec un espace
Array.from("Salut").forEach(d=>document.write(d+" "))

// afficher chaque lettre à l'envers, avec un espace
Array.from("Salut").reverse().forEach(d=>document.write(d+" "))

// doubler toutes les lettres
Array.from("Salut").forEach(d=>document.write(d+d))

// récupérer les paragraphes d'une page et concaténer leur contenu
let paragraphes = Array.from(document.getElementsByTagName("p"));
document.write(paragraphes.reduce((a,b)=>a+" "+b.innerHTML,""));

// afficher toutes les lettres sauf la sélectionnée
function biffer(chaine,lettre){
  Array.from(chaine).forEach(function(l){if(l!=lettre){document.write(l)}});
}
biffer("Salut","l");