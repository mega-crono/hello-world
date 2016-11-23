// JavaScript Document
$(document).ready(function(){
    $("#botonEnviar").click(function(){
        $.post(
            "mensaje.php",
            {
                nombre: $("#nombre").val(),
                correo: $("#correo").val(),
                telefono: $("#telefono").val(),
                mensaje: $("#mensaje").val()
            },
            function(data){
                $("#resultado").html(data);
            }
        );
    });
});