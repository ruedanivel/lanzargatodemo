



var rt= 'primera';

function Inicio()
{

	if ( rt == 'primera' ){

		$('#IMG > .primera').css("visibility", "hidden");
		$('#IMG > .a').css("visibility", "hidden");
		$('#IMG > .b').css("visibility", "hidden");


		CargarIMG('primera');

		rt = 'a'


	}else if ( rt == 'a'){

		$('#IMG > .primera').css("visibility", "hidden");
		$('#IMG > .b').css("visibility", "hidden"); 

		$('#IMG > .' + rt).css("visibility", "visible"); // mostrar

		CargarIMG('b');

		rt = 'b'

	
	}else if ( rt == 'b'){

		$('#IMG > .primera').css("visibility", "hidden"); 
		$('#IMG > .a').css("visibility", "hidden");

		$('#IMG > .' + rt).css("visibility", "visible"); // mostrar

		CargarIMG('a');

		rt = 'a'


		
	}


}

function CargarIMG(rr)
{

	$('#load > .load').attr('src','images/cargando.gif'); // Circulo

	$.ajax({
		url:'http://regalopeliculas.16mb.com/app/lanzaGato.php',
		type:'post',
		success:  function (response) {
		
			$('#IMG > .' + rr ).attr('src',response);
 
		}
	});

}

function ImgOnload(rr)
{

	$('.load').css("visibility", "hidden");
	$('#IMG > .primera').css("visibility", "visible");

	CargarIMG('a');

}


