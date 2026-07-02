const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
  { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge"
];

function parseShipment(rawData){
  let arrayTemp = [];
  let tempRawData ={}
  let id = '';

  for (let i = 0; i < rawData.length; i++ ){
      tempRawData = rawData[i].split("|");
       id = arrayTemp.findIndex(u => u.sku == tempRawData[0])
    if(id == -1){
      let temp ={ sku:'', name:'', qty:0, expires:'', zone:'general' };
      temp.sku = tempRawData[0]; 
      temp.name = tempRawData[1]; 
      temp.qty = parseInt(tempRawData[2]); 
      temp.expires = tempRawData[3]; 
      if (tempRawData[4] != undefined){
         temp.zone = tempRawData[4]; 
      }
      arrayTemp.push(temp)
      
    } 
    
  }
  return arrayTemp;
}

function planRestock (pantry ,shipment){

  let action='';
  let tempArray =[];
  for(let i =0; i< shipment.length ;i++){
    let stock = {type:'', item:''};
    let sku =shipment[i].sku;
    let foundSku = pantry.findIndex(id => id.sku == sku)
    if(foundSku != -1){
       if(shipment[i].qty <= 0){
          action = 'discard'
       }else{
         action = 'restock'
       }
    }else{
      if(shipment[i].qty <= 0)
          action = 'discard'
      else
        action ='donate';
    }
    stock.item = shipment[i];
    stock.type = action;
    tempArray.push(stock)
  }

  return tempArray;
}

planRestock (pantry ,parseShipment(rawData))

function groupByZone (actions){
  let zone ={fridge: [], pantry :[]};
  let tempFridge = actions.filter(action => action.item.zone == 'fridge');
  let tempPantry = actions.filter(action => action.item.zone == 'pantry');

 
  zone.fridge = tempFridge;
  zone.pantry = tempPantry;

  return zone
}


function clonePantry(pantry){
 let newPantry = structuredClone(pantry);


 return  newPantry;
} 
console.log(groupByZone(planRestock (pantry ,parseShipment(rawData))))


