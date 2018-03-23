function bbsort(array,objectProp,method){

    method===undefined?method=objectProp:method;

    //check param is array
    var isArray = Array.isArray(array)
    if(!isArray){
        console.error('BBSort Error : You are not sorting a array')
        return array
       
    }else{
       if(objectProp===undefined){
            if(method===undefined){

                for(var i=0;i<array.length;i++){

                        for(var j=0;j<array.length;j++){

                            if(array[j]>array[j+1]){

                                var temp = array[j];
                                array[j] = array[j+1];
                                array[j+1] = temp;

                            }

                        }

                }
                }else if(method==='-1'){

                    if(method===undefined){
                        
                                for(var i=0;i<array.length;i++){
                        
                                        for(var j=0;j<array.length;j++){
                        
                                            if(array[j+1]>array[j]){
                        
                                                var temp = array[j];
                                                array[j] = array[j+1];
                                                array[j+1] = temp;
                        
                                            }
                        
                                        }
                        
                                }
                        }
                }
        //3 params
        }else{
           
            if(method===undefined){
                for(var i=0;i<array.length;i++){
                    
                     for(var j=0;j<array.length-1;j++){
                       
                          
                         if(array[j][objectProp]>array[j+1]['a']){
                          
                             var temp = array[j];
                             array[j] = array[j+1];
                             array[j+1] = temp;
     
                         }
                      
                     }
     
                 }
            }else if(method===-1){
                for(var i=0;i<array.length;i++){
                    
                     for(var j=0;j<array.length-1;j++){
                       
                          
                         if(array[j+1][objectProp]>array[j]['a']){
                          
                             var temp = array[j];
                             array[j] = array[j+1];
                             array[j+1] = temp;
     
                         }
                      
                     }
     
                 }
            }

        }
        return array;
    }
}

