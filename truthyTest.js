function logTruthiness (val) {
    if (val) {
        console.log("Truthy!");
    } else {
        console.log("Falsy.");
    }
}

let listOfItems = ["a", "b"]
console.log(listOfItems[+ true])
