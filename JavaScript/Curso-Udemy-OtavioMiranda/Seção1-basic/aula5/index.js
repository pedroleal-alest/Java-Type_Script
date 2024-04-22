var number=function(array){
    if (array === None) {
        return []
    }
    let final = [] 
    for (let i = 1; i < array.lenth ; i++){
        final.push("${i}: ${array[i-1]}")

    }
    return final
}

console.log()