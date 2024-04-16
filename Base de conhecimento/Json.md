# JSON

## Intro

JSON (JavaScript Object Notation) é um formato leve de troca de dados que é fácil para humanos lerem e escreverem, e também é fácil para máquinas interpretarem e gerarem. Em JavaScript, JSON é usado comumente para enviar e receber dados entre um servidor e um navegador da web.

JSON é basicamente uma coleção de pares de chave/valor. Aqui está um exemplo simples de um objeto JSON em JavaScript:

```javascript
{
  "nome": "João",
  "idade": 30,
  "cidade": "São Paulo"
}
```

Neste exemplo, temos um objeto com três pares de chave/valor: "nome", "idade" e "cidade". Cada chave é uma string e cada valor pode ser de qualquer tipo de dado suportado pelo JSON, como string, número, booleano, array, ou até mesmo outro objeto JSON.

Para acessar os valores de um objeto JSON em JavaScript, você pode usar a notação de ponto ou a notação de colchetes. Aqui está um exemplo:

```javascript
let pessoa = {
  "nome": "João",
  "idade": 30,
  "cidade": "São Paulo"
};

console.log(pessoa.nome); // Saída: João
console.log(pessoa['idade']); // Saída: 30
```

Além disso, em JavaScript, você pode converter facilmente entre objetos JavaScript e strings JSON usando os métodos `JSON.stringify()` e `JSON.parse()`. Por exemplo:

```javascript
let pessoa = {
  "nome": "João",
  "idade": 30,
  "cidade": "São Paulo"
};

let jsonTexto = JSON.stringify(pessoa);
console.log(jsonTexto); // Saída: {"nome":"João","idade":30,"cidade":"São Paulo"}

let objetoPessoa = JSON.parse(jsonTexto);
console.log(objetoPessoa.nome); // Saída: João
```

Isso é uma visão geral básica do JSON em JavaScript. Ele é amplamente utilizado em aplicativos da web para enviar e receber dados estruturados entre o cliente e o servidor.
