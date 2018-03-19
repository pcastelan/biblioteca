/*
 *   cria mais de uma chamada em ajax para arquivos json com a mesma estrutura 
 *   concatena o resultado num mesmo array de objetos
 *
 *   possível aumentar o numero de chamadas, contanto que os jsons tenham sempre a mesma estrutura
*/
 
var chamada1 = $.ajax({
  url: "ajax/arquivo1.json",
  type: "GET",
  dataType: "json",
  headers: {
    Accept: "application/json"
  } 
});

var chamada2 = $.ajax({
  url: "ajax/arquivo2.json",
  type: "GET",
  dataType: "json",
  headers: {
    Accept: "application/json"
  } 
});

//depois que as chamadas estiverem finalizadas
$.when(chamada1, chamada2).done(function(resultado1, resultado2){
  //cada chamada tem como retorno um array com [ data, status, jqXHR ]

  //o resto do código deve ser adequado a estrutura dos objetos json
  var data = resultado1[0];

  for (var i in resultado2[0]){
    data.push(resultado2[0][i]);
  }

  return data;
});
