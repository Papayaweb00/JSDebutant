// Exercice 2 : Les fonctions

// 2 - Créez une fonction appelée "addition" qui 
// prend deux paramètres(a et b) et 
// retourne leur somme.
function addition(a, b) {
    return a + b;
}
// Testez cette fonction en lui passant deux nombres et 
const addi = addition(10, 20);

// affichez le résultat dans la console.
console.log("La somme des nombres est : " + addi);

// 3- Créez une fonction appelée "estPair" qui 
// prend un nombre en paramètre et 
// retourne true s'il est pair, sinon false. 
function estPair(nombre) {
    if (nombre % 2 === 0) {
        return true;
    }
    return false;
}

// Testez cette fonction avec différents nombres et
N1 = 10;
N2 = 101;
N3 = 25;
N4 = 100;
N5 = 1;
N6 = 3;

// affichez le résultat dans la console.
console.log(
    '\n\nN1 : ' + estPair(N1) + '\nN2 : ' + estPair(N2) +
    '\nN3 : ' + estPair(N3) + '\nN4 : ' + estPair(N4) +
    '\nN5 : ' + estPair(N5) + '\nN6 : ' + estPair(N6)
);

// 4- Créez une fonction appelée "calculerMoyenne" qui 
// prend un tableau de nombres en paramètre et 
// retourne leur moyenne. 
const calculerMoyenne = (tab) => {
    if (tab.length === 0) {
        return 0;
    };
    let somme = tab.reduce((a, b) => a + b, 0);
    return somme / tab.length;
}

// Testez cette fonction avec un tableau de nombres et 
const tabNombre = [1, 2, 5, 8, 19];

// affichez le résultat dans la console.
console.log('\n\nLa moyenne du tableau est : ' + calculerMoyenne(tabNombre));
