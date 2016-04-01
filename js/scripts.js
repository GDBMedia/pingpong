function pingpong (num){


	
}




$(function(event){
	$("#submit").click(function(event){
		event.preventDefault();
		var number = parseFloat($("#number").val());

		if(Number.isInteger(number)){
			var result = pingpong(number);
			$("#result").show();
			$("#resultT").text(result);

		}else{
			alert("you're an idiot");
		}
		

		
	});
});





