function sumPairs(ints, s) {
    let pont = 0
    let pont2 = 1
    list = []
    let currp = Number.MAX_VALUE

    while (pont < ints.length-1) {
        if (ints[pont] + ints[pont2] == s){
            if (pont2 < currp){
                list[0] = ints[pont]
                list[1] = ints[pont2]
                currp = pont2
            }
        }
        if(pont2 == ints.length-1){
            pont2 = pont+1
            pont += 1
        }
        pont2 += 1  
    }
    if (list.length == 0) {return undefined}
    return list
}

//console.log(sumPairs([10, 5, 2, 3, 7, 5], 10)) //== [3,4]
console.log(sumPairs([1, 2, 3, 4, 1, 0], 2)) //== [ 1, 1 ]
//console.log(sumPairs([[20, -13, 40]], -7)) //== [ 1, 7 ]

