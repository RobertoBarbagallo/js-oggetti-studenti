//Creo tre oggetti "studente"
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


//Faccio il console log di tutte le chiavi e relativi valori
function singleObjPrint(obj) {
    for (var key in obj) {
        console.log("chiave: " + key + " - " + " valore: " + obj[key])
    }
    return
}
singleObjPrint(objStudent)



//Creo un Array di oggetti "studente" iniziale - NO FUNZIONE -
var classe = []

function inArrayPush(ele1, ele2, ele3, arrayToPush) {

    arrayToPush.push(ele1, ele2, ele3)

    return arrayToPush

}

classe = inArrayPush(objStudent, objStudent2, objStudent3, classe)



//Stampo in console il contenuto dell'array
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


//Eseguo n volte prompt che memorizza i valori inseriti in un nuovo oggetto  e lo inserisce nell'Array "classe"

function newObjectInArrayPrompt(arrayToPush, timesToRepeat) {

        var objKeys = []

    //Mi recuperò la posizione dell'ultimo elemento già presente nella lista e ci sommo il valore 1 per quando "z" sarà uguale a 0
        var lastItemIndexPlusOne = arrayToPush.length

    //Ricavo le chiavi del primo oggetto e le salvo in un  Array
        var oggetto = arrayToPush[0]
        for (var key in oggetto) {
            objKeys.push(key)
        }    

    //Eseguo il ciclo n numero di volte e salvo i dati nell'Array di partenza
        for (var z = 0; z < timesToRepeat; z++) {
            var newObject = {}
            arrayToPush.push(newObject)
            for (var j = 0; j < objKeys.length; j++) {
                var receivedValue = prompt("INSERISCI " + objKeys[j])

                var valueInNumber = parseInt(receivedValue)

                if(Number.isNaN(valueInNumber)){
                    arrayToPush[z + lastItemIndexPlusOne][objKeys[j]] = receivedValue
                }else{
                    arrayToPush[z + lastItemIndexPlusOne][objKeys[j]] = valueInNumber
                }            
            }  
        }
 
    return arrayToPush
}


newObjectInArrayPrompt(classe, 2)
console.log(classe)


