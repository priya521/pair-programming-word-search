const transpose = function(matrix) {
    let results = [];
    for (let k = 0; k < matrix[0].length; k++) {
      results.push([]);
    }
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        // console.log(matrix[i][j], j, i);
        results[j].push(matrix[i][j]);
      }
    }
    return results;
  };

const wordSearch = (letters, word) => { 
    let output = false;
    if (letters.length === 0) {
        return output;
    }
    if (word === "") {
        return output;
    }
    const horizontalJoin = letters.map(ls => ls.join(''))
    const transposed = transpose(letters);
    const verticleJoin = transposed.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            output = true;
        }
    }

    for (vl of verticleJoin) {
        if (vl.includes(word)) {
            output = true;
        }
    }
    return output;
}

module.exports = wordSearch