class Animal{/**on déclare la class */
    constructor(nom){
        this.nom = nom
    }

    parler (){
        console.log(`${this.nom} fait un bruit`)
    }
}
const animal = new Animal('Animal') /**on l'appelle dans new et on l'affecte à une variblae animal */
animal.parler()

/* Héritage */

class Chat extends Animal {/**On reprend ce qu'on a mis dans Animal et on rajoute des choses à l'intérieur */
    constructor(nom, race)/* on rajoute le paramètre la race */{
        super(nom) /**appel du constructeur parent */
        this.race = race
    }

    // surcharge de la fonction "parler" de la classe parente
    parler (){
        console.log(`${this.nom} miaule`)
    }
    //Ajout d'une fonction
    afficherRace(){
        console.log(`${this.nom} est ${this.race}`)
    }
}

const ricotta = new Chat('Ricotta', 'Siamois')
ricotta.parler()
console.log(ricotta.race)

