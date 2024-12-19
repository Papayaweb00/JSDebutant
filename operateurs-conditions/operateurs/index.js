//      Exercice 2 : Creez trois variables a, b et c.
let a, b, c;
a = 3;
b = 6;
c = 9;

//          a - Manipulation d’opérateurs

// Déclarons la somme des trois variables,
const somme = a + b + c;

// affichez le résultat au niveau de la console
console.log('La somme des trois variables est : ' + somme);


//          b - Faire le produit des trois variables, 
const produit = a * b * c;

// affichez le résultat par alerte.
alert('Le produit des trois variables est : ' + produit);


// c - Écrire un programme qui permet de faire 
// la table de multiplication de 1 à 9
const multdiv = document.querySelector('.mult');
multdiv.innerHTML = '';
function multiplication(n) {
    for (let i = 1; i <= 9; i++) {
        multdiv.innerHTML += `<br>${n} * ${i} = ${n*i}`;;
    }
};

multiplication(3);

// d- Faire la somme de a et b puis diviser la somme par c.
const sommediv = (a + b) / c;
// console.log(sommediv);


