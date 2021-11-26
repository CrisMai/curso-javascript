
//Array com os nomes dos meses do ano

var mes = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
var semana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

var hoje = new Date(); //Data e hora atuais

//Exibindo os valores iniciais de data e hora no navegador:
console.log("Exibindo os valores iniciais de data e hora no navegador:");
console.log("Dia do mês: ", hoje.getDate());
console.log("Mês: ", mes[hoje.getMonth()]);
console.log("Ano: ", hoje.getFullYear());
console.log("Dia da semama: ", semana[hoje.getDay()]);
console.log("Hora: ", hoje.getHours());
console.log("Minutos: ", hoje.getMinutes());
console.log("Milissegundos: ", hoje.getSeconds());

//Função que permite alterar data e hora:

function alteraData(obj, parm2) {
    console.log("alteraData");
    //event.preventDefault();
    console.log();
    hoje.setDate(document.getElementById("dia").value);
    hoje.setMonth(document.getElementById("mes").value -1);
    hoje.setFullYear(document.getElementById("ano").value);
    alert("Data: " + semana[hoje.getDay()] + "," + hoje.getDate() + " de " + mes[hoje.getMonth()] + " de " + hoje.getFullYear());
}

