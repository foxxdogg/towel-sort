
// You should implement your task here.

module.exports = function towelSort (matrix) {

    let result = [];

    if(matrix === undefined) return [];
    
    matrix.forEach((el, index) => {
        if(index % 2 === 0) {
        el.forEach(element => result.push(element))
        } else {el.sort((a, b) => b - a).forEach(element => result.push(element))}
    })

    return result;
}
