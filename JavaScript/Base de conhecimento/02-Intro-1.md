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

## Escopos

Em JavaScript, o escopo refere-se à acessibilidade e visibilidade de variáveis, funções e outros identificadores em diferentes partes do código. O escopo determina onde as variáveis e funções podem ser acessadas e modificadas dentro de um programa. Existem dois principais tipos de escopos em JavaScript: escopo global e escopo local.

1. **Escopo Global:**
   - Variáveis declaradas fora de qualquer função têm escopo global.
   - Variáveis globais podem ser acessadas de qualquer lugar no código, dentro ou fora de funções.
   - Variáveis globais são geralmente declaradas usando a palavra-chave `var`, `let` ou `const` fora de qualquer bloco de código.

   Exemplo de escopo global:
   ```javascript
   var nome = 'João'; // Variável global

   function exibirNome() {
       console.log(nome); // Variável global acessível dentro da função
   }

   exibirNome(); // Output: 'João'
   ```

2. **Escopo Local:**
   - Variáveis declaradas dentro de uma função têm escopo local.
   - Variáveis locais só podem ser acessadas dentro da função em que foram declaradas.
   - Quando você declara uma variável dentro de uma função sem usar `var`, `let` ou `const`, ela se torna uma variável global.

   Exemplo de escopo local:
   ```javascript
   function saudacao() {
       var mensagem = 'Olá!'; // Variável local

       console.log(mensagem); // Variável local acessível dentro da função
   }

   saudacao(); // Output: 'Olá!'
   console.log(mensagem); // Erro: mensagem is not defined
   ```

3. **Escopo de Bloco (a partir do ECMAScript 6):**
   - Variáveis declaradas com `let` e `const` têm escopo de bloco, o que significa que são acessíveis apenas dentro do bloco de código em que foram declaradas.
   - Um bloco de código é delimitado por chaves `{}` em JavaScript.
   - Variáveis declaradas com `var` têm escopo de função, não de bloco.

   Exemplo de escopo de bloco:
   ```javascript
   if (true) {
       let x = 10; // Variável com escopo de bloco
       var y = 20; // Variável com escopo de função
   }

   console.log(x); // ReferenceError: x is not defined
   console.log(y); // Output: 20
   ```

Entender o escopo é crucial para escrever código JavaScript limpo e evitar problemas de variáveis indefinidas ou inesperadas. O uso correto de variáveis locais e globais pode melhorar a legibilidade e a manutenibilidade do código.

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

## Controle de fluxo

O controle de fluxo em JavaScript refere-se à maneira como você pode direcionar o fluxo de execução do seu código com base em condições e iterações. Existem várias construções de controle de fluxo em JavaScript que permitem controlar como o seu código é executado. Aqui estão algumas das principais:

1. **Instruções Condicionais:**
   - As instruções condicionais permitem executar diferentes blocos de código com base em condições específicas.
   - A estrutura básica é o `if`, que avalia uma expressão e executa um bloco de código se a expressão for verdadeira.
   ```javascript
   if (condição) {
       // bloco de código se a condição for verdadeira
   }
   ```

2. **Else e Else If:**
   - Você pode estender o `if` com `else` para executar um bloco de código alternativo se a condição for falsa.
   - Além disso, você pode encadear várias condições com `else if` para lidar com múltiplas possibilidades.
   ```javascript
   if (condição1) {
       // bloco de código se condição1 for verdadeira
   } else if (condição2) {
       // bloco de código se condição1 for falsa e condição2 for verdadeira
   } else {
       // bloco de código se todas as condições anteriores forem falsas
   }
   ```

3. **Operador Ternário:**
   - O operador ternário é uma forma concisa de escrever instruções condicionais em uma única linha.
   - Ele consiste em uma expressão seguida por `?`, seguida por duas expressões separadas por `:`. Se a expressão inicial for verdadeira, a primeira expressão é executada; caso contrário, a segunda expressão é executada.
   ```javascript
   var resultado = (condição) ? expressãoVerdadeira : expressãoFalsa;
   ```

4. **Loops:**
   - Os loops permitem repetir a execução de um bloco de código várias vezes até que uma condição seja atendida.
   - O loop `for` é comumente usado para iterar sobre uma sequência de valores.
   ```javascript
   for (inicialização; condição; incremento) {
       // bloco de código a ser repetido
   }
   ```

5. **Loop While:**
   - O loop `while` executa um bloco de código enquanto uma condição especificada for verdadeira.
   ```javascript
   while (condição) {
       // bloco de código a ser repetido
   }
   ```

6. **Loop Do-While:**
   - O loop `do-while` é semelhante ao `while`, mas garante que o bloco de código seja executado pelo menos uma vez, mesmo se a condição for falsa.
   ```javascript
   do {
       // bloco de código a ser repetido
   } while (condição);
   ```

7. **Loop For...In e For...Of:**
   - Os loops `for...in` e `for...of` são usados para iterar sobre propriedades de um objeto ou elementos de uma coleção, como arrays.
   ```javascript
   for (variável in objeto) {
       // bloco de código para cada propriedade do objeto
   }

   for (variável of coleção) {
       // bloco de código para cada elemento da coleção
   }
   ```

