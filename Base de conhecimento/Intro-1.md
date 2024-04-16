# Intro 

## Sintaxe

A sintaxe em JavaScript é a estrutura e a forma que você usa para escrever código nesta linguagem de programação. Uma boa compreensão da sintaxe é essencial para escrever código JavaScript funcional e legível. Aqui estão alguns aspectos importantes da sintaxe em JavaScript:

1. **Case Sensitivity:**
   - JavaScript é sensível a maiúsculas e minúsculas, o que significa que `nome` e `Nome` são tratados como duas variáveis diferentes.

2. **Comentários:**
   - Você pode adicionar comentários em seu código JavaScript para explicar o que o código faz.
   - Comentários de linha única começam com `//`, e comentários de várias linhas são delimitados por `/*` e `*/`.

3. **Instruções:**
   - As instruções em JavaScript são separadas por ponto e vírgula `;`.
   - No entanto, em muitos casos, o ponto e vírgula é opcional, pois o JavaScript automaticamente insere ponto e vírgula no final de uma linha se necessário.

4. **Blocos de Código:**
   - Os blocos de código são delimitados por chaves `{}`.
   - Eles são usados para agrupar várias instruções em uma única unidade de execução, como funções, loops, e condicionais.

5. **Variáveis:**
   - Já discutimos variáveis em detalhes anteriormente, mas em resumo, você declara variáveis usando `var`, `let`, ou `const`, seguido pelo nome da variável.

6. **Operadores:**
   - JavaScript suporta uma variedade de operadores, como aritméticos (`+`, `-`, `*`, `/`), de atribuição (`=`, `+=`, `-=`, etc.), de comparação (`==`, `!=`, `===`, `!==`, etc.), lógicos (`&&`, `||`, `!`), entre outros.

7. **Strings:**
   - As strings em JavaScript são delimitadas por aspas simples (`'`) ou duplas (`"`).
   - Você pode concatenar strings usando o operador `+`.

8. **Funções:**
   - As funções em JavaScript são definidas usando a palavra-chave `function`.
   - Você pode definir funções nomeadas ou funções anônimas.

9. **Condicionais:**
   - JavaScript suporta estruturas condicionais como `if`, `else if` e `else`, para controlar o fluxo do programa com base em condições.

10. **Loops:**
    - Você pode criar loops em JavaScript usando `for`, `while`, `do-while`, ou `for...of` e `for...in` para iterar sobre arrays e objetos.

11. **Classes:**
    - A partir do ECMAScript 6 (ES6), JavaScript suporta a sintaxe de classe para criar objetos orientados a objetos.
    - Classes são declaradas usando a palavra-chave `class`.

12. **Métodos de Objeto:**
    - Os métodos de objeto são funções associadas a objetos.
    - Eles são definidos dentro do corpo de um objeto.

Entender e aplicar corretamente a sintaxe em JavaScript é fundamental para escrever código claro, conciso e funcional. A prática regular e a familiarização com os conceitos básicos ajudarão você a se tornar mais confortável com a linguagem.

## Tipos primitivos

Em JavaScript, os tipos primitivos são tipos de dados simples e imutáveis que representam valores básicos. Eles são chamados de primitivos porque não são objetos e não possuem métodos. Aqui estão os principais tipos primitivos em JavaScript:

1. **String:** Representa uma sequência de caracteres. As strings são criadas usando aspas simples (`'`) ou aspas duplas (`"`).
   
   Exemplo:
   ```javascript
   let nome = 'João';
   ```

2. **Number:** Representa números, inteiros ou de ponto flutuante. Também inclui valores especiais como `Infinity`, `-Infinity` e `NaN` (Not a Number).

   Exemplo:
   ```javascript
   let idade = 30;
   let altura = 1.75;
   ```

3. **Boolean:** Representa um valor lógico, `true` (verdadeiro) ou `false` (falso).

   Exemplo:
   ```javascript
   let solteiro = true;
   ```

