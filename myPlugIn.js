//creo tre oggetti "studente"
var objStudent = {
    nome: "Roberto",
    cognome: "Barbagallo",
    eta: 34
}

var objStudent2 = {
    nome: "Mario",
    cognome: "Rossi",
    eta: 25
}

var objStudent3 = {
    nome: "Claudio",
    cognome: "Bianchi",
    eta: 66
}


// faccio il console log di tutte le chiavi e relativi valori
function singleObjPrint(obj) {
    for (var key in obj) {
        console.log("chiave: " + key + " - " + " valore: " + obj[key])
    }
    return
}
singleObjPrint(objStudent)



//creo un Array di oggetti "studente" iniziale
var classe = []

function inArrayPush(ele1, ele2, ele3, arrayToPush) {

    arrayToPush.push(ele1, ele2, ele3)

    return arrayToPush

}

classe = inArrayPush(objStudent, objStudent2, objStudent3, classe)



//stampo in console il contenuto dell'array
function arrayWithObjectsPrint(myArray) {

    for (var index = 0; index < myArray.length; index++) {
        var element = myArray[index];

        if (element.constructor.name === "Object") {
            console.log("Il nome: " + element.nome + " - " + " Il cognome: " + element.cognome)
        } else {
            console.log("C'è un altro tipo di valore diverso da Oggetto nell'array")
        }

    }

    return
}

arrayWithObjectsPrint(classe)


//eseguo una volta un prompt che memorizza i valori inseriti in un nuovo oggetto "studente" e lo inserisce nell'Array "classe"
var propietaDaInserire = ["Inserisci il nome", "Inserisci il cognome", "Inserisci l'età"]

function newObjectInArrayPrompt(arrayToPush, objModel, questionsForPrompt) {
    var question
    var objKeys = []
    var newObject = {}

    for (var key in objModel) {
        objKeys.push(key)
    }

    arrayToPush.push(newObject)

    for (var j = 0; j < objKeys.length; j++) {
        question = questionsForPrompt[j]

        var recivedValue = prompt(question)

        var valueInNumber = parseInt(recivedValue)

        if (Number.isNaN(valueInNumber)){
            newObject[objKeys[j]] = recivedValue

        }else{
            newObject[objKeys[j]] = valueInNumber
        }
       
    }
    return
}

newObjectInArrayPrompt(classe, objStudent, propietaDaInserire)

console.log(classe)

arrayWithObjectsPrint(classe)