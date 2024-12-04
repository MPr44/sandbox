console.log('Hello, world!');

// // Boucles
// const jeux = ['belote', 'tarot', 'bridge', 'poker']
// for(const jeu of jeux){
//     console.log(jeu)
// }

// const personne = {
//     name: 'Bob', 
//     age:25, 
//     email:'bob@bob.fr'
// }
// for (const clef in personne){
//     console.log(`Clef : ${clef}, Valeur : ${personne[clef]}`)
// }

/*****fonctions*****/

//function saluer (nom){
    // return `Salut ${nom} !`
// }
// const resultat = saluer('Bob')//affecte le résultat
// console.log(resultat)//on l'écrit
// //on peut aussi écrire -> console.log(saluer('Bob'))
// console.log(saluer('Marie-Pauline'))//

// function saluer (nom, prenom){
//     return `Salut ${prenom} ${nom} !`
// }
// console.log(saluer('Ralay','Marie-Pauline'))

/****Tableaux*****/

// const nombres =[1,2,3,4,5,6,7,8,9,10]

// nombres.push(11)
// nombres.shift()
// nombres.unshift(57)
// nombres.pop()
// const nombresDecoupes = nombres.slice(2,5)
// console.log(nombresDecoupes)


// // Itération sur des nombres
// nombres.forEach(nombre => console.log(nombre))

// const doubles /*où on stock le retour*/ = nombres.map(nombre /*on nomme l'item*/ => /*ce que l'on retourne, ce que l'on veur*/nombre *5)
// console.log(doubles)/*on l'affiche*/ 
// /*MDN array proptotype*/

// const nombrePairs = nombres.filter(nombre => nombre % 2 === 0)
// console.log(nombrePairs)

/****Objets globaux*****/
/**
 * Manipulation de Strings
//  
// const chaineDeCaractere = 'Le Javascript est amusant'
// console.log(chaineDeCaractere.toUpperCase())

// console.log(chaineDeCaractere.indexOf('amusant'))
/*Si le mot ,'existe pas, la console me retourne "-1"*/

/**
 * Manipulation de dates
 */
// const Maintenant = new Date()
// console.log(Maintenant.toLocaleDateString())


/**
 * Manipulation d'objets
 */

/*Objet littéral*/

// const animal = {/*se déclare toujours avec un eaccolade alors que le constructeur se déclaure avec une fonction */
//     nom:'Ricotta',
//     race:'chat',
//     genre:'femelle',
//     saluer: function(){
//         console.log(`Miaou je m'appelle ${this.nom} et je suis ${this.race} ${this.genre}`)
//     }

// }
// animal.saluer()

// /**Objet avec constructeur */
// function Animal (nom,race,genre){/**quand objet constructeur, il y a une convention qui demande à mettre une majuscule à l'objet */
//     this.nom = nom /*pas de virgule car on est dans un objet, on contextualise notre objet */
//     this.race = race
//     this.genre = genre
//     this.salutation = race === 'Chien' ? 'Ouaf' : 'Miaou'//Si la race est un chien, alors Ouaf, sinon Miaou
//     this.saluer = function(){
//         console.log(
//             `${this.salutation} je m'appelle ${this.nom} et je suis ${this.genre === 'Femelle' ? 'une' : 'un'} ${this.race} ${this.genre}`)
//     }
// }
// const ricotta = new Animal ('Ricotta', 'Chat', 'Femelle')
// ricotta.saluer()/**les parenthèses indiquent qu'on fait appel à une fonction, même si les paramètres sont vides */
// console.log(ricotta)

// Animal.prototype.crier = function (){
//     console.log(this.salutation)
// }
// /**On ajoute la fonction crier, comme si on avait ajouté  en dessous de this. saluer dans la function Animal
//     this.crier = function(){
//     console.log(this.salutation)
//     }
// }
//     } */

// const rex = new Animal('Rex', 'Chien', 'Male')
// rex.saluer()

