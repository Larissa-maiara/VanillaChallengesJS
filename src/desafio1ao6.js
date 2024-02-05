const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Desafio 1

function printElements (array) {
   
  for(let i = 0 ; i < array.length; i +=1){       
      if (i<array.length){
      console.log(array[i]);}

  }        
}

printElements(array);
// Escreva um código que imprima um por um de todos os elementos de um array.


// Desafio 2

function biggerNumber (array) {

  let maior = array[0];

  for (let i = 1; i < array.length; i+=1) {
      if (array[i] > maior) {
          maior = array[i];
      }
  }
      return maior;
}

console.log(biggerNumber(array));
// Escreva um código que encontre o maior elemento de um array.


// Desafio 3

function ignoreFirstAndLastElement(array) {
  array.shift();
  array.pop();
  return array;
}

// Escreva um código que imprima todos os elementos de um array, exceto o primeiro e o último.
// Caso o array tenha um tamanho menor que 3 imprima a mensagem: 'Tamanho do array inválido'


// Desafio 4

function invertElementsArray(array) {
  array.reverse();
  return array;
}

console.log(invertElementsArray(array));
// Escreva um código que inverta a ordem dos elementos de um array.


// Desafio 5
//  Escreva um código que recebe uma string por parâmetro e imprima a sua versão invertida.
function invertString(string) {

  let palavra = '';
  for (let i = string.length - 1; i >= 0; i--) {
      palavra += string[i];
  }
  return palavra;
}
console.log(invertString);


// Desafio 6
// Escreva um código que receba um array de números por parâmetro e retorne
// o array com os elementos duplicados removidos.
function noDuplicates(array) {
  return array.filter((valor, i, self) => {
      return self.indexOf(valor) === i;

  });

}

console.log(noDuplicates);

module.exports = {
  biggerNumber,
  printElements,
  ignoreFirstAndLastElement,
  invertElementsArray,
  invertString,
  noDuplicates
}
