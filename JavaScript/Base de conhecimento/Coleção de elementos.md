# Coleção de elementos em JS

Em JavaScript, as coleções de elementos são frequentemente usadas para armazenar dados de maneira estruturada e acessível. Existem várias maneiras de criar coleções de elementos em JavaScript, cada uma com suas próprias características e usos.

1. **Arrays**: Os arrays são a forma mais comum de coleções em JavaScript. Eles podem conter uma sequência ordenada de elementos e são acessados por meio de índices numéricos.

   Exemplo:
   ```javascript
   let myArray = [1, 2, 3, 4, 5];
   ```

2. **Objects**: Os objetos também podem ser usados para colecionar elementos em JavaScript. Eles armazenam pares chave-valor, onde cada valor é acessado através de sua chave correspondente.

   Exemplo:
   ```javascript
   let myObject = {
       nome: "João",
       idade: 25,
       cidade: "São Paulo"
   };
   ```

3. **Mapas (Maps)**: Os mapas são uma estrutura de dados introduzida no ECMAScript 6 que permite armazenar pares chave-valor onde as chaves podem ser de qualquer tipo de dados, não apenas strings como em objetos.

   Exemplo:
   ```javascript
   let myMap = new Map();
   myMap.set("chave1", "valor1");
   myMap.set("chave2", "valor2");
   ```

4. **Conjuntos (Sets)**: Os conjuntos são coleções de valores únicos, o que significa que cada valor pode aparecer apenas uma vez na coleção.

   Exemplo:
   ```javascript
   let mySet = new Set();
   mySet.add(1);
   mySet.add(2);
   mySet.add(3);
   ```

5. **Arrays Tipados (Typed Arrays)**: Introduzidos no ECMAScript 6, os arrays tipados são usados quando se trabalha com arrays de números específicos. Eles têm a vantagem de serem mais eficientes em termos de memória e desempenho.

   Exemplo:
   ```javascript
   let myTypedArray = new Int32Array([1, 2, 3, 4, 5]);
   ```

Cada tipo de coleção tem suas próprias características e é adequado para diferentes cenários de uso. Escolher o tipo certo de coleção depende dos requisitos específicos do seu programa, como eficiência, facilidade de uso e tipo de dados que você está manipulando.


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

## Métodos em Arrays

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

## Operadores de condição em Arrays

Em JavaScript, os operadores de condição em arrays são utilizados para filtrar, verificar e manipular elementos dentro de arrays com base em certas condições. Os operadores mais comuns para realizar essas operações são `filter()`, `map()`, `reduce()`, `some()` e `every()`.

1. **filter()**: Este método cria um novo array com todos os elementos que passam por um teste implementado pela função fornecida.

```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
```

2. **map()**: Este método cria um novo array com os resultados da chamada de uma função para cada elemento do array original.

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
```

3. **reduce()**: Este método executa uma função redutora em cada elemento do array, resultando em um único valor de retorno.

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15
```

4. **some()**: Este método verifica se pelo menos um elemento do array passa no teste implementado pela função fornecida.

```javascript
const numbers = [1, 2, 3, 4, 5];
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // Output: true
```

5. **every()**: Este método verifica se todos os elementos do array passam no teste implementado pela função fornecida.

```javascript
const numbers = [1, 2, 3, 4, 5];
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // Output: false
```

Esses operadores de condição em arrays são muito úteis para lidar com coleções de dados em JavaScript de forma eficiente e concisa.

## Objects

Em JavaScript, objetos são uma das estruturas de dados mais fundamentais e versáteis. Eles são usados para representar conjuntos de pares chave-valor, onde cada chave é única e está associada a um valor correspondente. Os objetos em JavaScript são essenciais para organizar e manipular dados de maneira eficiente e flexível.

Aqui está uma descrição detalhada sobre objetos em JavaScript:

1. **Propriedades**: Um objeto em JavaScript consiste em um conjunto de propriedades, onde cada propriedade é uma associação entre uma chave única e um valor. As chaves são sempre strings ou símbolos, e os valores podem ser de qualquer tipo de dado, incluindo números, strings, funções, outros objetos e assim por diante.

   Exemplo:
   ```javascript
   let person = {
       nome: "João",
       idade: 25,
       cidade: "São Paulo"
   };
   ```

2. **Acesso a Propriedades**: Você pode acessar as propriedades de um objeto usando a notação de ponto (`objeto.propriedade`) ou a notação de colchetes (`objeto['propriedade']`).

   Exemplo:
   ```javascript
   console.log(person.nome); // Saída: João
   console.log(person['idade']); // Saída: 25
   ```

