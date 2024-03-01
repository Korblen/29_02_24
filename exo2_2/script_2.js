var nbr = prompt("donne un nombre a mettre sous forme factorielle !");
nbr = parseInt(nbr);
function factorielle(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorielle(n - 1);
    }
}
var nbr_fac = factorielle(nbr)
console.log(nbr + '!=' + nbr_fac);