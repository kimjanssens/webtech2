$(document).ready(function() {
	/* 
	$(".increase").click(function(e){

		var id = $(this).data("id");
		var type = $(this).data("type");
		var value = $(this).data("value");

		$.ajax({
			type: "post",
			data: {
				Id:id,
				Type:type,
				Value:value
			},
			url: "../vote",
			dataType: "json"
		})
		.done(function(msg){
			console.log('great succes!');
			console.log('body: ' + msg);
		});
		e.preventDefault();
	});
*/
});

function newMatch(){
	var errors = false;

	if(document.getElementById("country1").value==""){
		document.getElementById("country1").style.border = "solid red";
		errors=true;
	}else{
		document.getElementById("country1").style.border = "none";
	}

	if(document.getElementById("country2").value==""){
		document.getElementById("country2").style.border = "solid red";
		errors=true;
	}else{
		document.getElementById("country2").style.border = "none";
	}

	if(errors==false){
		document.forms["create"].submit();
	}
}

function newFeed(){
	var errors = false;

	if(document.getElementById("feed").value==""){
		document.getElementById("feed").style.border = "solid red";
		errors=true;
	}else{
		document.getElementById("feed").style.border = "none";
	}

	if(errors==false){
		document.forms["updates"].submit();
	}
}