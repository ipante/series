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


====Création de tableau 1 ====

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



==== Création de tableau 2 ==== 

1.Sans utiliser de HTML (donc en le générant via javascript), afficher le tableau "tab" sous [cette forme](https://img15.hostingpics.net/pics/120994lue.png). 
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
