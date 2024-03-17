$(document).ready(function(){
  
  //Slider
  $('.topologia').bxSlider({
    mode: 'fade',
    captions: false,
    slideWidth: 1700,
    responsive: true
  });


  // Post
  var posts = [
    {
      tittle: 'Objetivo',
      date: 'Publicado el día ' + moment().format("dddd ") + moment().date() + ' de ' + moment().format('MMMM ') + 'del ' + moment().format("YYYY"),
      content: 'Esta página se hizo con el propósito de realizar una prueba en AWS con el fin de que se haga uso de la herramienta y se observe el funcionamiento de esta.'
    },
    {
      tittle: 'Yanfri decente',
      date: 'Publicado el día ' + moment().format("dddd ") + moment().date() + ' de ' + moment().format('MMMM ') + 'del ' + moment().format("YYYY"),
      content: '<br> <video id="yanfri" width="600" height="350" controls> <source src="Videos/Yanfri.mp4" type="video/mp4"></video> </br>'
    },
    {
      tittle: 'Video',
      date: 'Publicado el día ' + moment().format("dddd ") + moment().date() + ' de ' + moment().format('MMMM ') + 'del ' + moment().format("YYYY"),
      content: '<a id="descarga" href="Descargas/Fuicioso.mp4" download="Fuicioso">Descargar video</a>',
    },
    {
      tittle: 'Cerrar Sesión',
      date: 'Para iniciar sesión con una nueva cuenta, por favor da click en el boton cerrar sesión',
      content: '<p id="usuario"> Bienvenido!!</p>',
      content: '<input type="button" value="Cerrar Sesión" id="exit"></input>',
    },

    // {
    //   tittle: 'Imagen',
    //   date: 'Publicado el día ' + moment().format("dddd ") + moment().date() + ' de ' + moment().format('MMMM ') + 'del ' + moment().format("YYYY"),
    //   content: '<a id="descargas" href="Descargas/velocidades.jpg" download="Velocidades">Descargar imagen</a>',
    // },

    
    /*{ // Esta es otra forma de obtener la fecha exacta y no requiere de librerias
      tittle: 'Prueba 5',
      date: new Date(),
      content: 'Duis urna nisi, porttitor quis turpis ut, semper mattis nunc. Quisque nec tincidunt neque. Pellentesque facilisis, odio quis feugiat lobortis, nibh felis congue enim, ac iaculis metus nisi sit amet ligula. Mauris eget sagittis tellus. Nam felis tellus, dignissim quis risus at, faucibus luctus est. Duis nec suscipit nibh. Proin varius mauris tellus, non ultricies velit finibus eget. Sed vitae facilisis velit.'
    },*/
  ];


    //console.log(posts)    // Con esto se puede ver la fecha en la consola del navegador

    

  posts.forEach((item, index) => {
    var post = `
      <article class="post">
        <h2>${item.tittle}</h2>
        <span class="date">${item.date}</span>
        <p>
          ${item.content}
        </p>
      </article>
    `;    

    //console.log(post);  // Muestra la plantilla en la consola del navegador
    $("#posts").append(post);

  });


  // Descarga de archivos  
  // Video
  $("#descarga").click(function(e) {
    e.preventDefault()
    $.ajax({
      url: 'PHP/download.php', 
      type: 'post', 
      data: {},
      success: function(response){
        console.log(response)
        if (response == '0'){
          window.location.href = "login.html";
          // $("#exit").hide();
        }
        else{
          var videoUrl = e.target.href;
          var a = document.createElement('a');
          a.href = videoUrl;
          a.download =  e.target.download;
          a.style.display = 'none';
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(videoUrl);
          // var usuario_parrafo = $("#usuario p");
          // usuario_parrafo.html("<hr><strong>Hola " + user_name + ", gracias por visitar la página<strong>");
          // usuario_parrafo.append('<input type="button" value="Cerrar Sesión" id="logout"></input>'); // Mostrar botón de cerrar sesión
          // $("#exit").click(function(e){
          //   window.location.href = "PHP/logout.php";
          // })
        }
      },
      error: function(x, status, error){
        console.log(error)
      }
    })
  })
  
  $("#exit").click(function(e){
    window.location.href = "PHP/logout.php";
  })

  // var user_name; // Definir la variable fuera del ámbito de la función submit

  // if (window.location.href.indexOf('login') > -1) {
  //     $("#user_name").submit(function(event) {
  //         event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
  
  //         // Obtener los valores de los campos del formulario
  //         user_name = $("#user_name").val(); // Asignar el valor a la variable user_name
  //         // No necesitas retornar user_name aquí, ya que es una variable global
  //     });
  
  //     // Definir la función de solicitud AJAX fuera de la función submit
  //     $("#user_name").submit(function(event) {
  //         // Realizar una solicitud AJAX para autenticar al usuario
  //         $.ajax({
  //             type: "post",
  //             url: "PHP/create.php", // Ruta a script PHP que maneja la autenticación
  //             data: {
  //                 nombre: user_name,
  //             },
  //             success: function(response) {
  //                 // Manejar la respuesta del servidor
  //                 if (response === "success") {
  //                     // Si la autenticación es exitosa, mostrar un mensaje de bienvenida
  //                     var usuario_parrafo = $("#usuario p");
  //                     usuario_parrafo.html("<hr><strong>Hola " + user_name + ", gracias por visitar la página<strong>");
  //                     usuario_parrafo.append('<input type="button" value="Cerrar Sesión" id="logout"></input>'); // Mostrar botón de cerrar sesión
  
  //                     // Ocultar el formulario de inicio de sesión
  //                     // $("#login").hide();
  
  //                     // Manejar el evento de cerrar sesión
  //                     $("#logout").click(function() {
  //                         // Realizar una solicitud AJAX para cerrar la sesión en el servidor si es necesario
  //                         // Limpiar la sesión del servidor si es necesario
  //                         // Una vez que la sesión está limpiada en el servidor, puedes recargar la página
  //                         location.reload();
  //                     });
  //                 } else {
  //                     // Si la autenticación falla, mostrar un mensaje de error o redirigir a otra página
  //                     alert("Error de inicio de sesión: " + response);
  //                     $("#exit").hide(); // Esconder boton de cerrar sesión
  //                 }
  //             },
  //             error: function(xhr, status, error) {
  //                 // Manejar errores de la solicitud AJAX
  //                 console.error("Error al enviar la solicitud AJAX: " + error);
  //             }
  //         });
  //     });
  // }


  // Selector de tema
  var theme = $("#theme");
  $("#to-green").click(function(){
    theme.attr("href", "css/Green.css");
  });

  var theme = $("#theme");
  $("#to-red").click(function(){
    theme.attr("href", "css/Red.css");
  });

  var theme = $("#theme");
  $("#to-blue").click(function(){
    theme.attr("href", "css/Blue.css");
  });

  // Scroll para ir arriba en la web
  $('.subir').click(function(evento){
    evento.preventDefault();

    $('html, body').animate({
      scrollTop: 0
    }, 500);

    return false;
  });


  // Login falso

  // $("#login form").submit(function(){
  //   var form_name = $("#form_name").val();

  //   localStorage.setItem("form_name", form_name);

  // });

  // var form_name = localStorage.getItem("form_name");

  // if(form_name != null && form_name != "undefined"){
  //   var usuario_parrafo = $("#usuario p");

  //   usuario_parrafo.html("<hr><strong>Hola " + form_name + ", gracias por visitar la página" + "<strong>"); 
  //   usuario_parrafo.append("<a href='#' id='logout'> <br>Cerrar sesión </br></a>");

  //   $("#login").hide();

  //   $("#logout").click(function(){
  //     localStorage.clear();
  //     location.reload();
  //   });
  // }


// Reloj

  setInterval(function(){                // Permite ejecutar cada segundo el código
      var reloj = moment().format("hh:mm:ss a");
      $('#reloj').html(reloj);
  }, 1000)    


  // $("#exit").hide();


  //
  // $("#descargas").click(function(e) {
  //   e.preventDefault()
  //   $.ajax({
  //     url: 'PHP/download.php', 
  //     type: 'post', 
  //     data: {},
  //     success: function(response){
  //       console.log(response)
  //       if (response == '0'){
  //         window.location.href = "login.html";
  //       }
  //       else{
  //         var imageUrl = e.target.href;
  //         var a = document.createElement('a');
  //         a.href = imageUrl;
  //         a.download =  e.target.download;
  //         a.style.display = 'none';
  //         document.body.appendChild(a);
  //         a.click();
  //         window.URL.revokeObjectURL(imageUrl);
  //       }
  //     },
  //     error: function(x, status, error){
  //       console.log(error)
  //     }
  //   })
  // })  
  // $("#exit").click(function(e){
  //   window.location.href = "PHP/logout.php";
  // })

});
