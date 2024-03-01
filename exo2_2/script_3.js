var nbr = prompt("donne un chiffre/nombre wsh");
for (var i = 1; i <= nbr; i++) {
    var espaces = " ".repeat(nbr - i);
    var dies = "#".repeat(i);
    console.log(espaces + dies);
}