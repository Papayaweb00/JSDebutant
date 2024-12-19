// Exercice 2 : Les tableaux

// a - Déclarez un tableau de 10 étudiants 
// dont un étudiant a ces informations : Prénom - Nom - Âge - Note

const etudiants = [
    ["Prénom", "Nom", "Âge", "Note"], // Header row
    ["Francois", "Mendes", 20, 50],
    ["", "", null, null],
    ["", "", null, null],
    ["", "", null, null],
    ["", "", null, null],
    ["", "", null, null],
    ["", "", null, null],
    ["", "", null, null],
    ["", "", null, null],
    ["", "", null, null],
];

// b - Afficher le tableau dans la console et 
console.log(etudiants);

// sur la page HTML (pour la page HTML le tableau 
// s’affiche avec des bordures ayant les informations des 
// 10 étudiants
let divTable = document.querySelector('.table');
const AfficheTable = (etudiants) => {
    let table = '<table>';
    etudiants.forEach((ligne, index) => {
        table += '<tr>';
        ligne.forEach((cellule) => {
            if (index === 0) {
                table += `<th>${cellule}</th>`;
            } else {
                table += `<td>${cellule !== null && cellule !== "" ? cellule : '-'}</td>`;
            }
        })
        table += '</tr>';
    });
    table += '</table>';
    return table;
}

divTable.innerHTML = AfficheTable(etudiants);

// En utilisant switch-case comparez les variables et 
// affichez sur chaque ligne l’entier, la chaîne de caractère 
// et le décimal par alerte.
function compareValeur(val) {
    switch (typeof val) {
        case 'number':
            if ((Number.isInteger(val))) {
                alert(`Entier : ${val}`);
            } else {
                alert(`Decimal : ${val}`);
            }
            break;
        case 'string':
            alert(`Chaine de caractere : ${val}`);
            break
        default:
            alert('Type inconnue');
    }
}

compareValeur('Porte');
compareValeur(100);
compareValeur(3.14);