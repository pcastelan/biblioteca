//redimensionar imagem, sem distorcê-la, para ocupar um tamanho máximo no canvas

function redimensiona (imagem, max){
  var nWidth, nHeight;
  var proporcao = imagem.height/imagem.width;
  if (imagem.height > imagem.width){
    nHeight = max;
    nWidth = nHeight/proporcao;
  } else if (imagem.width>imagem.height){
    nWidth = max;
    nHeight = nWidth*proporcao;
  } else if (imagem.width == imagem.height){
    nWidth = nHeight = max;
  }
  imagem.width = nWidth;
  imagem.height = nHeight;
  return imagem;
}
