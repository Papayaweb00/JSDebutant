// function fonctionRec(nbr) {
//     if (nbr < 0) {
//         return nbr + fonctionRec(nbr - 1);
//     }
//     return 0;
// }

// console.log(fonctionRec(10));


// function calculerSommeDe1aNOptimal(N) {
//     // return N * (N + 1) / 2;
//     if (N < 0) {
//         return 'error';
//     } if (N === 0) {
//         return 0
//     }
//     N + 1;
//     return N + calculerSommeDe1aNOptimal(N - 1);
// }

//         Exercice 3 : Documentation
// 5- Quels sont les types de données qui existent en javascript ?
    // Les types de données qui existent en javascript sont :
        // •	String
        // •	Number
        // •	Boolean
        // •	Null
        // •	Undefined
        // •	Symbol
        // •	Object

//         Exercice 4 : Les types de variables

// 6- Déclarer une variable de type int et la convertir en string puis l’afficher par alerte.

let n = 10;
let conv = n.toString();
console.log(typeof conv);

alert(conv);

// 7- Déclarer une variable de type date afficher la date en prenant en compte la date d’aujourd’hui (jj-mm-yyyy)

const date = new Date();
let datepr = date.toLocaleDateString();
// console.log(datepr);

document.querySelector("#date").innerHTML = datepr;