function capitalizarPrimeiraLetra(cidade) {
  return cidade.charAt(0).toUpperCase() + cidade.slice(1).toLowerCase();
}

var cidade = prompt("Qual sua cidade?");
var formatado = capitalizarPrimeiraLetra(cidade)

if(cidade == "" || !isNaN(cidade)){
    alert("Digite alguma cidade!")
    location.reload();
}else{
    document.getElementById("cidade").textContent = formatado;
}

