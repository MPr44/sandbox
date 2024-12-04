// 1. Création d'objets :
// Créez un objet Livre avec des propriétés titre, auteur, annee.
// Ajoutez une méthode afficherInfos qui affiche les informations du livre.
const livre = {
    titre: 'Tout le bleu du ciel',
    auteur: 'Mélissa Da Costa',
    annee: '2020',
    afficherInfos: function(){
        console.log(`${this.titre} est un roman fantastique, écrit par ${this.auteur} en ${this.annee}`)
    }
}
livre.afficherInfos()


// 2. Utilisation des prototypes :
// Créez un constructeur Employe avec les propriétés nom et poste.
// Ajoutez une méthode Presenter au prototype qui présente l'employé.

function Employe (nom,poste){
    this.nom = nom
    this.poste = poste
    this.presenter = function(){
        console.log(
            `Je te présente ${this.nom}, elle travaille dans notre entreprise en tant que ${this.poste}.`
        )
    }
}
    const salarie1 = new Employe ('Marie-Pauline Ralay', 'Chef de projet informatique')
    salarie1.presenter()/*affiche la fonction*/
    console.log(salarie1)/*affiche le prototype*/



// 3. Classes et héritage :
// Définissez une classe Animal avec une méthode manger.
// Créez une classe Chat qui hérite de Animal et ajoute une méthode miauler.
class Animal{
    constructor(nom){
        this.nom = nom
    }
    manger (){
        console.log(`C'est un ${this.nom}, qui aime les croquettes !`) 
    }
}
const animal=new Animal('chien') //Puisqu'on n'est pas dans la déclaration, on crée une constante "animal", en précisant la valeur qui s'exécutera dans la fonction
animal.manger()//on l'exécute ensuite

class Chat extends Animal{
    constructor(nom){
        super(nom)
    } 

    miauler(){
        console.log(`${this.nom} miaule`)
    }
}

const brownie = new Chat('Brownie')
brownie.miauler()


// 4. Fonctions fléchées et this :
// Créez un objet Equipe avec un tableau de membres.
// Utilisez une fonction fléchée pour afficher le nom de chaque membre en conservant le contexte this.
const equipe = {
    membres: ['Leo','Poppi','Petit ours brun'], /*clé:valeur */
    afficherMembres() {
        this.membres.forEach(membre => console.log(membre));
    }
}
equipe.afficherMembres()



// 5. Destructuration :
// Donnez un objet options avec des propriétés couleur, taille, forme.
// Utilisez la destructuration pour extraire les valeurs et les utiliser dans une fonction.
const options = {
    couleur: 'bleu', 
    taille: '200x200', 
    forme: 'rond',
    commande: function(){
    console.log(`Merci d'avoir commandé un cadre ${this.couleur}, de taille ${this.taille} et de forme ${this.forme}`)
     }
};


options.commande()

const { couleur } = options;//Destructuration
console.log(couleur);

// 6. Getters et Setters :
// Créez une classe CompteBancaire avec une propriété privée solde.
// Implémentez des getters et setters pour accéder et modifier le solde, avec une validation.


// 1. Manipuler les objets du navigateur :
//  Accédez aux informations du navigateur via navigator.
//  Modifiez le contenu de la page en utilisant document.
//  Utilisez location pour extraire des paramètres d'URL.
console.log(navigator.userAgent);


// 2. Feature detection :
//  Écrivez une fonction qui vérifie si le navigateur supporte localStorage.
//  Affichez un message à l'utilisateur si ce n'est pas le cas.
if(typeof Storage !== 'undefined'){
    console.log(`localStorage est supporté`);

} else{
    console.log(`localStorage n'est pas supporté`);
}
// 3. Débogage avec la console :
//  Ajoutez différents types de messages dans la console (log, warn, error).
//  Utilisez console.group() et console.groupEnd() pour organiser les messages.
console.group();//on commence le groupe
console.log('WAHOU : Je suis une info');
console.warn('Je suis une avertissement');
console.error('Je suis une erreur');
console.groupEnd();//Ferme le groupe
console.log('Je teste le End');
// 4. Gérer les incompatibilités :
//  Identifiez une fonctionnalité moderne non supportée par les anciens navigateurs.
//  Mettez en place un polyfill ou une alternative.





// 1. Sélectionner et modifier des éléments :
//  Sélectionnez tous les paragraphes de la page et changez leur couleur de 
// texte.
//  Ajoutez une classe CSS à tous les liens externes (target="_blank").
const paragraphes = document.querySelectorAll('p');
paragraphes.forEach(paragraphe => {
    paragraphe.style.color = 'red';
}
)



const liensAvecTargetBlank = document.querySelectorAll('a[target="_blank"]')//les attributs sont écrits entre crochet 
liensAvecTargetBlank.forEach(lien =>  {
    lien.classList.add('big-link')
})

// 2. Créer et ajouter des éléments :
//  Créez une liste de tâches à partir d'un tableau JavaScript. -> créer une div avec id liste-taches avec ul

/**On déclare la liste des tâches */
const taches=['Faire la vaisselle', 'Ranger le bureau', 'Faire les courses', 'Aller chercher des cadeaux de Noël']
const conteneur = document.querySelector(' #liste-taches')//On récupère la liste au travers de la liste
const liste = conteneur.firstElementChild //On récupère l'élément UL
const fragment = document.createDocumentFragment()//je crée un fagment pour stocker les li
taches.reverse().forEach(tache=>{
    const element = document.createElement('li')//On crée l'élément li
    element.textContent=tache //on ajoute le contenu texte de la tâche
    fragment.appendChild(element)
})
liste.appendChild(fragment)




// 3. Modifier la structure du DOM :
//  Réorganisez les éléments d'une liste en inversant leur ordre.-> ajouter reverse
//  Déplacez un élément d'un conteneur à un autre. -> créer à un autre endroit en recréant une dic et en JS clonenode
const list_clonee = liste.cloneNode(true)/**on crée l'élément et sa valeur */
const conteneur_2 = document.querySelector('#liste-taches-2')
conteneur_2.appendChild(list_clonee)//liste ajoutee
liste.remove()

// 4. Optimiser les manipulations :
//  Chargez dynamiquement une grande quantité de données et affichez-les en 
// utilisant un DocumentFragment.
//  Mesurez les performances avec et sans l'utilisation du fragment.