3. **Adição e Remoção de Propriedades**: Você pode adicionar novas propriedades a um objeto atribuindo um valor a uma chave que ainda não existe. Da mesma forma, você pode remover propriedades usando o operador `delete`.

   Exemplo:
   ```javascript
   person.email = "joao@example.com"; // Adicionando uma nova propriedade
   delete person.cidade; // Removendo uma propriedade existente
   ```

4. **Iteração sobre Propriedades**: Você pode iterar sobre as propriedades de um objeto usando loops como `for...in` ou métodos como `Object.keys()`, `Object.values()` e `Object.entries()`.

   Exemplo:
   ```javascript
   for (let key in person) {
       console.log(key + ": " + person[key]);
   }

   Object.keys(person).forEach(key => {
       console.log(key + ": " + person[key]);
   });
   ```

5. **Referência por Valor**: Em JavaScript, os objetos são passados por referência, o que significa que quando você atribui um objeto a uma variável ou passa um objeto para uma função, você está manipulando uma referência ao objeto real, não uma cópia dele.

   Exemplo:
   ```javascript
   let person1 = { nome: "João" };
   let person2 = person1; // person2 faz referência ao mesmo objeto que person1
   ```

6. **Construtores e Protótipos**: Em JavaScript, você pode criar objetos usando funções construtoras e protótipos. Isso permite criar múltiplos objetos com as mesmas propriedades e métodos compartilhados.

   Exemplo:
   ```javascript
   function Person(nome, idade) {
       this.nome = nome;
       this.idade = idade;
   }

   Person.prototype.sayHello = function() {
       console.log("Olá, meu nome é " + this.nome);
   };

   let joao = new Person("João", 25);
   joao.sayHello(); // Saída: Olá, meu nome é João
   ```

Em resumo, os objetos em JavaScript são componentes fundamentais da linguagem e são amplamente utilizados para modelar dados e funcionalidades de maneira organizada e eficiente. Eles oferecem flexibilidade, facilidade de uso e poderosas capacidades de manipulação de dados.

## Métodos em Objects

Em JavaScript, o tipo `Object` é uma classe global que serve como a raiz do protótipo de todos os objetos no JavaScript. Ela fornece vários métodos úteis para trabalhar com objetos e suas propriedades. Abaixo, descrevo alguns dos métodos mais comuns disponíveis no objeto `Object`:

1. **Object.keys(objeto)**: Retorna um array contendo os nomes de todas as propriedades próprias enumeráveis de um objeto.

   Exemplo:
   ```javascript
   const objeto = { a: 1, b: 2, c: 3 };
   console.log(Object.keys(objeto)); // Saída: ['a', 'b', 'c']
   ```

2. **Object.values(objeto)**: Retorna um array contendo os valores das propriedades próprias enumeráveis de um objeto.

   Exemplo:
   ```javascript
   const objeto = { a: 1, b: 2, c: 3 };
   console.log(Object.values(objeto)); // Saída: [1, 2, 3]
   ```

3. **Object.entries(objeto)**: Retorna um array contendo arrays dos pares [chave, valor] de todas as propriedades próprias enumeráveis de um objeto.

   Exemplo:
   ```javascript
   const objeto = { a: 1, b: 2, c: 3 };
   console.log(Object.entries(objeto)); // Saída: [['a', 1], ['b', 2], ['c', 3]]
   ```

4. **Object.assign(objetoAlvo, ...objetosOrigem)**: Copia as propriedades de um ou mais objetos de origem para um objeto de destino e retorna o objeto de destino. Se várias fontes contiverem a mesma chave, a última fonte na lista vence.

   Exemplo:
   ```javascript
   const objeto1 = { a: 1, b: 2 };
   const objeto2 = { b: 3, c: 4 };
   const resultado = Object.assign({}, objeto1, objeto2);
   console.log(resultado); // Saída: { a: 1, b: 3, c: 4 }
   ```

5. **Object.hasOwnProperty(chave)**: Retorna um booleano indicando se o objeto possui a propriedade especificada como uma propriedade própria do objeto e não herdada pelo seu protótipo.

   Exemplo:
   ```javascript
   const objeto = { a: 1, b: 2 };
   console.log(objeto.hasOwnProperty('a')); // Saída: true
   console.log(objeto.hasOwnProperty('toString')); // Saída: false
   ```

