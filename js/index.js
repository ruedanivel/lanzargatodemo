

function lanzaPeli1() 
{

	$('#IMG > .IMG').attr('src','');

	$.post("http://regalopeliculas.16mb.com/app/lanzaGato.php",                	      		 
		   {
			   nombre:"holaa",
		
		   },
		   
		   function(data){
					
			$('#IMG > .IMG').attr('src',data);
				 
		});

}

var rt= '';

function ReadIMG_primera()
{
	$('#boton').attr("disabled", true);
	
	if (rt == '' ) {
		
		 $('#load > .load').attr('src','http://www.decovending.com/img/cargando.gif');
		 
		 $('#load > .load').css("display", "block");
		 
		 $('#IMG > .primera').css("display", "none");
		 $('#IMG > .a').css("display", "none");
		
		$.ajax({
			url:'http://regalopeliculas.16mb.com/app/lanzaGato.php',
			type:'post',
			success:  function (response) {
				
			   $('#IMG > .primera').attr('src',response);
			   
			}
			});
			
	}else{
			
		if ( rt == '1' ) {
			
			rt = '2';
			
			$('#IMG > .a').css("display", "block");
			
			$('#IMG > .primera').css("display", "none");
			$('#IMG > .b').css("display", "none");
			
			ReadIMG();
			
		}else if ( rt == '2' ) {
			
			rt = '1'; 
			
			$('#IMG > .a').css("display", "none");
			
			$('#IMG > .b').css("display", "block");
			
			ReadIMG();
			
		}
		

	
	}
	
}


function ReadIMG()
{

	
	if ( rt == '1' ) {

		$.ajax({
       	url:'http://regalopeliculas.16mb.com/app/lanzaGato.php',
        type:'post',
        success:  function (response) {
			
           $('#IMG > .a').attr('src',response);

        }
        });
		
	}else if ( rt == '2' ) {
		
		$.ajax({
       	url:'http://regalopeliculas.16mb.com/app/lanzaGato.php',
        type:'post',
        success:  function (response) {
			
           $('#IMG > .b').attr('src',response);
		   
        }
        });
		
	}
	
	
}



function ImgOnload()
{	

	$('#boton').attr("disabled", false);
	
	$('#IMG > .primera').css("display", "block");
	
	$('#load > .load').css("display", "none");
	
	rt = '1'
	
	ReadIMG();
	
}

function ImgOnLoad_a_b()
{
	
	$('#boton').attr("disabled", false);
	
}













