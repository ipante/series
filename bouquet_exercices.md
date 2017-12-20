==== La série du 22 novembre ==== 

But de la série: savoir utiliser différentes méthodes pour modifier un tableau. 

1. // inverser les lettres d'un mot (utiliser .split())

2. // afficher un espace entre chaque lettre

3. // afficher chaque lettre à l'envers, avec un espace (plus simple avec ".reverse()" et "...") 

4. // inverser nom et prénom

5. // doubler toutes les lettres

6. // ranger un texte par ordre alphabétique

7. // ranger une série de nombre par ordre croissant. 

8. // ranger une série de nombre par ordre décroissant. 

9. // répéter 3 fois une chaîne

10. // répéter n fois une chaine

11. // récupérer les paragraphes d'une page et concaténer leur contenu

12. // compter le nombre de nombres pairs d'un tableau

13. // trouver le nombre le plus grand dans un tableau

14. // afficher toutes les lettres sauf la sélectionnée

15. // afficher toutes les lettres sauf les sélectionnées

16. // glitcher du texte aléatoirement

17. // vérifier si un mot est un isogramme (chaque lettre est différente)

18. // vérifier si une chaîne se termine par une autre
    let str1 = "Salut";
    let str2 = "lut";

19. // Mettre l'initiale de chaque mot en majuscule

20. // récupérer toutes les url des images d'une page et les mettre dans un tableau

21. // enlever les signes d'une chaîne téléphonique (exemple : passer de "(078) 622-17-17" à "0786221717")

[Solutions de la série](https://codepen.io/GregoryThonney/pen/GyZNVO)


==== Affichage de tableau+++, DOM++, conditions et boucles++ ====

Générer une Heat Map à partir de ce tableau : const tab = \[
  2,2,2,2,2,2,5,2,2,3,2,2,2,2,2,2,2,2,2,
  4,1,2,2,2,2,1,2,2,2,1,2,1,1,2,1,1,2,2,  
  2,4,2,2,2,4,1,2,2,2,1,4,1,2,2,2,2,2,4,
  2,1,2,3,2,2,1,4,2,3,4,1,2,3,2,2,2,2,3,
  2,3,4,2,2,2,5,2,2,2,1,2,1,1,2,4,1,2,2,
  3,1,2,2,4,2,1,2,2,2,1,2,1,2,2,2,2,2,2,
  1,1,2,2,2,5,3,1,2,3,5,1,2,1,2,4,4,2,5,
  2,3,3,4,2,2,1,1,5,2,3,1,4,3,2,1,1,2,2,
  2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
\]; 

Lorsque l'utilsateur passe la souris sur une cellule, le nombre augmente de 1 et la couleur change et devient plus foncée. 

[Solution](https://codepen.io/GregoryThonney/pen/EoajLv)



==== Affichage de tableau+++, DOM+++, conditions et boucles++ ==== 

1. Sans utiliser de HTML (donc en le générant via javascript), afficher le tableau "tab" sous [cette forme](https://img15.hostingpics.net/pics/120994lue.png). 
2. Lorsque l'utilisateur passe la souris sur une case rouge, elle devient violette (et rien ne se passe sur une case verte).
3. Si toutes les cases rouges deviennent violettes, le tableau disparaît. 

tab = \[
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
  0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,2,  
  0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,2,
  0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,2,
  0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,2,
  0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,2,
  0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,2,
  0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,2,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2
\];

[Solution](https://codepen.io/isaacpante/pen/rYpWRw)


==== Affichage de tableau+++, DOM+++, conditions et boucles+ ==== 

Créer une page permettant de choisir son siège dans une salle de cinéma :
1. Les places sont numérotées selon la rangée (A, B, C...) et selon la colonne (1, 2, 3, etc.). 
2. Lorsque l'utilisateur clique sur un siège, sa couleur change pour indiquer qu'il est occupé.
3. Indiquer par un compteur le nombre de places restantes. 

[Solution](https://codepen.io/isaacpante/pen/POvPaX)


==== Affichage de tableau+++, boucles et conditions+++ ====

1. En utilisant des boucles, générez un tableau de cinq lignes et de cinq colonnes. Chaque ligne est numérotée de 1 à 5.
2. Définissez une couleur pour vos cellules. 
3. modifiez votre code pour que :
    1. [une colonne sur deux ait une couleur différente.](https://codepen.io/isaacpante/pen/woJzOQ)
    2. [une ligne sur deux ait une couleur différente.](https://codepen.io/isaacpante/pen/NbpbXW)
    2. [une des diagonales de votre tableau ait une couleur différente.](https://codepen.io/isaacpante/pen/qqraxa)
    2. [les deux diagonales se démarquent par un changement de couleur.](https://codepen.io/isaacpante/pen/KNWmoV)
    2. [les bords du tableau aient une autre couleur que le reste.](https://codepen.io/isaacpante/pen/dOvWMJ)
    2. [votre tableau ressemble à un échiquier.](https://codepen.io/isaacpante/pen/eBvdwp)
    2. [l'utilisateur puisse choisir le nombre de lignes et de colonnes](https://codepen.io/GregoryThonney/pen/zEQgxg).


==== DOM+++ ==== 

1. Générer une calculette: 
    1. Créer 10 boutons de 0 à 9. 
    2. Créer les boutons "+", "-" et "=". 
    3. Rendre le tout fonctionnel. ;) 
    
[Solution](https://codepen.io/GregoryThonney/pen/LzrPaa)


==== DOM++, Affichage de tableau++, boucles et conditions+++ ====

Créer un tic-tac-toe en ajoutant les conditions de victoire. 

[Solution](https://codepen.io/isaacpante/pen/XVbbKm)

