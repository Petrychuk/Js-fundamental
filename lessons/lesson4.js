//relation or comparison operation

// > - more than
// <  -less than
// >= - more than equal
// <= - less than egual

var result = 10 > 5
console.log(result)


//equilit operation

var x = 1
console.log(x == '1') //lose comparison
console.log(x === '1') // strict comperation

/*В JavaScript существует два различных оператора сравнения: == (lose equality) и === (strict equality).

== (lose equality) выполняет нестрогое сравнение, которое позволяет JavaScript преобразовать значения, если они имеют разные типы, чтобы сделать их совместимыми для сравнения. В вашем случае x имеет числовой тип, а '1' - строковый тип. JavaScript автоматически преобразует строку '1' в число и затем сравнивает их. В результате, console.log(x == '1') вернет true, так как значения равны после преобразования типов.
=== (strict equality) выполняет строгое сравнение без преобразования типов. Он сравнивает и значения и типы данных. В вашем случае console.log(x === '1') вернет false, так как значения равны, но типы данных различаются (число и строка).
Итак, результаты будут такими:
console.log(x == '1') вернет true.
console.log(x === '1') вернет false.*/