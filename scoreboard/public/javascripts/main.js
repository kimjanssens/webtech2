$(document).ready(function() {
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
});