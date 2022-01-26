function stringy(int) {
  let result = '';
  let str = '1';
  
  do {
    result += str;
    str = str === '1' ? '0' : '1';
  } while (result.length < int);
  
  console.log(result);
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"