function fearNotLetter(missingLetter){
  let missing ;
  let ltr = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let temp = missingLetter.split(''); 
  let firstIndex = ltr.indexOf(temp[0])
  let lastIndex = ltr.indexOf(temp[temp.length -1])

  let x = 0;
  for(let i = firstIndex; i < lastIndex ; i++){
    console.log(i,temp[x],ltr[i])
    if( temp[x] != ltr[i]){
        missing = ltr[i];
        break;
    }
     x++;
  }

  return missing ;
}

console.log(fearNotLetter("abcdefghjklmno"));
