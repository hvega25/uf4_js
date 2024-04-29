//1. Crea una funció que donat un nombre per paràmetre et retorni, mitjançant una promesa si és
// divisible entre dos o no.
// Mitjançant un console.log mostra els possibles resultats
function funcion1(numero) {
    return new Promise((resolve, reject) => {
        if (numero % 2 === 0) {
            resolve(`El ${numero} si es divisible por 2`);
        } else {
            reject(`El ${numero} no es divisible por 2`);
        }
    })
}

funcion1(44)
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error));


/*
2. Assigna-li una promesa a una variable que comprovi si un valor és major o igual a 0 i menor o
igual a 10.
Mitjançant un console.log mostra els possibles resultats*/ 

const funcion2 =  
     new Promise((resolve, reject) => {
        const numero = 17;

        if (numero >= 0 && numero < 10 ) {
            resolve(`El ${numero} si es mayor o igual a 0 ni menor o igual a 10`);
        } else {
            reject(`El ${numero} no es mayor o igual a 0 ni menor o igual a 10`);
        }
    })



funcion2
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error));



//3. Crea una funció que es digui esVocal que retorni una promesa que calculi si una lletra està dins
// d’un array donat.
// let arr = [“a”, “e”, “i”, “o”, “u”]
// Mitjançant un console.log mostra els possibles resultats

const esVocal = (letra) => {
    return new Promise((resolve, reject) => {
        const vocal = ["a", "e" , "i" , "o", "u"];

        if (vocal.includes(letra)) {
            resolve(`La ${letra} si existe en el array ${vocal}`);
        } else {
            reject(`La ${letra} no existe en el array  ${vocal}`);
        }
    })
}


esVocal("o")
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error));

//4. Crea una funció JS que rebi 2 paràmetres i que retorni una promesa que calculi la divisió del
//primer entre el 2on paràmetre.
//Fes que si la divisió és possible torni el quocient, si el 2on paràmetre és 0 que torni un missatge
//d’error
function funcion4(numero1,numero2) {
    return new Promise((resolve, reject) => {
        if (numero2  != 0) {
            resolve(`El ${numero1} entre ${numero2} es: ${numero1/numero2}`);
        } else {
            reject(`El ${numero2} es 0 y no se puede calcular`);
        }
    })
}

funcion4(44,4)
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error));
