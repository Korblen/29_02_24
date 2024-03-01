const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
];
  
const allRentedAtLeastOnce = books.every(book => book.rented > 0);
console.log("1. Est-ce que tous les livres ont été au moins empruntés une fois ? :", allRentedAtLeastOnce);
  
const mostRentedBook = books.reduce((max, book) => max.rented > book.rented ? max : book);
console.log("2. Le livre le plus emprunté est :", mostRentedBook.title);
  
const leastRentedBook = books.reduce((min, book) => min.rented < book.rented ? min : book);
console.log("3. Le livre le moins emprunté est :", leastRentedBook.title);
  
const bookWithID873495 = books.find(book => book.id === 873495);
console.log("4. Le livre avec l'ID 873495 est :", bookWithID873495.title);
  
const booksFiltered = books.filter(book => book.id !== 133712);
console.log("5. Liste des livres après suppression du livre avec l'ID 133712 :", booksFiltered);
  
const booksSorted = booksFiltered.sort((a, b) => a.title.localeCompare(b.title));
console.log("6. Liste des livres triés par ordre alphabétique :", booksSorted);