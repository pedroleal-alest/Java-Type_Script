# Part 1

## Arrow Function

Arrow functions em JavaScript são uma forma mais concisa de escrever funções. Elas foram introduzidas no ECMAScript 6 (também conhecido como ES6) e oferecem uma sintaxe mais compacta em comparação com as funções tradicionais.

Aqui está uma comparação entre uma função tradicional e uma arrow function:

```javascript
// Função tradicional
function soma(a, b) {
  return a + b;
}

// Arrow function
const soma = (a, b) => a + b;
```

Como você pode ver, a arrow function é definida com uma sintaxe mais curta e usa uma seta (=>) entre os parâmetros e o corpo da função. Quando a função tem apenas uma expressão de retorno, como é o caso do exemplo acima, as chaves e a palavra-chave `return` podem ser omitidas.

Além disso, as arrow functions têm um comportamento diferente em relação ao `this`. Elas capturam o valor do `this` do contexto ao qual pertencem, ao contrário das funções tradicionais, que têm seu próprio valor de `this` definido durante a execução. Isso pode ser útil em certas situações, especialmente ao lidar com callbacks e funções de ordem superior.

Por exemplo:

```javascript
const objeto = {
  valor: 10,
  incrementar: function() {
    // Usando uma função tradicional, this se refere ao objeto
    return function() {
      this.valor++;
    };
  }
};

const funcaoTrad = objeto.incrementar();
funcaoTrad(); // Isso não irá incrementar o valor de objeto.valor

console.log(objeto.valor); // Ainda é 10

const objeto2 = {
  valor: 10,
  incrementar: function() {
    // Usando uma arrow function, this se refere a objeto2
    return () => {
      this.valor++;
    };
  }
};

const funcaoArrow = objeto2.incrementar();
funcaoArrow(); // Isso incrementará o valor de objeto2.valor

console.log(objeto2.valor); // Agora é 11
```

Essa é uma das diferenças fundamentais entre arrow functions e funções tradicionais em JavaScript.

