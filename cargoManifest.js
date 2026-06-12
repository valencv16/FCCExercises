function normalizeUnits (manifest){
  let newManifest = {...manifest};
  if(newManifest.unit == "lb"){
     newManifest.weight = newManifest.weight * 0.45;
     newManifest.unit = "kg";
  }
 return newManifest;
}
console.log(normalizeUnits({ containerId: 68, destination: "Salinas", weight: 101, unit: "lb", hazmat: true }))

function validateManifest(manifest ){
  let newManifest = {...manifest};
  let wrongManifest ={}
  let missingInvalid = false;

  if (isEmpty(newManifest) == true){
      return wrongManifest
  }else{



  if (newManifest.containerId == null )
      wrongManifest.containerId = "Missing"
  else if (newManifest.containerId < 1) 
     wrongManifest.containerId = "Invalid"

  if (newManifest.destination == null ) 
      wrongManifest.destination = "Missing"
  else if (typeof newManifest.destination != "string")
      wrongManifest.destination = "Invalid"
  if (newManifest.weight == null ) 
      wrongManifest.weight = "Missing"
  if (newManifest.unit == null ) 
      wrongManifest.unit = "Missing"
  if (newManifest.hazmat == null ) 
      wrongManifest.hazmat = "Missing"
      else if(typeof newManifest.hazmat != "boolean")
       wrongManifest.hazmat = "Invalid"
  }
  
  
  


  return wrongManifest;
}

console.log(validateManifest({containerId: null, }))



