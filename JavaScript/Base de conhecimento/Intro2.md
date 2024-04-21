# Intro 2

## Strings

Em JavaScript, as strings são usadas para representar e manipular texto. Elas são uma sequência de caracteres entre aspas simples (`'`) ou duplas (`"`). Aqui está uma visão geral das strings em JavaScript:

1. **Declaração de Strings:**
   - Você pode declarar uma string atribuindo texto a uma variável.
   ```javascript
   var texto = 'Isso é uma string.';
   ```

2. **Concatenação de Strings:**
   - Você pode combinar strings usando o operador de adição (`+`).
   ```javascript
   var saudacao = 'Olá, ' + 'mundo!';
   ```

3. **Comprimento da String:**
   - Você pode encontrar o comprimento de uma string usando a propriedade `length`.
   ```javascript
   var comprimento = texto.length;
   ```

4. **Acessando Caracteres:**
   - Você pode acessar caracteres individuais em uma string usando a notação de colchetes `[]`, começando do índice 0.
   ```javascript
   var primeiroCaractere = texto[0]; // 'I'
   var segundoCaractere = texto[1]; // 's'
   ```

5. **Métodos de String:**
   - JavaScript possui muitos métodos embutidos para manipular strings, como:
     - `toUpperCase()`: Converte uma string para maiúsculas.
     - `toLowerCase()`: Converte uma string para minúsculas.
     - `indexOf()`: Retorna o índice da primeira ocorrência de um determinado valor em uma string.
     - `substring()`: Retorna uma parte da string entre os índices especificados.
     - `split()`: Divide uma string em um array de substrings com base em um separador.
     - `replace()`: Substitui uma parte da string por outra string.
     - `trim()`: Remove espaços em branco do início e do fim de uma string.
   ```javascript
   var maiusculas = texto.toUpperCase();
   var indice = texto.indexOf('uma');
   ```

6. **Template Literals:**
   - A partir do ECMAScript 6 (ES6), você pode usar template literals para criar strings com formatação mais avançada.
   - Eles permitem interpolação de variáveis e expressões usando `${}`.
   ```javascript
   var nome = 'Alice';
   var idade = 30;
   var frase = `Olá, meu nome é ${nome} e eu tenho ${idade} anos.`;
   ```

7. **Comparação de Strings:**
   - Você pode comparar strings usando operadores de comparação (`==`, `!=`, `===`, `!==`).
   - A comparação é feita com base na ordem lexicográfica (ordem do dicionário).
   ```javascript
   var str1 = 'abc';
   var str2 = 'def';
   var resultado = str1 < str2; // true
   ```

As strings são uma parte fundamental do JavaScript e são amplamente utilizadas em todos os tipos de aplicativos da web e móveis. Com uma variedade de métodos embutidos e funcionalidades poderosas, você pode manipular e trabalhar com strings de maneira eficaz em JavaScript.

## Numb

Em JavaScript, o tipo `number` é usado para representar valores numéricos, sejam eles inteiros ou de ponto flutuante. Aqui está uma descrição detalhada sobre os números em JavaScript:

1. **Declarando Números:**
   Você pode declarar um número simplesmente atribuindo um valor numérico a uma variável. Por exemplo:
   ```javascript
   let meuNumero = 42;
   ```

2. **Operações Aritméticas:**
   Os números em JavaScript suportam operações aritméticas padrão, como adição (+), subtração (-), multiplicação (*), divisão (/) e módulo (%). Por exemplo:
   ```javascript
   let soma = 10 + 5;
   let diferenca = 20 - 8;
   let produto = 7 * 3;
   let divisao = 15 / 4;
   let resto = 15 % 4; // resto da divisão de 15 por 4
   ```

3. **Precisão de Ponto Flutuante:**
   JavaScript usa o padrão IEEE 754 para representar números de ponto flutuante, o que pode levar a imprecisões em algumas operações. Por exemplo:
   ```javascript
   let resultado = 0.1 + 0.2; // Resultado: 0.30000000000000004
   ```

