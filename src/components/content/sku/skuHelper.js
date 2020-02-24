import {combination} from "../../../common/utils";

let allSku =[]



 function getAllSku(skus) {

   skus.forEach((item) =>{
     let tempAllSku = _getPotentialsku(item)
     allSku = allSku.concat(tempAllSku)
   })
   return Array.from(new Set(allSku.flat())) //多维变一维 ，然后去重
 }
 //通过单个sku获取所以潜在sku
 function _getPotentialsku(sku){
  let skuArray = sku.propPath.split(";")
   let potentialsku =[]
   //通过组合算法，获取潜在sku
   for(let i = 1 ; i<=skuArray.length ; i++ ){
     potentialsku.push(combination(skuArray,i).map( items => {
       return  items.join(";")
     }))
   }
   return potentialsku
 }


function seletedSku2propPath(seletedSku){
  let propPath = []
  for( let key in seletedSku) {
    let val = seletedSku[key]
    if (val)      propPath.push(key+":"+seletedSku[key].vid)
  }
  return propPath.join(";")
}





export {getAllSku,seletedSku2propPath}
