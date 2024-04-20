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