6. **Object.freeze(objeto)**: Congela um objeto, impedindo a adição, remoção ou modificação de suas propriedades. Tentativas de alterar propriedades congeladas ou adicionar/remover propriedades resultarão em falha silenciosa no modo estrito e em uma exceção no modo não estrito.

   Exemplo:
   ```javascript
   const objeto = { a: 1, b: 2 };
   Object.freeze(objeto);
   objeto.c = 3; // Esta operação não tem efeito em um objeto congelado
   console.log(objeto); // Saída: { a: 1, b: 2 }
   ```

Esses são apenas alguns dos métodos disponíveis no objeto `Object` em JavaScript. Eles são frequentemente usados para manipular e iterar sobre propriedades de objetos, copiar objetos, verificar propriedades e congelar objetos para evitar modificações acidentais.

## Operadores de condição

Em JavaScript, os operadores de condição em objetos são utilizados para verificar propriedades específicas de um objeto, verificar se um objeto atende a determinados critérios ou manipular objetos com base em certas condições. Aqui estão algumas das operações mais comuns:

1. **Operador `in`**: O operador `in` verifica se um objeto possui uma determinada propriedade.

```javascript
const person = { name: "John", age: 30 };
console.log("name" in person); // Output: true
console.log("gender" in person); // Output: false
```

2. **Método `hasOwnProperty()`**: Este método verifica se um objeto possui uma propriedade própria (não herdada).

```javascript
const person = { name: "John", age: 30 };
console.log(person.hasOwnProperty("name")); // Output: true
console.log(person.hasOwnProperty("toString")); // Output: false
```

3. **Operador `instanceof`**: O operador `instanceof` verifica se um objeto é uma instância de um determinado tipo.

```javascript
const arr = [1, 2, 3];
console.log(arr instanceof Array); // Output: true
console.log(arr instanceof Object); // Output: true (todos os arrays são objetos em JavaScript)
```

4. **Operador de comparação de igualdade (`===`)**: Este operador é usado para comparar se dois objetos são idênticos (mesmo objeto na memória).

```javascript
const obj1 = { name: "John" };
const obj2 = { name: "John" };
console.log(obj1 === obj2); // Output: false
```

5. **Operador de comparação de igualdade (`==`) ou `Object.is()`: Podem ser usados para verificar a igualdade de valor entre objetos.

```javascript
const obj1 = { name: "John" };
const obj2 = { name: "John" };
console.log(obj1 == obj2); // Output: false
console.log(Object.is(obj1, obj2)); // Output: false
```

6. **Operador ternário**: O operador ternário (`? :`) pode ser usado para fazer condições em objetos e retornar diferentes valores com base nessas condições.

```javascript
const person = { name: "John", age: 30 };
const canVote = person.age >= 18 ? "Yes" : "No";
console.log(canVote); // Output: "Yes"
```

Esses operadores e métodos oferecem maneiras de realizar operações condicionais em objetos em JavaScript, permitindo uma manipulação flexível e eficaz dos dados do objeto.

## Alterar valores em Objects

Para alterar valores em objetos JavaScript, você pode acessar a propriedade desejada do objeto e atribuir um novo valor a ela. Existem algumas maneiras diferentes de fazer isso, dependendo do que você está tentando alcançar.

1. **Atribuição direta**:

```javascript
const person = { name: "John", age: 30 };
person.age = 35; // Alterando o valor da propriedade 'age'
console.log(person); // Output: { name: "John", age: 35 }
```

2. **Adição de nova propriedade**:

```javascript
const person = { name: "John", age: 30 };
person.gender = "Male"; // Adicionando uma nova propriedade 'gender'
console.log(person); // Output: { name: "John", age: 30, gender: "Male" }
```

3. **Atribuição com base em variáveis**:

```javascript
const person = { name: "John", age: 30 };
const newAge = 35;
person.age = newAge; // Alterando o valor da propriedade 'age' com base em uma variável
console.log(person); // Output: { name: "John", age: 35 }
```

4. **Remoção de propriedades**:

```javascript
const person = { name: "John", age: 30 };
delete person.age; // Removendo a propriedade 'age'
console.log(person); // Output: { name: "John" }
```

Lembre-se de que, ao modificar objetos em JavaScript, você está manipulando a referência ao objeto, não uma cópia do objeto. Portanto, qualquer alteração feita no objeto será refletida em todas as referências a ele.

Se você precisar copiar um objeto antes de modificá-lo para manter o original intacto, pode usar várias técnicas de clonagem, como espalhamento (`...`), `Object.assign()`, ou bibliotecas como o Lodash.
