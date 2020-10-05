function Calculate(x, y){
   return z= x+y
}

let num1 = prompt(`Enter a number: `)
let num2 = prompt(`Enter another number: `)
let par1 = parseInt(num1,10)
let par2 = parseInt(num2,10)

let summedNumbers = `The sum of ${num1} and ${num2} is ${Calculate(par1, par2)}`

console.log(summedNumbers)
