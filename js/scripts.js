function pingpong (num){
 var arrayOfNums = [];
 var z = 1
 for(var i = 0; z < num+1; i++){
 	if(z%15 === 0){
 		arrayOfNums[i] = "PingPong";
 	}
 	else if(z%5 === 0){
 		arrayOfNums[i] = "Pong";
 	}
 	else if(z%3 === 0){
 		arrayOfNums[i] = "Ping";
 	}
 	else{
 		arrayOfNums[i] = z;
 	}
 	$("#resultT").append("<li>"+arrayOfNums[i]+"</li>");
 	z++
 }

	
}
$(function(event){
	$("#submit").click(function(event){
		event.preventDefault();
		var number = parseFloat($("#number").val());
			$("#resultT").text("");
		if(Number.isInteger(number)){
			var result = pingpong(number);
			$("#result").show();
		}else{
			$("#group").addClass("has-error");
		}	
	});
});




