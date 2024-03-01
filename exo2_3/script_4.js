const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];
  
console.log("1. les moyen-vieux :");
const entrepreneursAnnees70 = entrepreneurs.filter(entrepreneur => entrepreneur.year >= 1970 && entrepreneur.year < 1980);
console.log(entrepreneursAnnees70);
  

console.log("\n2. Leur nom/prénom");
const nomsEntrepeneurs = entrepreneurs.map(entrepreneur => ({ prénom: entrepreneur.first, nom: entrepreneur.last }));
console.log(nomsEntrepeneurs);
  
console.log("\n3. Quel âge ils ont/auraient eu (avec plus de chance ?) :");
const dateActuelle = new Date().getFullYear();
entrepreneurs.forEach(entrepreneur => {
    const age = dateActuelle - entrepreneur.year;
    console.log(`${entrepreneur.first} ${entrepreneur.last} aurait ${age} ans aujourd'hui.`);
});
  
console.log("\n4. On fait l'appel par ordre alphabétique");
const entrepreneursTries = entrepreneurs.sort((a, b) => a.last.localeCompare(b.last));
console.log(entrepreneursTries);