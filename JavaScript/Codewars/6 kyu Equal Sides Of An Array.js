function findEvenIndex(arr) {
    let sumtotal = (arr.reduce((acc,cur) => acc+ cur, 0));

    console.log(sumtotal);
        
    for (let i = 0; i < arr.length; i++) {
        let leftSum = arr.slice(0, i).reduce((acc, curr) => acc + curr, 0);
        let rightSum = arr.slice(i + 1).reduce((acc, curr) => acc + curr, 0);
        if (leftSum === rightSum) {
            return i;
        }
        else if (i == 1 && sumtotal == arr[0]){
            return 0
        }
        else if (i == arr.length-1 && sumtotal == arr[arr.length-1]){
            return i
        }

    }
    return -1; // Se nenhum índice for encontrado
}

console.log(findEvenIndex([10,-80,10,10,15,35,20]))