function shufflesort(arr, objectProp){
    // validate arr is Array
    if(!Array.isArray(arr)){
        console.error('RandomSort Error: You are not sorting a array')
        return arr
    }
 
    //shuffle
    var tempArr = []
    for(var i=0;i<arr.length;i++){
      
        do{
            var exist = false
            var num = Math.floor(Math.random() * arr.length)
            if(tempArr.indexOf(num) != -1){     
                exist = true
            }else{
                tempArr.push(num)
            }
        }while(exist)
    }
    var tempArr2 = []
    for(var i = 0; i < arr.length; i++){
        tempArr2[i] = arr[tempArr[i]]
    }
   return tempArr2

}