function chunkArrayInGroups(array, arrayLength){
  let group = [];
  let tempGrp = []

  for (let i =0 ; i < array.length; i++){

   if(i % arrayLength == 0 && i != 0){
     console.log(` ${i}: ${i % arrayLength == 0}`)
     group.push(tempGrp);
     tempGrp = [];
     tempGrp.push(array[i]);
   }else{
     tempGrp.push(array[i]);
   }
  }
  group.push(tempGrp);
  return group;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2) )
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) )