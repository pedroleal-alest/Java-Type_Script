# XML
## Intro
XML (Extensible Markup Language) é uma linguagem de marcação que é frequentemente usada para armazenar e transportar dados de forma estruturada. Em JavaScript, você pode trabalhar com XML de várias maneiras, principalmente usando o DOM (Document Object Model) e APIs específicas para manipulação de XML.

Aqui estão algumas maneiras de lidar com XML em JavaScript:

1. **DOM Parsing**: O DOM permite que você manipule a estrutura de um documento XML como uma árvore de nós. Você pode acessar e modificar elementos XML usando métodos como `getElementsByTagName`, `createElement`, `appendChild`, etc.

   Exemplo de como analisar XML usando DOM:
   ```javascript
   var parser = new DOMParser();
   var xmlDoc = parser.parseFromString(xmlString, "text/xml");
   var titles = xmlDoc.getElementsByTagName("title");
   ```

2. **XMLHttpRequest**: Você pode usar o objeto `XMLHttpRequest` para fazer solicitações HTTP assíncronas, incluindo solicitações para obter XML de um servidor.

   Exemplo de como obter XML de um servidor usando `XMLHttpRequest`:
   ```javascript
   var xhr = new XMLHttpRequest();
   xhr.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
           var xmlDoc = this.responseXML;
           // faça algo com xmlDoc
       }
   };
   xhr.open("GET", "documento.xml", true);
   xhr.send();
   ```

3. **Fetch API**: Uma alternativa moderna ao `XMLHttpRequest` é a Fetch API, que também pode ser usada para recuperar XML de um servidor.

   Exemplo de como obter XML de um servidor usando Fetch API:
   ```javascript
   fetch('documento.xml')
       .then(response => response.text())
       .then(xmlString => {
           var parser = new DOMParser();
           var xmlDoc = parser.parseFromString(xmlString, 'text/xml');
           // faça algo com xmlDoc
       })
       .catch(error => console.error('Erro:', error));
   ```

4. **XPath**: XPath é uma linguagem usada para localizar e selecionar elementos em um documento XML. Você pode usar a interface XPath do DOM para avaliar expressões XPath em documentos XML.

   Exemplo de como usar XPath em JavaScript:
   ```javascript
   var xpathResult = document.evaluate("//title", xmlDoc, null, XPathResult.ANY_TYPE, null);
   var titles = [];
   var titleNode = xpathResult.iterateNext();
   while (titleNode) {
       titles.push(titleNode.textContent);
       titleNode = xpathResult.iterateNext();
   }
   ```

Essas são apenas algumas das maneiras de trabalhar com XML em JavaScript. Dependendo das necessidades específicas do seu projeto, você pode escolher a abordagem mais adequada.
