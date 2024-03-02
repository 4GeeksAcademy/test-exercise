
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 156.5 / 1.07;
    return parseInt(Math.round(valueInYen *1000))/1000;
}

const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * 0.87 / 156.5;
    return parseInt(Math.round(valueInPound*10000))/10000;
}

/*solo los hice para verificar los valores */
console.log(fromEuroToDollar(1));
console.log(fromDollarToYen(1));
console.log(fromYenToPound(1));

// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };