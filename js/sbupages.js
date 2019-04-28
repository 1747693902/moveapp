
var uls = document.getElementById('lis4');
var lis = uls.children;
var lia = lis.children;
for(var i=0;i<lis.length;i++){
lis[i].addEventListener('tap',function(){
	for(var j=0;j<lis.length;j++){
	 		if(this==lis[j]){
					lis[j].className = "chooseA";      
	
	 		}else{
	 			lis[j].className= "";
	 		}
	 	}
	})
}