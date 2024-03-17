$(document).ready(function(){
  // Acordeon
    $("#acordeon").accordion();

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
  
})