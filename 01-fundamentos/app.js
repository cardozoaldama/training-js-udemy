console.log('Hola Mundo');
console.log( console.log('Hola Mundo') );

// Var y Let sirven para crear variables.
let a = 10,
    b = 11,
    c = 'Hello there!';
//

// Malas prácticas
e = 0;

const d = 34;
// d = 324;

// Más variales

let x = 25;
x = x + a;
console.log( x );
console.info(x);
console.error(x);
console.warn(x);

// Add some styles here.
console.log('%c Our variables', 'color:red; font-family: Arial, sans-serif');
// The {} shows us the object.
console.log({a});
console.log({b});
console.log({c});

// Using console.table.
console.table({a, b, c, d, e});

// Using constants in JS.
string1 = 'Hi ';
string2 = 'there pal!';
const salute = string1 + string2;
console.log(salute);