## Part2

## Maps

Mapas (Maps) são uma estrutura de dados em JavaScript introduzida no ECMAScript 6 (também conhecido como ES6) que permite armazenar pares chave-valor, onde as chaves podem ser de qualquer tipo de dados, não apenas strings como em objetos. Mapas fornecem uma maneira eficiente de mapear valores para chaves e são úteis quando você precisa associar dados de uma forma flexível e dinâmica.

Aqui estão algumas características importantes dos Mapas em JavaScript:

1. **Chaves podem ser de qualquer tipo**: Em um mapa, as chaves podem ser de qualquer tipo de dados, incluindo números, strings, objetos e até mesmo funções.

2. **Métodos para manipulação de dados**: Mapas fornecem uma variedade de métodos para adicionar, remover e manipular pares chave-valor. Alguns dos métodos mais comuns incluem `set()` para adicionar um par chave-valor, `get()` para recuperar o valor associado a uma chave, `delete()` para remover um par chave-valor e `clear()` para remover todos os pares chave-valor do mapa.

3. **Iteração ordenada**: Ao contrário dos objetos em JavaScript, onde a ordem das chaves pode não ser garantida, os mapas mantêm a ordem de inserção dos pares chave-valor. Isso significa que você pode iterar sobre os pares chave-valor em uma ordem consistente.

4. **Tamanho dinâmico**: Os mapas podem crescer dinamicamente à medida que novos pares chave-valor são adicionados e encolher à medida que os pares são removidos, sem a necessidade de especificar um tamanho inicial.

5. **Eficiência de busca**: Os mapas são otimizados para operações de busca, o que significa que recuperar um valor associado a uma chave é uma operação rápida, mesmo para grandes conjuntos de dados.

Exemplo de uso de Mapas em JavaScript:

```javascript
// Criando um novo mapa
let myMap = new Map();

// Adicionando pares chave-valor
myMap.set("nome", "João");
myMap.set("idade", 30);
myMap.set("cidade", "São Paulo");

// Acessando valores usando as chaves
console.log(myMap.get("idade")); // Saída: 30

// Verificando se uma chave existe
console.log(myMap.has("nome")); // Saída: true

// Removendo um par chave-valor
myMap.delete("cidade");

// Iterando sobre os pares chave-valor
myMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});
```

Mapas são uma adição poderosa ao conjunto de estruturas de dados em JavaScript e são amplamente utilizados em situações onde a flexibilidade e o desempenho são importantes.

## Métodos com Maps

Os Mapas em JavaScript oferecem uma variedade de métodos para manipular e acessar os pares chave-valor armazenados. Aqui estão os principais métodos fornecidos pela classe Map:

1. **set(chave, valor)**: Adiciona um novo par chave-valor ao mapa. Se a chave já existir, o valor associado a ela será substituído pelo novo valor.

   ```javascript
   let myMap = new Map();
   myMap.set("nome", "João");
   ```

2. **get(chave)**: Retorna o valor associado à chave especificada ou undefined se a chave não existir no mapa.

   ```javascript
   console.log(myMap.get("nome")); // Saída: João
   ```

3. **has(chave)**: Retorna um booleano indicando se o mapa contém ou não uma chave específica.

   ```javascript
   console.log(myMap.has("idade")); // Saída: false
   ```

4. **delete(chave)**: Remove o par chave-valor associado à chave especificada do mapa, se existir.

   ```javascript
   myMap.delete("nome");
   ```

5. **clear()**: Remove todos os pares chave-valor do mapa, deixando-o vazio.

   ```javascript
   myMap.clear();
   ```

6. **size**: Retorna o número de pares chave-valor no mapa.

   ```javascript
   console.log(myMap.size); // Saída: 0
   ```

7. **keys()**: Retorna um iterador contendo as chaves do mapa na ordem de inserção.

   ```javascript
   for (let chave of myMap.keys()) {
       console.log(chave);
   }
   ```

8. **values()**: Retorna um iterador contendo os valores do mapa na ordem de inserção.

   ```javascript
   for (let valor of myMap.values()) {
       console.log(valor);
   }
   ```

9. **entries()**: Retorna um iterador contendo arrays `[chave, valor]` para cada par chave-valor no mapa, na ordem de inserção.

   ```javascript
   for (let [chave, valor] of myMap.entries()) {
       console.log(`${chave}: ${valor}`);
   }
   ```

10. **forEach(callbackFn[, thisArg])**: Executa uma função de retorno de chamada para cada par chave-valor no mapa, na ordem de inserção.

    ```javascript
    myMap.forEach((valor, chave) => {
        console.log(`${chave}: ${valor}`);
    });
    ```