4. **Null:** Representa a ausência intencional de qualquer valor ou objeto. Em JavaScript, `null` é considerado um tipo primitivo, mas é um valor único que representa a ausência de valor.

   Exemplo:
   ```javascript
   let endereco = null;
   ```

5. **Undefined:** Representa uma variável que foi declarada, mas ainda não foi atribuída um valor. Quando uma variável é declarada sem atribuição de valor, seu valor é `undefined`.

   Exemplo:
   ```javascript
   let telefone;
   ```

6. **Symbol (a partir do ECMAScript 6):** Representa um valor único e imutável, geralmente usado como identificador único para propriedades de objetos.

   Exemplo:
   ```javascript
   const corAzul = Symbol('azul');
   ```

Os tipos primitivos em JavaScript são passados por valor, o que significa que quando você atribui um valor primitivo a uma variável, uma cópia real desse valor é feita. Isso contrasta com os tipos de referência, como objetos e arrays, que são passados por referência.

Entender os tipos primitivos em JavaScript é fundamental para entender como os dados são manipulados e como os valores são comparados e atribuídos.

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

## Operadores

Em JavaScript, os operadores são símbolos especiais que realizam operações em variáveis e valores. Eles são usados para realizar operações matemáticas, comparações, atribuições e outras tarefas. Vou descrever alguns dos principais tipos de operadores em JavaScript:

1. **Operadores Aritméticos:** São usados para realizar operações matemáticas em números. Alguns exemplos incluem:
   - `+` (adição)
   - `-` (subtração)
   - `*` (multiplicação)
   - `/` (divisão)
   - `%` (módulo, retorna o resto da divisão)
   - `++` (incremento)
   - `--` (decremento)

2. **Operadores de Atribuição:** São usados para atribuir valores a variáveis. Por exemplo:
   - `=` (atribuição simples)
   - `+=` (adiciona e atribui)
   - `-=` (subtrai e atribui)
   - `*=` (multiplica e atribui)
   - `/=` (divide e atribui)
   - `%=` (calcula o módulo e atribui)

3. **Operadores de Comparação:** São usados para comparar valores. Eles retornam verdadeiro (`true`) ou falso (`false`). Exemplos incluem:
   - `==` (igual a, verifica igualdade de valor)
   - `===` (igual a e igual em tipo, verifica igualdade de valor e tipo)
   - `!=` (diferente de)
   - `!==` (diferente de e diferente em tipo)
   - `>` (maior que)
   - `<` (menor que)
   - `>=` (maior ou igual a)
   - `<=` (menor ou igual a)

4. **Operadores Lógicos:** São usados para combinar ou inverter valores booleanos. Alguns exemplos são:
   - `&&` (e lógico, retorna verdadeiro se ambas as expressões forem verdadeiras)
   - `||` (ou lógico, retorna verdadeiro se pelo menos uma das expressões for verdadeira)
   - `!` (negação lógica, inverte o valor booleano)

5. **Operadores de Concatenação de Strings:** São usados para unir strings. Por exemplo:
   - `+` (concatenação)

6. **Operadores Ternários:** É uma forma abreviada de uma estrutura de controle `if...else`. Sintaxe: `condição ? expressão1 : expressão2`. Se a condição for verdadeira, `expressão1` é avaliada, caso contrário, `expressão2` é avaliada.

7. **Operadores de Tipo:** Permitem verificar o tipo de um valor. Por exemplo:
   - `typeof` (retorna o tipo de uma expressão)
   - `instanceof` (verifica se um objeto é uma instância de outro)

8. **Operadores Bitwise:** São usados para manipular números em nível de bit. Alguns exemplos incluem:
   - `&` (AND bitwise)
   - `|` (OR bitwise)
   - `^` (XOR bitwise)
   - `<<` (shift left)
   - `>>` (shift right)
   - `>>>` (shift right sem sinal)

Esses são apenas alguns dos principais operadores em JavaScript. Eles são fundamentais para realizar uma variedade de tarefas, desde operações matemáticas simples até manipulação de dados complexos.
