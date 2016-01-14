// Hello! We're here to help and serve you. (:
$(document).ready(function () {
  var telefones = [
    "Moto X",
    "iPhone 5s",
    "iPhone 6",
    "Lumia 935",
    'Redmi 2',
    'Galaxy S6'
  ];

  var $lista = $('#lista-dinamica');

  for (var i = 0; i<telefones.length; i++){
    var nomeDoTelefone = telefones[i];
    var blocoHtml = '<div class="col-sm-4 borda-azul"><h3>'+ nomeDoTelefone +'</h3></div>'
    $lista.append(blocoHtml);
  }

});;
