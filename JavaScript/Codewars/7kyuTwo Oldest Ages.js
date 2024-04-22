function twoOldestAges(ages){

    let final = []
    let maiornumb = Math.max(...ages)
    
    ages.splice(ages.findIndex(x => x === maiornumb) ,1 )

    let maiornumb2 = Math.max(...ages)
    
    if (maiornumb > maiornumb2) {
      final.push(maiornumb2)
      final.push(maiornumb)
    } else {
      final.push(maiornumb)
      final.push(maiornumb2)
    }

    return final
 }
 