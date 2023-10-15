$( "#unirme" ).click(function() {
$('#exampleModal').modal('show')
  });

var Email=$('#email').val();
var Nombre=$('#nombre').val();
var Apellido=$('#apellido').val();
var Direccion=$('#direccion').val();
  
function validarform(){ //funcion para validar formulario


  	
  	if($('#email').val() == '' ){
        alert('Porfavor ingresar un email..');
        $('#email').focus();
        return false;
      }


  	if($('#nombre').val() == '' ){
        alert('Porfavor ingresar un nombre..');
        $('#nombre').focus();
        return false;
      }





  	if($('#ape').val() == '' ){
        alert('Porfavor ingresar un apellido..');
        $('#ape').focus();
        return false;
      }


if($('#direccion').val() == '' ){
        alert('Porfavor ingresar un direccion..');
        $('#direccion').focus();
        return false;
      }


  	if($('#telefono').val()== '' ){
        alert('Porfavor ingresar un telefono..');
        $('#telefono').focus();
        return false;
      }

  if($('#edad').val()== '' ){
        alert('Porfavor ingresar un edad..');
        $('#edad').focus();
        return false;
      }



if($('#disponibilidad').val()== '' ){
        alert('Porfavor especifica tu disponibilidad de horarios..');
        $('#disponibilidad').focus();
        return false;
    }



if($('#experiencias').val()== '' ){
        alert('Porfavor especifica tu experiencias de Repartidor..');
        $('#experiencias').focus();
        return false;
    }


if($('#porque').val()== '' ){
        alert('Porfavor especifica ¿por que quieres ser parte de este equipo?..');
        $('#porque').focus();
        return false;
    }


//file type validation
    $("#foto").change(function() {
        var file = this.files[0];
        var imagefile = file.type;
        var match= ["image/jpeg","image/png","image/jpg"];
        if(!((imagefile==match[0]) || (imagefile==match[1]) || (imagefile==match[2]))){
            alert('Selecciona una  imagen tipo (JPEG/JPG/PNG).');
            $("#foto").val('');
            return false;
        }
    });






return true;//si esta todo correcto devuelve true

}

$('#botonunirme' ).click(function() {

  if (validarform()) {//validar formulario
    $.post('solicitar.php',$("#formdata").serialize(), function(res) {
     if(res == 1 ) {$('#exampleModal').modal('hide');
     	    document.getElementById("formdata").reset();

     alert('Tu Solicitud fue enviada, uno de nuestros colaboradores se estara comunicando con tigo muchas gracias !');
   }
     else {alert('No se realizo el envio de tu solicitud intenta nuevamente ..');}
      /*optional stuff to do after success */
    });
  }
});



