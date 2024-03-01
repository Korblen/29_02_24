function arnToAminoAcids(arn) {
    let result = [];

    for (let i = 0; i < arn.length; i += 3) {
        const codon = arn.slice(i, i + 3);
        let aminoAcid = "";

        if (codon === "UCU" || codon === "UCC" || codon === "UCA" || codon === "UCG" || codon === "AGU" || codon === "AGC") {
            aminoAcid = "Sérine";
        } else if (codon === "CCU" || codon === "CCC" || codon === "CCA" || codon === "CCG") {
            aminoAcid = "Proline";
        } else if (codon === "UUA" || codon === "UUG") {
            aminoAcid = "Leucine";
        } else if (codon === "UUU" || codon === "UUC") {
            aminoAcid = "Phénylalanine";
        } else if (codon === "CGU" || codon === "CGC" || codon === "CGA" || codon === "CGG" || codon === "AGA" || codon === "AGG") {
            aminoAcid = "Arginine";
        } else if (codon === "UAU" || codon === "UAC") {
            aminoAcid = "Tyrosine";
        } else {
            aminoAcid = "nope";
        }

        result.push(aminoAcid);
    }

    return result.join("-");
}

var arn = prompt("donne de l'adn wsh");
const aminoAcids = arnToAminoAcids(arn);
console.log(aminoAcids);