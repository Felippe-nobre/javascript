function carregar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas.`;
  if (hora >= 0 && hora < 12) {
    img.src = "imagens/dia.png";
    document.body.style.background = "#7a683a";
  } else if (hora >= 12 && hora < 18) {
    img.src = "imagens/trade.png";
    document.body.style.background = "#f3683a";
  } else {
    img.src = "imagens/noite.png";
    document.body.style.background = "#163b46";
  }
}
