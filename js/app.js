var r=100, g=100, b=100;

$(document).ready( function(){
	alert('Bonjour! la couleur de la journée est Bleu ');
	
	$('#rValue').on("change mousemove", function(){
		r = $(this).val();		
		$('#body').css({'background-color': 'rgb('+ r + ', ' +  g + ', ' + b +')'});
		console.log(r);
	});

	$('#gValue').on("change mousemove", function(){
		g = $(this).val();		
		$('#body').css({'background-color': 'rgb('+ r + ', ' +  g + ', ' + b +')'});
		console.log(g);
	});

	$('#bValue').on("change mousemove", function(){
		b = $(this).val();		
		$('#body').css({'background-color': 'rgb('+ r + ', ' +  g + ', ' + b +')'});
		console.log(b);
	});
})