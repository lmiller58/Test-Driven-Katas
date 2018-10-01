function wrap(string, column) {
  let brokenString = '';
  if (column >= string.length) brokenString = string;
  else {
    let wordArr = string.split(' ');
    let currLineLength = 0;
    let currLine = [];

    for (let i = 0; i < wordArr.length; i++) {
      let currWord = wordArr[i];
      console.log(currWord);
      if (currLineLength + currWord.length + (currLine.length - 1) < column) {
        currLine.push(currWord);
        currLineLength += currWord.length;
        console.log(currLine);
      } else {
        brokenString += currLine.join(' ') + '\n';
        currLine = [currWord];
        currLineLength = currWord.length;
      }
      if (i === wordArr.length - 1) {
        brokenString += currLine.join(' ');
        console.log(brokenString);
      }
    }
  }
  console.log(brokenString);
  return brokenString;
}

module.exports = wrap;
