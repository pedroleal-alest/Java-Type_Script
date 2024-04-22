function count(string) {
    let dict = {}  
    for (let item of string) {
        console.log(item)
        //console.log(Object.keys(dict))
        //console.log(dict)
        if (item in dict) {
            dict[item] += 1
        }
        else {
            dict[item] = 1
        }
    }

    return dict
  }

function count1(string) {  
var count = {};
string.split('').forEach(function(s) {
    count[s] ? count[s]++ : count[s] = 1;
});
return count;
}



console.log(count('abbcccddddfgg'))