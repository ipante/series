// inverser les lettres d'un mot
"Salut".split('').reverse().join('');

// afficher un espace entre chaque lettre
Array.from("Salut").forEach(d=>document.write(d+" "))

// afficher chaque lettre à l'envers, avec un espace
Array.from("Salut").reverse().forEach(d=>document.write(d+" "))

// doubler toutes les lettres
Array.from("Salut").forEach(d=>document.write(d+d))

// récupérer les paragraphes d'une page et concaténer leur contenu
let paragraphes = Array.from(document.getElementsByTagName("p"));
document.write(paragraphes.reduce((a,b)=>a+" "+b.innerHTML,""));

// compter le nombre de nombres pairs d'un tableau
[4,5,6,7].filter(function(n){if(n%2==0){return n}}).length; //ES5
[4,5,6,7].filter((n)=>{if(n%2==0){return n}}).length; //ES6

// trouver le nombre le plus grand dans un tableau
// ES5
function plusGrand(tab) {
  var max = tab[0];
  for(var i = 1; i < tab.length; i++) {
    if(max < tab[i]) {
       max = tab[i];
    }
  }
  return max;
}
// ES5 avec Apply
Math.max.apply(Math,[4,5,6])
// ES6
Math.max(...[4,5,6]));

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
let chaine = "L'OCR ne fonctionne pas à tous les coups!";
let tab_glitch = ["s*","ééà._","xxO"];
Array.from(chaine).forEach(function(lettre){
  Math.random() < 0.8 ? document.write(lettre) : document.write(tab_glitch[Math.floor(Math.random()*tab_glitch.length)])
})

// vérifier si une chaîne se termine par une autre
let str1 = "Salut";
let str2 = "lut";
// tentative 1
return [...str1].splice(str1.length-str2.length,str2.length).join("") == str2 ? true : false;
// tentative 2
return [...str1].splice(str1.length-str2.length,str2.length).join("");
// tentative 3
return str2 === str1.substr(str1.length - str2.length, str2.length);
// tentative 4 (avec documentation)
return str1.endsWith(str2);

// Mettre l'initiale de chaque mot en majuscule
function creerTitre(chaine){
  return chaine.split(' ').map( w => w[0].toUpperCase() + w.slice(1)).join(' ');
}  
