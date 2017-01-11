module.exports= function findMissing(arr1,arr2){
	var missing=0;
if (arr1.length===0 && arr2.length===0){
	return 0;
}	

if(arr1.length == arr2.length){    
    return 0;
}

else {
    for (var i=0; i<arr2.length; i++){
    var exists=false;
    	for (var j=0; j<arr1.length; j++){
    		if (arr2[i]==arr1[j]){
                exists=true;
    			
    		}
    	}
        if (exists==false ){ 
        	missing=arr2[i];
        }
   }
}
return missing;
	
}
