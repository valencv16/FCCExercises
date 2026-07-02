function repeatStringNumTimes(string, repeatBy){
  let repeatedString ='';

  for (let i = 0 ; i < repeatBy ; i++){
    repeatedString += string;
  }
  
  return repeatedString ;
}