function reverseWords(string){
  // reverse every word in the string
  // return the new string

  var wordsArr = string.split(' ');
  var reversedWordsArr = [];

  wordsArr.forEach(word => {
    var reverseWord = '';
    for(var i = word.length -1; i >= 0; i--) {
      reverseWord += word[i];
    }
    reversedWordsArr.push(reverseWord);
  })

  return reversedWordsArr.join(' ');
}

reverseWords('this is a string of words');
// => 'siht si a gnirts fo sdrow'

reverseWords('Coding Javascript');
// => 'gnidoC tpircsavaJ
'