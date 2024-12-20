// Exercice 2 : Les boucles

// 2- Utiliser une boucle for pour 
// afficher les nombres de 1 à 10 dans la console.
for (let i = 1; i <= 10; i++) {
    console.log('Boucle for : ' + i);
}

// 3- Utiliser une boucle while pour 
// afficher les nombres de 1 à 10 dans la console.
let j = 1;
while (j <= 10) {
    console.log('Boucle while : ' + j);
    j++;
}

// Créer un tableau de 
// noms de fruits (au moins 5 noms). 
// Utilisez une boucle for pour 
// afficher chaque nom de fruit dans la console.
const fruit = [
    'Pommes', 
    'Bananes', 
    'Mangues', 
    'Poires', 
    'Goyaves'
];

for (let k = 0; k < fruit.length; k++) {
    console.log(`Le fruit numero ${k+1} est : ` + fruit[k]);
}
