function pingPong (num){
 var arrayOfNums = [];
 var z = 1;
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
 	z++;
 }

	
}
$(function(event){
	$(".jumbotron").slideDown(600, function(){
		$("#leftsidebar").animate({width:'toggle'},600, function(){
			$("#content").fadeIn(1300);
			$(".main").fadeIn(1300);
			$("#header").fadeIn(1300);
		});
	});

	$("#submit").click(function(event){
		event.preventDefault();
		$("#resultT").text("");
		var number = parseFloat($("#number").val());
			

			$("#result").hide();
			$("#resultT").text("");

		
		if(Number.isInteger(number)){
			var result = pingPong(number);
			$("#result").fadeIn(2000);
		}else{
			$("#group").addClass("has-error");
		}	
	});
	
	$("#group").click(function(event){
		event.preventDefault();
		$("#group").removeClass("has-error");
	});
});





