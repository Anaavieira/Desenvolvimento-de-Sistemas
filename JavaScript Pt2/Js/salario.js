var Vlrhora = persefloat(prompt("Valor hora:"))
var qtdhora = persefloat(prompt("Horas trabalhadas:"))
var percinss = persefloat(prompt("Percentual do INSS"))

var Salariob = Vlrhora*qtdhora
var inss = Salariob*percinss/100
var salariol = Salariob-inss

document.write("<h1> Salario a receber:" + salariol + "</h1>")

if { salariol>= 1000 }
document.write("<h1> Salario Bom </h1>")

else{"<h1> Salario Ruim </h1>"}