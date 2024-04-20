# Coleção de elementos em JS

## Array

Em JavaScript, as listas são chamadas de arrays. Um array é uma estrutura de dados que permite armazenar vários valores em uma única variável. Esses valores podem ser de qualquer tipo de dado, como números, strings, objetos, outras arrays e assim por diante. Aqui estão algumas características das listas em JavaScript:

1. **Declaração de Array**: Você pode declarar um array usando colchetes `[]` e separar os elementos por vírgulas. Por exemplo:
   ```javascript
   let minhaLista = [1, 2, 3, 4, 5];
   ```

2. **Acesso aos Elementos**: Você pode acessar os elementos de um array usando sua posição (índice) dentro do array. O primeiro elemento tem índice 0, o segundo índice 1 e assim por diante. Por exemplo:
   ```javascript
   console.log(minhaLista[0]); // Saída: 1
   ```

3. **Alteração de Elementos**: Você pode alterar os elementos de um array atribuindo um novo valor a uma posição específica. Por exemplo:
   ```javascript
   minhaLista[2] = 10;
   console.log(minhaLista); // Saída: [1, 2, 10, 4, 5]
   ```

4. **Propriedade length**: A propriedade `length` retorna o número de elementos em um array. Por exemplo:
   ```javascript
   console.log(minhaLista.length); // Saída: 5
   ```

5. **Métodos de Array**: JavaScript fornece uma série de métodos úteis para manipular arrays, como `push()`, `pop()`, `shift()`, `unshift()`, `splice()`, `slice()`, `concat()` e muitos outros. Esses métodos permitem adicionar, remover e manipular elementos em um array de maneira eficiente.

6. **Iteração**: Você pode percorrer os elementos de um array usando loops como `for` ou `for...of`, ou métodos como `forEach()`, `map()`, `filter()`, `reduce()`, entre outros.

7. **Arrays Multidimensionais**: Você pode criar arrays que contêm outros arrays, criando assim arrays multidimensionais. Por exemplo:
   ```javascript
   let matriz = [
       [1, 2, 3],
       [4, 5, 6],
       [7, 8, 9]
   ];
   ```

Arrays são uma parte fundamental da linguagem JavaScript e são amplamente utilizados para armazenar e manipular conjuntos de dados de forma eficiente.

## Métodos em listas

Claro! Vou criar exemplos simples para cada método de array em JavaScript:

1. **push()**:
```javascript
let myArray = [1, 2, 3];
myArray.push(4);
console.log(myArray); // Saída: [1, 2, 3, 4]
```

2. **pop()**:
```javascript
let myArray = [1, 2, 3];
let removedElement = myArray.pop();
console.log(removedElement); // Saída: 3
console.log(myArray); // Saída: [1, 2]
```

3. **shift()**:
```javascript
let myArray = [1, 2, 3];
let removedElement = myArray.shift();
console.log(removedElement); // Saída: 1
console.log(myArray); // Saída: [2, 3]
```

4. **unshift()**:
```javascript
let myArray = [2, 3];
myArray.unshift(1);
console.log(myArray); // Saída: [1, 2, 3]
```

5. **splice()**:
```javascript
let myArray = [1, 2, 3, 4, 5];
myArray.splice(2, 1); // Remove o elemento na posição 2
console.log(myArray); // Saída: [1, 2, 4, 5]
```

6. **slice()**:
```javascript
let myArray = [1, 2, 3, 4, 5];
let newArray = myArray.slice(2, 4); // Retorna elementos da posição 2 à posição 3
console.log(newArray); // Saída: [3, 4]
```

7. **concat()**:
```javascript
let array1 = [1, 2];
let array2 = [3, 4];
let newArray = array1.concat(array2);
console.log(newArray); // Saída: [1, 2, 3, 4]
```

8. **forEach()**:
```javascript
let myArray = [1, 2, 3];
myArray.forEach(element => {
    console.log(element * 2);
});
// Saída:
// 2
// 4
// 6
```

9. **map()**:
```javascript
let myArray = [1, 2, 3];
let doubledArray = myArray.map(element => element * 2);
console.log(doubledArray); // Saída: [2, 4, 6]
```

10. **filter()**:
```javascript
let myArray = [1, 2, 3, 4, 5];
let evenNumbers = myArray.filter(element => element % 2 === 0);
console.log(evenNumbers); // Saída: [2, 4]
```

11. **reduce()**:
```javascript
let myArray = [1, 2, 3, 4, 5];
let sum = myArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Saída: 15 (soma de todos os elementos)
```

12. **find()**:
```javascript
let myArray = [1, 2, 3, 4, 5];
let foundElement = myArray.find(element => element > 3);
console.log(foundElement); // Saída: 4 (primeiro elemento maior que 3)
```

13. **findIndex()**:
```javascript
let myArray = [1, 2, 3, 4, 5];
let foundIndex = myArray.findIndex(element => element > 3);
console.log(foundIndex); // Saída: 3 (índice do primeiro elemento maior que 3)
```

14. **indexOf()**:
```javascript
let myArray = [1, 2, 3, 4, 5];
let index = myArray.indexOf(3);
console.log(index); // Saída: 2 (índice do elemento 3)
```

15. **lastIndexOf()**:
```javascript
let myArray = [1, 2, 3, 3, 4, 5];
let lastIndex = myArray.lastIndexOf(3);
console.log(lastIndex); // Saída: 3 (último índice do elemento 3)
```

### Percorrer array

Para percorrer uma lista em JavaScript, você pode usar várias abordagens, como loops `for`, `for...of`, ou métodos como `forEach()`. Aqui estão algumas maneiras de percorrer uma lista:

1. **Loop `for`**:
   O loop `for` é uma maneira tradicional de percorrer uma lista. Você pode usar o índice para acessar cada elemento da lista.
   ```javascript
   let myList = [1, 2, 3, 4, 5];
   for (let i = 0; i < myList.length; i++) {
       console.log(myList[i]);
   }
   ```

2. **Loop `for...of`**:
   O loop `for...of` é uma forma mais moderna e concisa de percorrer uma lista. Ele permite acessar diretamente o valor de cada elemento, em vez de usar um índice.
   ```javascript
   let myList = [1, 2, 3, 4, 5];
   for (let item of myList) {
       console.log(item);
   }
   ```

3. **Método `forEach()`**:
   O método `forEach()` é uma maneira conveniente de percorrer uma lista. Ele executa uma função de callback para cada elemento da lista.
   ```javascript
   let myList = [1, 2, 3, 4, 5];
   myList.forEach(function(item) {
       console.log(item);
   });
   ```

Cada uma dessas abordagens tem suas próprias vantagens e pode ser usada dependendo das suas necessidades e preferências. O loop `for` é mais versátil e pode ser usado em situações onde você precisa acessar o índice dos elementos. O loop `for...of` e o método `forEach()` são mais concisos e geralmente são preferidos para iterações simples sobre os elementos da lista.
