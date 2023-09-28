//object and array
var customer = {
    firstName: 'John',
    lastName: 'Smith',
    cars: ["Volvo", "Toyota", "Tesla"]
}
customer.firstName = "Mike"
console.log(customer.firstName);
console.log(customer['lastName'])
console.log(`${customer.firstName} ${customer.lastName}`)
//array
var car = ["Volvo", "Toyota", "Tesla"]
car[1] = "BMW"
console.log(car[0])
console.log(car[1])
console.log(customer.cars[0])
