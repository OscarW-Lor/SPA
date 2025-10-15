$(document).ready(function(){
    
    function mostrarSeccion(id) {
        $("section").removeClass("active").hide(); 
        $("#" + id).fadeIn().addClass("active"); 
    }


    $("#btnInicio").click(function() {
        mostrarSeccion("inicio");
    });

    $("#btnPeliculas").click(function() {
        mostrarSeccion("peliculas");
    });

    $("#btnContacto").click(function() {
        mostrarSeccion("contacto");
    });

    
    mostrarSeccion("inicio");
});