4. **Notação Exponencial:**
   JavaScript suporta a notação exponencial para representar números muito grandes ou muito pequenos. Por exemplo:
   ```javascript
   let numeroGrande = 5e6; // 5 * 10^6 = 5000000
   let numeroPequeno = 1.2e-3; // 1.2 * 10^(-3) = 0.0012
   ```

5. **Métodos e Propriedades Úteis:**
   - `isNaN()`: Verifica se um valor não é um número.
   - `isFinite()`: Verifica se um valor é finito (não infinito e não NaN).
   - `parseInt()`: Converte uma string para um número inteiro.
   - `parseFloat()`: Converte uma string para um número de ponto flutuante.
   - `toFixed()`: Formata um número usando notação de ponto fixo com um número especificado de casas decimais.

6. **Infinity e NaN:**
   JavaScript tem dois valores especiais para representar números especiais:
   - `Infinity`: Representa o infinito positivo.
   - `NaN` (Not a Number): Representa um valor que não é um número válido.

7. **Conversão de Tipos:**
   JavaScript faz conversões automáticas de tipos durante operações, então você pode operar com diferentes tipos de dados. Por exemplo:
   ```javascript
   let resultado = '10' * 2; // resultado será 20, pois '10' é convertido para 10 (número)
   ```

Em resumo, números em JavaScript são usados para representar valores numéricos e suportam uma variedade de operações e funcionalidades úteis para manipulação de números.

## Tipos primitivos

Em JavaScript, existem seis tipos de dados primitivos:

1. **String:**
   - Representa uma sequência de caracteres.
   - Declarada usando aspas simples (''), aspas duplas ("") ou crases (``).
   - Por exemplo: `'Olá, mundo!'`.

2. **Number:**
   - Representa valores numéricos, inteiros ou de ponto flutuante.
   - Pode incluir números inteiros, decimais, exponenciais, Infinity e NaN.
   - Por exemplo: `42`, `3.14`, `5e3`.

3. **Boolean:**
   - Representa um valor lógico verdadeiro (true) ou falso (false).
   - Usado em expressões de controle de fluxo e lógica.
   - Por exemplo: `true`, `false`.

4. **Null:**
   - Representa a ausência intencional de qualquer valor ou objeto.
   - É um valor primitivo que indica a falta de valor.
   - Por exemplo: `null`.

5. **Undefined:**
   - Representa uma variável que foi declarada, mas ainda não foi atribuída a um valor.
   - Usado quando uma variável não foi inicializada.
   - Por exemplo: `let x;` (o valor de `x` é `undefined`).

6. **Symbol:**
   - Introduzido no ECMAScript 6 (ES6).
   - Representa um identificador único e imutável, usado como chave de propriedade de objeto.
   - Por exemplo: `let sym = Symbol('chave')`.

Esses tipos de dados primitivos são imutáveis, o que significa que seus valores não podem ser alterados. Quando você manipula esses tipos de dados, está trabalhando com cópias deles, em vez de alterar os valores originais.

Esses tipos de dados primitivos são diferentes dos objetos em JavaScript, que são coleções de pares de chave-valor e podem conter dados e funcionalidades. Os tipos de dados primitivos são usados para armazenar valores simples e são passados por valor, enquanto os objetos são passados por referência.

## Conversão de valores em JS

Em JavaScript, a conversão de valores é comum e pode ocorrer de forma implícita ou explícita. A conversão de valores é a transformação de um tipo de dado em outro tipo de dado. Isso pode ser útil em várias situações, como quando você precisa comparar valores de tipos diferentes, concatenar strings com outros tipos de dados, ou quando precisa garantir que um valor seja interpretado corretamente em um contexto específico.

Aqui estão os principais tipos de conversão de valores em JavaScript:

1. **Conversão Implícita**: Ocorre automaticamente quando operações entre diferentes tipos de dados são realizadas. Por exemplo:

```javascript
var x = 10;
var y = "5";
var z = x + y; // z será "105", porque a string "5" é concatenada com o número 10
```

2. **Conversão de String para Número**: Você pode converter uma string em um número usando funções como `parseInt()` ou `parseFloat()`, ou simplesmente usando o operador `+`. Exemplo:

```javascript
var str = "10";
var num = parseInt(str); // num será 10
```

3. **Conversão de Número para String**: Você pode converter um número em uma string usando o método `toString()` ou simplesmente concatenando-o com uma string vazia (`""`). Exemplo:

```javascript
var num = 10;
var str = num.toString(); // str será "10"
```

4. **Conversão de Booleano**: Valores booleanos podem ser convertidos em outros tipos de dados implicitamente ou explicitamente. Por exemplo:

```javascript
var bool = true;
var num = +bool; // num será 1
```

5. **Conversão de Arrays e Objetos para Strings**: Arrays e objetos podem ser convertidos em strings usando o método `toString()`, que geralmente retorna uma representação de texto de seus elementos ou propriedades. Exemplo:

```javascript
var arr = [1, 2, 3];
var str = arr.toString(); // str será "1,2,3"
```

Esses são alguns exemplos básicos de conversão de valores em JavaScript. É importante entender como essas conversões funcionam para evitar comportamentos inesperados em seu código. Além disso, é sempre uma boa prática garantir que os valores estejam no tipo correto antes de realizar operações importantes.

## Math

Em JavaScript, o objeto `Math` fornece um conjunto de propriedades e métodos para realizar operações matemáticas. Ele é uma biblioteca embutida que contém funções para cálculos matemáticos comuns, como potenciação, raiz quadrada, trigonometria, entre outros. Aqui estão algumas das principais funcionalidades oferecidas pelo objeto `Math`:

1. **Constantes Matemáticas**: O objeto `Math` inclui várias constantes matemáticas úteis, como π (pi) e e (base do logaritmo natural).

```javascript
console.log(Math.PI); // Exibe o valor de π (aproximadamente 3.141592653589793)
console.log(Math.E);  // Exibe o valor de e (aproximadamente 2.718281828459045)
```

2. **Funções Trigonométricas**: O `Math` fornece funções trigonométricas como seno, cosseno e tangente, bem como suas inversas.

```javascript
var angulo = 45 * (Math.PI / 180); // Converte o ângulo para radianos
console.log(Math.sin(angulo));     // Calcula o seno do ângulo
console.log(Math.cos(angulo));     // Calcula o cosseno do ângulo
console.log(Math.tan(angulo));     // Calcula a tangente do ângulo
```

3. **Funções de Potência e Raiz**: O `Math` inclui funções para calcular potências, raízes quadradas e cubos.

```javascript
console.log(Math.pow(2, 3));   // Calcula 2 elevado à potência de 3 (2^3)
console.log(Math.sqrt(16));    // Calcula a raiz quadrada de 16
console.log(Math.cbrt(27));    // Calcula a raiz cúbica de 27
```

4. **Funções de Arredondamento e Truncamento**: O `Math` possui métodos para arredondar valores para o inteiro mais próximo, para cima, para baixo e para truncar valores decimais.

```javascript
console.log(Math.round(4.6));  // Arredonda para o inteiro mais próximo (5)
console.log(Math.ceil(4.3));   // Arredonda para cima (5)
console.log(Math.floor(4.9));  // Arredonda para baixo (4)
console.log(Math.trunc(4.7));  // Trunca para o valor inteiro (4)
```

5. **Funções de Aleatoriedade**: O `Math` inclui métodos para gerar números aleatórios.

```javascript
console.log(Math.random());    // Gera um número aleatório entre 0 (inclusive) e 1 (exclusivo)
```

Esses são apenas alguns exemplos das muitas funcionalidades oferecidas pelo objeto `Math` em JavaScript. Ele é extremamente útil para realizar uma ampla variedade de cálculos matemáticos em seus programas.



