var objStudent ={
    nome: "Roberto",
    cognome: "Barbagallo",
    eta: 34
}

var objStudent2 ={
    nome: "Mario",
    cognome: "Rossi",
    eta: 25
}

var objStudent3 ={
    nome: "Claudio",
    cognome: "Bianchi",
    eta: 66
}

var classe =[]


function singleObjPrint (obj){
    for (var key in obj){
        console.log("chiave: " + key +" - " + " valore: " + obj[key])
    }

    return
}

singleObjPrint(objStudent)

function inArrayPush(ele1, ele2, ele3, arrayToPush){

    arrayToPush.push(ele1, ele2, ele3)

    return arrayToPush

}

classe = inArrayPush(objStudent, objStudent2, objStudent3, classe)


function arrayWithObjectsPrint(myArray){

    for (var index = 0; index < myArray.length; index++) {
         var element = myArray[index];

         if (element.constructor.name === "Object"){
            console.log("Il nome: " + element.nome + " - " + " Il cognome: " + element.cognome)
         }else{
             console.log("C'è un altro tipo di valore diverso da Oggetto nell'array")
         }
        
    }

    return
}

arrayWithObjectsPrint(classe)

 var propietaDaInserire = ["Inserisci il nome", "Inserisci il cognome", "Inserisci l'età"]



function newObjectInArrayPrompt (arrayToPush, objModel, quantityOfObjects, questionsForPrompt){
    var question
    var objKeys =[]
    var recivedFromPrompt=[]
    var newObject={}


    for (var key in objModel){
        objKeys.push(key)
    
    }


    for (var i = 0; i < quantityOfObjects; i++) {

        arrayToPush.push(newObject)
        
        for (var j = 0; j < objKeys.length; j++) {
            question = questionsForPrompt[j]

            var recivedValue = prompt(question)

            recivedFromPrompt.push(recivedValue)

            newObject[objKeys[j]] = recivedValue
            
        }
    }

   
    
    return
}

newObjectInArrayPrompt(classe, objStudent, 1, propietaDaInserire)

console.log(classe)