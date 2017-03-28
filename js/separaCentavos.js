//TRANSFORMA UM VALOR MONETÁRIO DE STRING PRA NUMERO
function separaCentavos(valor){
  var tamanho = valor.length;
  var aux='';
  var i;
  var centavos = '';
  var limite=0;
  
  if(valor[tamanho-3] == '.' || valor[tamanho-3] == ','){
    centavos= valor[tamanho-1]+valor[tamanho-2]; //separa os centavos do valor total
    centavos = Number(centavos)/100; // divide por 100
    limite = 3;
  } else if(valor[tamanho-2] == '.' || valor[tamanho-2] == ','){
    centavos= valor[tamanho-1];//separa os centavos do valor total
    centavos = Number(centavos)/10; // divide por 100
    limite = 2;
  } else {
    return Number(valor);
  }

  for(i=0; i<(tamanho-limite); i++){ 
    if(valor[i] != '.' && valor[i] != ','){
      aux+=valor[i];
    }
  }
  valor = Number(aux) + centavos;

  return valor;
}
