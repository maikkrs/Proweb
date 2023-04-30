$(document).ready(function() {
    // Ocultar formulario al cargar la página
    $(".formulario").hide();
  
    // Mostrar formulario al hacer clic en "Agregar producto"
    $(".btn-agregar").click(function() {
      $(".formulario").show();
    });
  
    // Ocultar formulario al hacer clic en "Cancelar"
    $(".btn-cancelar").click(function() {
      $(".formulario").hide();
    });
  
    // Agregar producto al hacer clic en "Guardar"
    $(".btn-guardar").click(function(event) {
      // Prevenir que el formulario se envíe y la página se recargue
      event.preventDefault();
  
      // Obtener los valores del formulario
      var nombre = $("#nombre").val();
      var desc = $("#desc").val();
      var precio = $("#precio").val();
      var stock = $("#stock").val();
  
      // Validar que se ingresen valores válidos
      if (nombre == "" || desc == "" || precio == "" || stock == "") {
        alert("Por favor, ingrese todos los campos");
      } else if (isNaN(precio) || isNaN(stock)) {
        alert("Por favor, ingrese valores numéricos para Precio y Stock");
      } else {
        // Agregar el nuevo producto a la tabla
        var id = $("table tbody tr").length + 1;
        var nuevaFila = "<tr><td>" + id + "</td><td>" + nombre +  "</td><td>" + desc + "</td><td>$" + precio + "</td><td>" + stock + "</td><td><button class='btn btn-editar'>Editar</button><button class='btn btn-danger'>Eliminar</button></td></tr>";
        $("table tbody").append(nuevaFila);
  
        // Limpiar los campos del formulario
        $("#nombre").val("");
        $("#desc").val("");
        $("#precio").val("");
        $("#stock").val("");
  
        // Ocultar el formulario
        $(".formulario").hide();
      }
    });
  
    // Eliminar producto al hacer clic en "Eliminar"
    $("table").on("click", ".btn-danger", function() {
      $(this).closest("tr").remove();
    });

    

  });


  
  