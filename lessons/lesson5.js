//Logical "AND"

console.log(true && true) // all valurs have to be True for expression to be True

//Logical "OR"
console.log(true || false) //any value should be True for the expression to be True

var ageIsMoreThanEighteen  = true
var isUSCitizen = true
var elegibilityForDriversLicense = ageIsMoreThanEighteen && isUSCitizen

console.log('This customer is eligible for DL:' + elegibilityForDriversLicense)

//Logical operator "NOT"
console.log(!true)
console.log(6 !== 10)
