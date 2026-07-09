const balance = new Number(100)
console.log(balance)
console.log(balance.toString()) //to convert a number into string
console.log(balance.toString().length) //by converting it to strinig we can finds its lengths easily 

//+++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++++//\
console.log(Math.abs(-4)) //gives absolute value of a number
console.log(Math.min(2,1,4,5)) // to find the minimum same as for max and others
console.log(Math.random()) // gives any random number
console.log((Math.random()*10)+1)

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)  //isme value min se jyada and max se kam ayegi we used floor for getting a exact value not in decimal form