// In questo esercizio dato un array di studenti:
// Utilizza forEach per stampare i nomi degli studenti.
// Utilizza find per trovare uno studente con un voto superiore a 90.
// Utilizza reduce per calcolare la media dei voti degli studenti.
// Utilizza map per creare un nuovo array contenente i nomi degli studenti in maiuscolo.
// Utilizza filter per trovare gli studenti con voti superiori a 85.

const students = [
  { name: "Alice", vote: 95 },
  { name: "Bob", vote: 88 },
  { name: "Carol", vote: 76 },
  { name: "David", vote: 92 },
  { name: "Eve", vote: 84 },
];

students.forEach((student) => console.log(student.name)); //foreach

const majorNovanta = students.find((student) => student.vote > 90); //find -> così ho trovato solo il primo che corrisponde alla funzione dichiarata
console.log(majorNovanta);

const media = students.reduce((a, student) => a + student.vote, 0); // reduce -> ho creato una variabile per fare la somma con reduce e poi ho fatto la medai con lenght
console.log(media / students.length);

const maiusc = students.map((student) => student.name); // map - >non so come si fa il maiuscolo so che devo la sintassi di map dovrebbe ssere giusta

const majorOttantacinque = students.filter((student) => student.vote > 85); //filter voto
console.log(majorOttantacinque);
