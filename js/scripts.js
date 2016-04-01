function pingPong (num){
	performance.now()
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
	$("body")
	.queue(function(next){
		$(".jumbotron").addClass("animated")
		next();
	}).queue(function(next){
		$("#header").addClass("animated");
		next();
	}).queue(function(next){
		$("#leftsidebar").addClass("animated");
		next();
	}).delay(800).queue(function(next){
		$("#content").show();
		$("#content").addClass("animated");
		next();
	}).queue(function(next){
		$(".main").show();
		$(".main").addClass("animated");
		next();
	});

	$("#submit").click(function(event){

		event.preventDefault();
		$("#resultT").text("");
		$("#result").removeClass("lightSpeedIn");
		$("#result").removeClass("animated");
		var number = parseFloat($("#number").val());
			

			$("#result").hide();
			$("#resultT").text("");

		
		if(Number.isInteger(number)){
			console.log("start function");
			var start = +new Date();  // log start timestamp
			var result = pingPong(number);
			var end =  +new Date();  // log end timestamp
			var diff = end - start;
			console.log(diff);
			$("#result").show();
			$("#result").addClass("lightSpeedIn");
			$("#result").addClass("animated");
		}else{
			$("#group").addClass("has-error");
		}	
	});
	
	$("#group").click(function(event){
		event.preventDefault();
		$("#group").removeClass("has-error");
	});
});





