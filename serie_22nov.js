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

// afficher toutes les lettres sauf les sélectionnées
function bifferN(chaine,...lettres){
  let a_retirer = [];
  let tab = chaine.split("");
  for(i=0;i<tab.length;i++){
    for(j=0;j<lettres.length;j++){
      if(tab[i]==lettres[j]){
        a_retirer.push(i);
      }
    }
  }
  for(n=a_retirer.length;n>0;n--){
    tab.splice(n,1);
  }
  document.write(tab.join(""));
}
bifferN("Salut","l","a");

// glitcher du texte aléatoirement
let chaine = "L'OCR ne fonctionne pas à tous les coups
let tab_glitch = ["s*","ééà._","xxO"];
Array.from(chaine).forEach(function(lettre){
  Math.random() < 0.8 ? document.write(lettre) : document.write(tab_glitch[Math.floor(Math.random()*tab_glitch.length)])
})