Esses são os principais métodos disponíveis para manipular Mapas em JavaScript. Cada método fornece uma maneira conveniente de acessar, adicionar, remover e iterar sobre os pares chave-valor em um mapa.

## Sets (conjuntos)

Conjuntos, ou Sets, são uma estrutura de dados em JavaScript que permite armazenar coleções de valores únicos. Isso significa que cada valor só pode aparecer uma vez no conjunto. Os conjuntos são úteis quando você precisa armazenar uma lista de itens onde a duplicação de valores não é permitida e a ordem dos elementos não é importante.

Aqui estão algumas características importantes dos conjuntos em JavaScript:

1. **Valores Únicos**: Cada valor em um conjunto é único. Se você tentar adicionar um valor que já está presente no conjunto, ele será ignorado.

2. **Sem Ordenação**: Os conjuntos não mantêm a ordem dos elementos como os arrays. Não há garantia de que os elementos serão iterados na mesma ordem em que foram inseridos.

3. **Operações de Conjunto**: Os conjuntos suportam operações comuns de conjuntos, como união, interseção, diferença e verificação de pertinência.

4. **Iterável**: Os conjuntos podem ser iterados usando loops como `for...of` ou métodos como `forEach()`.

5. **Eficiência**: A verificação de pertinência em um conjunto é muito eficiente, pois não é necessário percorrer toda a coleção para verificar a existência de um valor.

Aqui está um exemplo básico de como usar conjuntos em JavaScript:

```javascript
// Criando um conjunto
let mySet = new Set();

// Adicionando elementos
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1); // Duplicado, será ignorado

// Verificando tamanho
console.log(mySet.size); // Saída: 3

// Verificando pertinência
console.log(mySet.has(2)); // Saída: true
console.log(mySet.has(4)); // Saída: false

// Iterando sobre o conjunto
for (let item of mySet) {
    console.log(item);
}
// Saída:
// 1
// 2
// 3

// Removendo um elemento
mySet.delete(2);

// Limpando o conjunto
mySet.clear();
```

Os conjuntos são úteis em situações onde você precisa armazenar uma coleção de valores únicos e não se importa com a ordem dos elementos. Eles são especialmente eficientes para verificar a existência de um valor em uma grande coleção de dados.

## Métodos com sets

Os conjuntos (Sets) em JavaScript possuem vários métodos que permitem manipular e interagir com os dados armazenados neles. Aqui estão os principais métodos disponíveis em conjuntos:

1. **add(value)**: Adiciona um novo elemento ao conjunto. Se o elemento já estiver presente, o conjunto não será modificado.

```javascript
let mySet = new Set();
mySet.add(1);
mySet.add(2);
```

2. **delete(value)**: Remove um elemento específico do conjunto, se existir. Retorna true se o elemento for removido com sucesso, e false caso contrário.

```javascript
mySet.delete(2);
```

3. **has(value)**: Verifica se um determinado valor está presente no conjunto. Retorna true se o valor estiver no conjunto, e false caso contrário.

```javascript
console.log(mySet.has(1)); // Saída: true
console.log(mySet.has(2)); // Saída: false
```

4. **clear()**: Remove todos os elementos do conjunto, deixando-o vazio.

```javascript
mySet.clear();
```

5. **size**: Propriedade que retorna o número de elementos no conjunto.

```javascript
console.log(mySet.size); // Saída: 1
```

6. **forEach(callbackFn, thisArg)**: Executa uma função de retorno de chamada uma vez para cada valor no conjunto, na ordem de inserção. O parâmetro opcional thisArg pode ser usado para definir o contexto de execução da função de retorno de chamada.

```javascript
mySet.forEach(function(value) {
    console.log(value);
});
```

Além desses métodos principais, conjuntos também suportam iteração com `for...of`, conversão para arrays usando `Array.from()` e a verificação de pertinência de múltiplos valores com `every()` e `some()`.

Os conjuntos em JavaScript oferecem uma maneira conveniente e eficiente de armazenar coleções de valores únicos, e esses métodos permitem manipular esses conjuntos de forma eficaz.

### Outras funcionalidades em Sets

Funcionalidades em conjuntos (Sets):

1. **Iteração com `for...of`**:
   
   Assim como em arrays, você pode usar o loop `for...of` para iterar sobre os valores em um conjunto. Isso permite acessar cada elemento de forma simples e direta, na ordem em que foram inseridos.

   Exemplo:
   ```javascript
   let mySet = new Set([1, 2, 3]);

   for (let item of mySet) {
       console.log(item);
   }
   // Saída:
   // 1
   // 2
   // 3
   ```

