// Ejercicio 1
let person =
{
	name: 'Felipe',
	age: 40,
	profession: 'Developer',
}

console.log(Object.keys(person));

//console.log('Imprimiendo mensaje');

// Ejercicio 2
// Ejemplo Contexto Global
this.nombre = 'Richard';
console.log(window.nombre);

// Ejemplo Contexto de la función
function functionContext()
{
    return this;
}

console.log(functionContext() === window);

// Ejemplo Contexto de la función – Modo estricto
function functionContextStrict() 
{
  'use strict'; // see strict mode
  return this;
}

console.log(functionContextStrict() === undefined);

// Ejemplo de Contexto de método
let animalSounds =
{
    perroSound: 'guau',
    sound()
    {
        console.log(`Los perros ladran y se escucha ${this.perroSound}`)
    }
}

console.log(animalSounds.sound());

// Ejemplo de Contexto de método arrow function
let perroSound = 
{
    perroSound: 'argh',
    sound()
    {
        console.log(`Los perros ladran y se escucha ${this.perroSound}`)
    }
}

console.log(perroSound.sound());

// Ejemplo de Contexto de evento
function selectDate()
{
    console.log('Se seleccionó una fecha');
    console.log(this);
}

console.log(selectDate());

// Ejemplo de método call
let myNumber =
{
    numb: 5
}

let multiplyNumbers = function(n1, n2, n3)
{
    return this.numb * n1 * n2 * n3
}

console.log(multiplyNumbers.call(myNumber, 2, 3, 2));

// Ejemplo con apply
let numbersParam = [4, 1, 2]
console.log(multiplyNumbers.apply(myNumber, numbersParam));

let objNumbers =
{
    n1: 20,
    n2: 2
}

// Ejemplo con bind
let myDivision = function()
{
    return this.n1 / this.n2
}

let returnDivision = myDivision.bind(objNumbers);
console.log(returnDivision());

// Ejercicio 3
class InvertirCadena
{
    constructor(cadenaInvertir)
    {
        this.cadenaInvertir = cadenaInvertir;
    }
   
//    Invertir = (cadenaInvertir) => cadenaInvertir.split("").reverse().join('');
    Invertir()
    {
        return this.cadenaInvertir.split("").reverse().join('');
    }  
}

let error = new Error('Error');
let syntaxError = new SyntaxError('Error por defecto');

let str = 'Hola mundo';
try
{
    if (str.length > 0)
    {
        let invertirCadena = new InvertirCadena(str);
        console.log(invertirCadena.Invertir());
    }
    else
    {
        throw new SyntaxError("La cadena a invertir no puede estar vacía");
    }
} 
catch (err) 
{
    console.log('Mensaje de error: ' + err.message);
}


// Ejercicio 4
class Login
{
  constructor(username, password)
    {
        this.username = username;
        this.password = password;
    }

    login()
    {   
        let msg;
        if (this.username === 'admin' && this.password === 'passwd')
        {
            return msg = 'User logged in';
        }
        else
        {
            return msg = 'User or password incorrect';
        }
    }
}



let logOk = new Login('admin', 'passwd');
console.log(logOk.login());
let logBad = new Login("pepe", "bad");
console.log(logBad.login());


// Ejercicio 5
let loginGood = document.getElementById('loginSuccess')
loginGood.addEventListener("click", clicked)

function clicked()
{
    logOk.username = 'admin'
    logOk.password = 'passwd'
    if (logOk.username === 'admin' && logOk.password === 'passwd')
    {
        alert('Login succesfully completed!');
    }
}

let loginFail = document.getElementById('loginFailure')
loginFail.addEventListener("click", clickedFail)

function clickedFail()
{
    logBad.username = 'administrador'
    logBad.password = 'Paaaasword'
    if (logBad.username !== 'admin' && logBad.password !== 'passwd')
    {
        alert('Login Failure!. Please send the correct parameters');
    }
}



// Ejercicio 6
let logSucessAsync = document.getElementById('loginSuccessAsync')
logSucessAsync.addEventListener("click", async (_username, _password) => {})

let logFailureAsync = document.getElementById('loginFailureAsync')
logFailureAsync.addEventListener("click", async (_username, _password) => {})

let loginWitUsername = async (_username, _password) => {
    return new Promise(function (resolve, rejected) {
      setTimeout(() => {
        if (_username === "admin" && _password === "passwd") {
          resolve("User logged in");
        } else {
          rejected("Error: invalid username or password");
        }
      }, 50);
    });
};

// Comentario - No me queda claro como asociar la llamada del evento al click de cada botón y que responda 
// si el login fue correcto para Id=loginSuccessAsync o incorrecto para Id=loginFailureAsync

loginWitUsername("admin", "passwd")
.then( (resolved) =>
{
    console.log(resolved);
})
.catch( (rejected) =>
{
    console.log(rejected)
})
