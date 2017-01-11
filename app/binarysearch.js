
Array.prototype.toTwenty= function(){
	var result = [];
	for (var i=1; i<=20; i++){
		result.push(i);
	}
	return result;
}

Array.prototype.toForty= function(){
var result = [];
	for (var i=2; i<=40; i+=2){
		result.push(i);
	}
	return result;
}   

Array.prototype.toOneThousand= function(){
var result = [];
	for (var i=10; i<=1000; i+=10){
		result.push(i);
	}
	return result;
}  

Array.prototype.search= function(number){ 
var result = {};
var count=0;
var min = 0;
    var max = this.length - 1;
    var mid;

    while(min <= max) {
        mid = Math.floor((max + min) / 2);

        if (this[mid] === number) {
            result['count']=count;
            result['index']=mid;
            result['length']=this.length;
            return result;
        }
        else if (this[mid] < number) {
            min = mid + 1;
        }
        else {
            max = mid - 1;
        }
     count++;
    }
    result['count']=0;
    result['index']=-1;
    result['length']=this.length;
return result;
}