8. **Break e Continue:**
   - As instruções `break` e `continue` são usadas dentro de loops para controlar o fluxo de execução.
   - `break` é usado para sair do loop completamente, enquanto `continue` pula para a próxima iteração do loop.

Essas são algumas das principais construções de controle de fluxo em JavaScript que permitem controlar o comportamento do seu código com base em condições e iterações. Dominar esses conceitos é essencial para escrever código JavaScript funcional e eficiente.

### Switch/Case & Switch expression

1. **Switch/Case comum**:

   - **Sintaxe**:
     ```javascript
     switch (expressao) {
       case valor1:
         // código a ser executado se expressao for igual a valor1
         break;
       case valor2:
         // código a ser executado se expressao for igual a valor2
         break;
       // outros casos
       default:
         // código a ser executado se nenhum dos casos anteriores for correspondido
     }
     ```

   - **Características**:
     - Os valores dos casos são comparados diretamente com a expressão.
     - A necessidade de `break` após cada caso para evitar a execução dos casos seguintes.
     - Pode se tornar verboso quando muitos casos estão envolvidos.

2. **Switch com Expressão**:

   - **Sintaxe**:
     ```javascript
     switch (expressao) {
       case valor1 -> 
         // código a ser executado se expressao for igual a valor1
       case valor2 -> 
         // código a ser executado se expressao for igual a valor2
       // outros casos
       default -> 
         // código a ser executado se nenhum dos casos anteriores for correspondido
     }
     ```

   - **Características**:
     - Os valores dos casos ainda são comparados com a expressão.
     - Não há necessidade de `break`, pois a execução do caso seguinte é interrompida automaticamente.
     - Mais conciso e limpo em comparação com o switch/case comum, especialmente para casos simples.

3. **Uso**:

   - O "switch/case comum" é amplamente utilizado em JavaScript e em muitas outras linguagens de programação, especialmente quando a lógica precisa ser dividida em muitos casos diferentes.
   - O "switch com expressão" é uma adição mais recente ao JavaScript, introduzida no ES2022 (ECMAScript 2022), e é preferível em situações onde a lógica é mais simples e a concisão é desejada.

Ambos os métodos podem ser úteis dependendo da complexidade e dos requisitos do seu código. O importante é escolher o método que seja mais claro e legível para a sua situação específica.

## Controle de erros

O controle de erros em JavaScript é essencial para lidar com situações inesperadas que podem ocorrer durante a execução do seu código. Isso inclui erros de sintaxe, erros de tempo de execução e erros lógicos. Aqui estão algumas maneiras de lidar com o controle de erros em JavaScript:

1. **Declaração `try...catch`:**
   - Você pode usar a declaração `try...catch` para tentar executar um bloco de código e capturar qualquer erro que ocorra durante a execução desse bloco.
   - O bloco `try` contém o código que você deseja executar, enquanto o bloco `catch` é usado para lidar com qualquer exceção (erro) que ocorra durante a execução do bloco `try`.
   ```javascript
   try {
       // Bloco de código que pode gerar um erro
   } catch (erro) {
       // Bloco de código para lidar com o erro
   }
   ```

2. **`throw` para Gerar Erros:**
   - Você pode usar a palavra-chave `throw` para gerar um erro manualmente em seu código.
   - Isso pode ser útil quando você deseja sinalizar condições de erro específicas ou criar suas próprias exceções personalizadas.
   ```javascript
   throw new Error('Mensagem de erro aqui');
   ```

3. **Objeto `Error`:**
   - O objeto `Error` é usado para representar erros em tempo de execução.
   - Ele contém informações sobre o erro, como a mensagem de erro e o rastreamento de pilha.
   ```javascript
   try {
       // Bloco de código que pode gerar um erro
   } catch (erro) {
       console.error(erro.message);
       console.error(erro.stack);
   }
   ```

4. **`finally`:**
   - Você pode usar o bloco `finally` após o bloco `try...catch` para especificar um bloco de código que será executado, independentemente de ocorrer ou não uma exceção.
   - Isso é útil para ações de limpeza, como fechar recursos abertos.
   ```javascript
   try {
       // Bloco de código que pode gerar um erro
   } catch (erro) {
       // Bloco de código para lidar com o erro
   } finally {
       // Bloco de código a ser executado sempre
   }
   ```

5. **Gestão de Erros Assíncronos:**
   - Ao trabalhar com código assíncrono, como promessas ou funções de retorno de chamada, é importante lidar com erros de forma apropriada.
   - Você pode usar `try...catch` dentro de uma função assíncrona ou encadear um método `.catch()` em uma promessa para lidar com erros assíncronos.

Lidar adequadamente com o controle de erros em JavaScript é crucial para garantir que seu código seja robusto e resiliente a falhas. Isso ajuda a tornar suas aplicações mais confiáveis e a melhorar a experiência do usuário final.

