let quoteString = "Failure is simply the opportunity to begin again this time more intelligently."
let upperCaseString = `Upper case string is: ${quoteString.toUpperCase()}`
let authorString = "- Henry Ford"
let completeString = quoteString + " " + authorString
let found = ""

if (completeString.includes("Henry")){
    found = "Henry was in the quote string."
}
else
  found = "Henry was NOT in the quote string."

console.log(upperCaseString)
console.log(completeString)
console.log(found)

let secondQuote = "Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King"
let lowerCaseString = `Lower case string is: ${secondQuote.toLowerCase()}`

console.log(lowerCaseString)

function Calculate(x, y){
   return z= x+y
}

let num = prompt(`Enter a number: `)
let par = parseInt(num,10)
let numAns = `The number ${num} + 10  is ${Calculate(par, 10)}`

console.log(numAns)
