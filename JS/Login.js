const btnSignIN = document.getElementById("sign-in"),
      btnSignUP = document.getElementById("sign-up"),
      formRegister = document.querySelector(".register"),
      formLogin = document.querySelector(".login");

btnSignIN.addEventListener("click", e => {
    formRegister.classList.add("hide");    // Al darle click en el boton de Iniciar Sesión se llama a la clase Hide y se va hacia arriba tal como se estableció en el CSS
    formLogin.classList.remove("hide");    // Al subir el Register, se le quita la clase hide a Login y al hacerlo, este baja y se visualiza en la pantalla
})


btnSignUP.addEventListener("click", e => {
    formLogin.classList.add("hide");    // Al darle click en el boton de Registrarse se llama a la clase Hide y se va hacia arriba tal como se estableció en el CSS
    formRegister.classList.remove("hide");    // Al subir el Login, se le quita la clase hide a Registrarse y al hacerlo, este baja y se visualiza en la pantalla
})


// Validacion
// if(window.location.href.indexOf('login') > -1){
  
//     //$("form input[name='date']").datetimepicker({   // Llamar a datetimepicker (Calendario con hora)
//       //dateFormat: 'dd-mm-yy'
//     //});

//     $("form input[name='fecha']").datepicker({   // Llamar a datepicker (Calendario sin hora)
//       format: 'yyyy-mm-dd'
//     });

//     $.validate({
//       lang: 'es'
//     });

// }  