//Concatination and Interpretation
var price = 80
var itemName = "Table"
var messageToPrint = "The price for your " + itemName + " is " + price + " dollars" //format concationation
var messageToPrint2 = `The price for you ${itemName} is ${price} dollars` //format interpolation
console.log(messageToPrint)
console.log(messageToPrint2)