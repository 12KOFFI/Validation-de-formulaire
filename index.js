  export  function min(array) {
    let min = array[0]
    for (let i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i]
        }
    }
    return min
    
}