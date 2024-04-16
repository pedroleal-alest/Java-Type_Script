# Intro 

## Variáveis

Em JavaScript, as variáveis são usadas para armazenar dados. Elas são essenciais para qualquer programa, pois permitem que você armazene valores e os manipule conforme necessário. Aqui está uma descrição das variáveis em JavaScript:

1. **Declaração de Variáveis:**
   - Em JavaScript, você pode declarar variáveis usando as palavras-chave `var`, `let`, ou `const`.
   - Anteriormente, `var` era a única maneira de declarar variáveis em JavaScript, mas com o ECMAScript 6 (ES6), foram introduzidas `let` e `const`.

2. **`var`:**
   - Declara uma variável globalmente ou localmente para uma função, sem importar o escopo de bloco.
   - O escopo de uma variável declarada com `var` é a função atual ou, se declarada fora de qualquer função, é global.

3. **`let`:**
   - Declara uma variável local no escopo de bloco.
   - Variáveis declaradas com `let` só são acessíveis dentro do bloco onde foram declaradas.

4. **`const`:**
   - Declara uma constante cujo valor não pode ser alterado após a inicialização.
   - Assim como `let`, o escopo de uma variável `const` é o bloco onde ela é declarada.

5. **Tipagem Dinâmica:**
   - JavaScript é uma linguagem de tipagem dinâmica, o que significa que você não precisa declarar explicitamente o tipo de uma variável antes de usá-la. O tipo de uma variável é determinado automaticamente durante a execução do programa.

6. **Tipos de Dados:**
   - JavaScript possui vários tipos de dados, incluindo números, strings, booleanos, objetos, arrays, funções, entre outros.
   - As variáveis em JavaScript podem conter qualquer tipo de dado.

7. **Escopo:**
   - O escopo de uma variável refere-se à região do código onde a variável pode ser acessada.
   - Variáveis declaradas com `var` têm escopo de função, enquanto as declaradas com `let` e `const` têm escopo de bloco.

8. **Hoisting:**
   - Em JavaScript, declarações de variáveis usando `var` são "elevadas" (hoisted) para o topo do escopo atual durante a fase de compilação.
   - Isso significa que você pode usar uma variável antes de declará-la, embora o valor seja `undefined`.

No geral, entender e utilizar variáveis em JavaScript é fundamental para escrever código eficaz e funcional. É importante escolher o tipo de declaração de variável adequado com base nos requisitos do seu programa e no escopo desejado.

### Exemplos

Claro, vou fornecer um exemplo para cada tipo de declaração de variável em JavaScript:

1. **Exemplo usando `var`:**
```javascript
function exampleVar() {
    if (true) {
        var x = 10;
        console.log(x); // Saída: 10
    }
    console.log(x); // Saída: 10
}

exampleVar();
console.log(x); // Erro: x não está definido
```
Neste exemplo, a variável `x` é declarada dentro de um bloco `if`, mas ainda pode ser acessada fora desse bloco devido ao escopo de função de `var`.

2. **Exemplo usando `let`:**
```javascript
function exampleLet() {
    if (true) {
        let y = 20;
        console.log(y); // Saída: 20
    }
    console.log(y); // Erro: y não está definido
}

exampleLet();
console.log(y); // Erro: y não está definido
```
Neste exemplo, a variável `y` é declarada usando `let`, o que limita seu escopo ao bloco `if`. Ela não pode ser acessada fora desse bloco.

3. **Exemplo usando `const`:**
```javascript
function exampleConst() {
    const z = 30;
    console.log(z); // Saída: 30

    // Tentativa de atribuir um novo valor a uma constante (gerará um erro)
    z = 40; // Erro: Atribuição à constante
}

exampleConst();
```
Neste exemplo, a variável `z` é declarada como uma constante usando `const`, o que significa que seu valor não pode ser alterado depois de ser inicializado. Qualquer tentativa de reatribuir um valor resultará em um erro.
