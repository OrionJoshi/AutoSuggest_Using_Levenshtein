// Levenshtein function

function levenshtein(str1, str2) {
  // setting a board
  const arr = [];
  const obj = {};
  for (let i = 0; i < str1.length + 1; i++) {
    const tempArray = [];
    for (let j = 0; j < str2.length + 1; j++) {
      tempArray.push(j);
    }
    tempArray[0] = i;
    arr.push(tempArray);
  }

  // fill the empty space in a board
  for (let i = 1; i < str1.length + 1; i++) {
    for (let j = 1; j < str2.length + 1; j++) {
      if (str1[i] === str2[j]) {
        arr[i][j] = arr[i - 1][j - 1];
      } else {
        arr[i][j] =
          Math.min(arr[i - 1][j - 1], arr[i - 1][j], arr[i][j - 1]) + 1;
      }
    }
  }
  const minCost = arr[str1.length][str2.length];
  obj[str2] = minCost;
  // return a minimum cost and a string
  return obj;
}
