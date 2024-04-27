function rot13(message){
    const abc = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let str = ''
    
    for (let letra of message) {
      if (!abc.includes(letra.toLowerCase())){
            str = str + letra
            continue
      }
        
      let indexl =  abc.indexOf(letra.toLowerCase())
        
      if (indexl < 13) {
        if(letra == letra.toLowerCase()) {str = str + abc[indexl+13]}
        
        else {str = str + abc[indexl+13].toUpperCase()}
      }
      else {
        if(letra == letra.toLowerCase()) {str = str + abc[indexl-13]}
        
        else {str = str + abc[indexl-13].toUpperCase()}
      }
    }

    return str
}