2. **Conversão para arrays usando `Array.from()`**:
   
   Se precisar converter um conjunto em um array, você pode usar o método estático `Array.from()`. Isso cria uma nova instância de array contendo os elementos do conjunto, na ordem em que foram inseridos.

   Exemplo:
   ```javascript
   let mySet = new Set([1, 2, 3]);
   let myArray = Array.from(mySet);

   console.log(myArray); // Saída: [1, 2, 3]
   ```

3. **Verificação de pertinência de múltiplos valores com `every()` e `some()`**:

   - **`every()`**: Verifica se todos os elementos de um conjunto satisfazem uma determinada condição especificada em uma função de retorno de chamada. Retorna true se todos os elementos satisfizerem a condição, caso contrário, retorna false.

     Exemplo:
     ```javascript
     let mySet = new Set([1, 2, 3]);

     let allGreaterThanZero = mySet.every(value => value > 0);
     console.log(allGreaterThanZero); // Saída: true

     let allEven = mySet.every(value => value % 2 === 0);
     console.log(allEven); // Saída: false
     ```

   - **`some()`**: Verifica se pelo menos um elemento de um conjunto satisfaz uma determinada condição especificada em uma função de retorno de chamada. Retorna true se pelo menos um elemento satisfizer a condição, caso contrário, retorna false.

     Exemplo:
     ```javascript
     let mySet = new Set([1, 2, 3]);

     let hasEven = mySet.some(value => value % 2 === 0);
     console.log(hasEven); // Saída: true

     let hasNegative = mySet.some(value => value < 0);
     console.log(hasNegative); // Saída: false
     ```

Essas funcionalidades oferecem maneiras flexíveis e convenientes de trabalhar com conjuntos em JavaScript, permitindo iteração, conversão para outros tipos de coleções e verificação de condições sobre os elementos do conjunto.

## Arrays Tipados (Typed Arrays)

Os Arrays Tipados (Typed Arrays) em JavaScript são uma adição poderosa ao conjunto de estruturas de dados disponíveis na linguagem. Eles são especialmente úteis quando se trabalha com dados numéricos ou binários, fornecendo um mecanismo eficiente para armazenar e manipular grandes conjuntos de números.

Os Arrays Tipados são diferentes dos arrays regulares em JavaScript porque eles lidam com dados em um nível mais baixo, especificando o tipo de dados que podem ser armazenados dentro deles. Isso permite uma manipulação mais eficiente de grandes conjuntos de dados, pois elimina a necessidade de conversão de tipos durante operações.

Existem diferentes tipos de Arrays Tipados, cada um otimizado para um tipo específico de dados, como inteiros de 8 bits, inteiros de 16 bits, inteiros de 32 bits, números de ponto flutuante de 32 bits, números de ponto flutuante de 64 bits, entre outros.

Aqui estão alguns métodos comuns que podem ser usados com Arrays Tipados:

1. **`set(index, value)`**: Define o valor do elemento na posição especificada pelo índice.

   ```javascript
   let myArray = new Int32Array(3);
   myArray.set(0, 10);
   myArray.set(1, 20);
   myArray.set(2, 30);
   ```

2. **`get(index)`**: Retorna o valor do elemento na posição especificada pelo índice.

   ```javascript
   let value = myArray.get(1); // Retorna 20
   ```

3. **`length`**: Propriedade que retorna o número de elementos no array.

   ```javascript
   let length = myArray.length; // Retorna 3
   ```

4. **Iteração com `for`**: Arrays Tipados podem ser iterados usando um loop `for`.

   ```javascript
   for (let i = 0; i < myArray.length; i++) {
       console.log(myArray[i]);
   }
   ```

5. **`subarray(begin, end)`**: Retorna uma nova visão do array, abrangendo os elementos entre os índices `begin` e `end`, sem modificar o array original.

   ```javascript
   let sub = myArray.subarray(1, 2); // Retorna um novo array com os elementos 20 e 30
   ```

6. **`slice(begin, end)`**: Similar ao método `subarray`, retorna uma cópia dos elementos entre os índices `begin` e `end`, mas retorna um novo array em vez de uma visão.

   ```javascript
   let sliced = myArray.slice(1, 2); // Retorna [20]
   ```

Esses são apenas alguns dos métodos e propriedades disponíveis para Arrays Tipados. Eles oferecem um alto desempenho ao manipular grandes conjuntos de dados numéricos em JavaScript, tornando-os uma escolha popular para tarefas que exigem eficiência e velocidade.
