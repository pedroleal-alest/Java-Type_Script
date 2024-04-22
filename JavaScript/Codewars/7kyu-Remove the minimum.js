function removeSmallest(numbers) {
    minnumb = Math.min(...numbers)
    let list = numbers.slice()
    list.splice(numbers.indexOf(minnumb),1)
    
    return list
  }