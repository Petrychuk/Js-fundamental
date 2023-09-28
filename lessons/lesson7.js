//loops

console.log('Hello world')
console.log("Hello world");
console.log("Hello world");
console.log("Hello world");
console.log("Hello world");

// for(statement1; statement2; statement3) {
    
// }
for(let i=0; i<5; i=i+1) {
   console.log('Hello World!' + i)
}

var cars = ["Volvo", "Toyota", "Tesla"]

for(let car of cars) {
    console.log(car)
    if(car == "Toyota") {
        break
    }
}
//ES6 syntax for each loop
cars.forEach( car => {
    console.log(car)
})