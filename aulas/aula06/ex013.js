var agora = new Date();
var diaSem = agora.getDay();
/* 
    0 = Domigo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta 
    5 = Sexta
    6 = Sábado
*/

switch (diaSem) {
  case 0:
    console.log("Domigo");
    break;
  case 1:
    console.log("Segunda");
    break;
  case 2:
    console.log("Terça");
    break;
  case 3:
    console.log("Quarta");
    break;
  case 4:
    console.log("Quinta");
    break;
  case 5:
    console.log("Sexta");
    break;
  case 0:
    console.log("Sábado");
    break;
  default:
    console.log("[ERRO] Dia inválido!");
}
