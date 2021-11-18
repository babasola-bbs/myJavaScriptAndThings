function longestWord(sentence) {
    
    const wordArr = sentence.toLowerCase().match(/[a-z0-9]+/g);

    const sorted = wordArr.sort((a, b) => b.length - a.length);
  
    const longestWordArr = sorted.filter(
      word => word.length === sorted[0].length
    );
  
    if (longestWordArr.length === 1) {
      return longestWordArr[0];
    } 
    else {
      return longestWordArr;
    }
  }

  console.log(longestWord('Wade In The Water, Children God\'s Gonna Trouble The Waters'))