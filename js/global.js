$(window).on('load',function(){
	$('.preloader').addClass('complete');
});

$(document).ready(function(){
	// Validações

    $('#phone').mask("(99) 9999-99999");
	$('#data_nasc').mask("99/99/9999");
	$('#cep').mask("99999-999")

});

function clearFilters(){
	$('#generos').prop('selectedIndex',0);
	$('#plataforma').prop('selectedIndex',0);
	$('#preco').prop('selectedIndex',0);
}

function showKey(id){
	$('#'+id).text("ADIHQ-6FXI6-3P77C");
	
}
function sendForm(){
		var arrayinput = document.getElementsByTagName("input");
		var cont = 0;
		for (var i = 1 ; i<arrayinput.length ; i++) {
		if (!arrayinput[i].value) {	
			cont++;
		}
		}

		if (cont) {
				//alert("Preencha todos os campos !");
				$("#danger-alert").show();
		}else{
				$("#danger-alert").hide();
				$("#success-alert").show();
		}
	}

function toggleFunction(){
	var x = document.getElementById("navbarCollapse");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}