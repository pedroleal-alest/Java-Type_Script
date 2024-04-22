function openOrSenior(data){
    let final = []
    for (let par of data){
        if (par[0] >= 55 && par[1] > 7) {
            final.push('Senior')
        } else {
            final.push('Open')
        }
        console.log(par)
    }
    return final
}

const Arrow_openOrSenior = (data) => {
    let final = [];
    for (let par of data) {
        if (par[0] >= 55 && par[1] > 7) {
            final.push('Senior');
        } else {
            final.push('Open');
        }
    }
    return final;
};


console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))
//['Open', 'Senior', 'Open', 'Senior']