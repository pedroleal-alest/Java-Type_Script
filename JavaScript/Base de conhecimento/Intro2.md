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
