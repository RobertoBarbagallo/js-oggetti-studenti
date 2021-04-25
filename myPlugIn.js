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

}
singleObjPrint(objStudent)



//Creo un Array di oggetti "studente" iniziale - NO FUNZIONE -

var classe =[objStudent, objStudent2, objStudent3]



//Stampo in console il contenuto dell'array
function arrayWithObjectsPrint(myArray) {

    for (var index = 0; index < myArray.length; index++) {
        var element = myArray[index];

        if (element.constructor.name === "Object") {
            console.log("Il nome: " + element.nome + " - " + " Il cognome: " + element.cognome)
        } else {
            console.log("C'è un altro tipo di valore diverso da oggetto nell'array")
        }
    }
}

arrayWithObjectsPrint(classe)


//Eseguo n volte prompt che memorizza i valori inseriti in un nuovo oggetto  e lo inserisce nell'Array "classe"

function newObjectInArrayPrompt(arrayToPush, timesToRepeat) {

        var objKeys = []

    //Ricavo le chiavi del primo oggetto e le salvo in un  Array
        var oggetto = arrayToPush[0]
        for (var key in oggetto) {
            objKeys.push(key)
        }    

    //Eseguo il ciclo n numero di volte e salvo i dati nell'Array di partenza
        for (var z = 0; z < timesToRepeat; z++) {
            var newObject = {}
    
            for (var j = 0; j < objKeys.length; j++) {
                var receivedValue = prompt("INSERISCI " + objKeys[j])

                var valueInNumber = parseInt(receivedValue)

                if(Number.isNaN(valueInNumber)){
                    newObject[objKeys[j]] = receivedValue
                }else{
                    newObject[objKeys[j]] = valueInNumber
                }            
            }  
            arrayToPush.push(newObject)
        }
 
    return arrayToPush
}


newObjectInArrayPrompt(classe, 5)
console.log(classe)


