String.prototype.camelCase=function(){
  if (this.toString() === ""){
    return ""
  }

  list = []

  for (let letra of this.split(" ")){
    let let1 = letra[0].toUpperCase() + letra.slice(1,letra.length)
    list.push(let1)
  }

  return list.join("")
}


console.log("teste case".camelCase())

//String.prototype.camelCase=function(){
//  return this.split(' ').map(w => w.slice(0, 1)
//                        .toUpperCase() + w.slice(1)).join('');
//  }