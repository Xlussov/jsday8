function sumMinus(){
   const arr1 = [2,-5,-9,2,-4,5,34,-11,2,3,-4,5,-6,9]
   let max = -Infinity
   let min = Infinity
   let sum = 0
   const valAllMin = arr1.reduce((previousValue,value,index,arrray)=>{
      return value < 0 ? previousValue + value : previousValue
   },0)
   arr1.reduce((previousValue,value,index,arrray)=>{
      if(value > max){
         return max = value
      }else if(value < min){
         return min = value
      }
   },0)
   const maxIndex = arr1.findIndex(item => item === max)
   const minIndex = arr1.findIndex(item => item === min)
   if(maxIndex > minIndex){
      for(i = minIndex; i <= maxIndex; i++){
         sum = sum + arr1[i]
      }
   }else if(minIndex > maxIndex){
      for(i = maxIndex; i <= minIndex; i++){
         sum = sum + arr1[i]
      }
   }
   console.log(`Сумма відємних чисел = ${valAllMin}`);
   console.log(`Сумма між найбільшим і найменшим = ${sum}`);
}
// sumMinus()

function sumDoub(){
   const arr2 = [45,-65,48,52,-45,-78,-96,25,14,25,45]
   let max = -Infinity
   let min = Infinity
   let sum = 0
   const valAllDoub = arr2.reduce((previousValue,value,index,arrray)=>{
      return value % 2 == 0 ? previousValue + value : previousValue
   },0)
   console.log(valAllDoub);
   arr2.reduce((previousValue,value,index,arrray)=>{
      if(value > max){
         return max = value
      }else if(value < min){
         return min = value
      }
   },0)
   const maxIndex = arr2.findIndex(item => item === max)
   const minIndex = arr2.findIndex(item => item === min)
   if(maxIndex > minIndex){
      for(i = minIndex; i <= maxIndex; i++){
         sum = sum + arr2[i]
      }
   }else if(minIndex > maxIndex){
      for(i = maxIndex; i <= minIndex; i++){
         sum = sum + arr2[i]
      }
   }
   console.log(`Сумма парних чисел чисел = ${valAllDoub}`);
   console.log(`Сумма між найбільшим і найменшим = ${sum}`);
}

// sumDoub()

function maxVal(){
   const arr2 = [45,-65,48,52,-45,-78,-96,25,14,25,45]
   const arrLenth = arr2.length
   let max = -Infinity
   let min = []
   let sum = 0
   arr2.reduce((previousValue,value,index,arrray)=>{
      if(value > max){
         return max = value
      }
   },0)
   for(i = 0; i <= arrLenth; i++ ){
      if(arr2[i] < 0){
         min.push(i)
      }
   }
   let minK = min[0]
   for(i = 0; i <= minK; i++){
      console.log(i);
      sum = sum + arr2[i]
   }
   console.log(minK);
   const maxIndex = arr2.findIndex(item => item === max)
   console.log(`Максимальне число массива = ${max}`);
   console.log(`Сумма до першого відємного числа= ${sum}`);
}
// maxVal()


function sumArr(){
   let arrA = []
   for(i = 0; i < 100; i++){
      arrA.push(i)
      // arrA.push(Math.floor(Math.random() * 100) + 1);
   }
   const sum = arrA.reduce((previousValue,value,index,arrray)=>{
      return previousValue + value
   },0)
   console.log(sum);
}
// sumArr()


function sumUnDoub(){
   let arrB = []
   for(i = 0; i < 50; i++){
      arrB.push(i)
      // arrB.push(Math.floor(Math.random() * 100) + 1);
   }
   const sum = arrB.reduce((previousValue,value,index,arrray)=>{
      return value % 2 !== 0 ? previousValue + value : previousValue
   },0)
   console.log(sum);
}

// sumUnDoub()

function minVal(){
   let arrC = []
   let min = Infinity
   let arrMinIndex = []
   for(i = 0; i < 50; i++){
      // arrC.push(i)
      arrC.push(Math.floor(Math.random() * 100) + 1);
   }
   const sum = arrC.reduce((previousValue,value,index,arrray)=>{
      if(value < min){
         return min = value
      } 
   },0)
   let c = arrC.findIndex((item)=> item === min)
   arrMinIndex.push(c)
   console.log(arrC[arrMinIndex]);
}
// minVal()