function findLongestWordLength(sentence){
  let longestCounter = 0;
  let letterCounter = 0;
  let words = sentence.split(" ");

  for(const char of words){
    letterCounter=0
      for(const chr of char){
        letterCounter ++;
      }
      if(letterCounter>longestCounter){
        longestCounter = letterCounter
      }
  }

  return longestCounter; 
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))