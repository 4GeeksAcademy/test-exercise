// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 USD", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should be 146.262 JPY", function() {
    const { fromDollarToYen } = require('./app.js');

    const yen = fromDollarToYen(3.8);

    const expected = (3.8 * 146.262).toFixed(3);
    const received = fromDollarToYen(3.8).toFixed(3);

    expect(Number(received)).toBeCloseTo(Number(expected));
})

test("One yen should be 0.0056 GBP", function() {
    const { fromYenToPound } = require('./app.js');

    const gbp = fromYenToPound(8.6);
    /*utilice .toFixed para redondear los valores */
    const expected = (8.6 * 0.0056).toFixed(4);
    const received = fromYenToPound(8.6).toFixed(4);

    /*aca lo que hice fue llamar y convertir los valores en un num 
    y utilice toBeCloseTo porque los valores dan con decimales distintos por el redondeo*/
    expect(Number(received)).toBeCloseTo(Number(expected)); 
})

