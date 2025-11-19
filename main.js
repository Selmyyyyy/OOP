// console.log('object oriented programming');

// // const stefania = {name:"stefania", surname: "dagnino", marks: [10, 9, 7, 8, 8]};

// // const leonardo = {name: "leonardo", surname: "silva", marks: [3, 4, 4, 2, 5]};
// const stefania = new Student("stefania", "dagnino",[10, 9, 7, 8, 8]);
// const leonardo = new Student("leonardo", "silva", [3, 4, 4, 2, 5] );
// const salma  = new Student("salma", "sobhi");
// // function calculateStudentMean(student) {
// //     let sum = 0;

// //     for (let i = 0; i < student.marks.length; i++) {
// //         const mark = student.marks[i];

// //         sum += mark;

        
// //     }
// //     const mean = sum / student.marks.length;

// //     return mean;
// // }


// // console.log(calculateStudentMean(stefania));
// // console.log(calculateStudentMean(leonardo));

// // altri modi per fare la media 

// // let sum = 0;

// // for (const n of numbers) {
// //   sum += n;
// // }
// // const avg = sum / numbers.length;
// // console.log(avg);
// //
// // const avg = numbers.reduce((a, b) => a + b, 0) / numbers.length;
// // console.log(avg);

// // console.log(stefania.calculateMean());
// // console.log(leonardo.calculateMean());



// // function addMark(student, newMark) {

// //     if (newMark >= 0 && newMark <= 10) {
// //         student.marks.push(newMark);
        
// //     } else{
// //         console.log('errore, voto non valido');
        
// //     }
    
// // }
// // La funzione verifica che il voto sia tra 0 e 10 if (newMark >= 0 && newMark <= 10)
// addMark(stefania, 10); //stai aggiungendo un voto a stefania 
// console.log(calculateStudentMean(stefania));

// addMark(leonardo, 20);
// console.log(calculateStudentMean(leonardo));


// function creaScheda(student) {

//     const scheda = "name:" + student.name + "\n" +
//     "surname:" + student.surname + "\n" +
//     "media:" + calculateStudentMean(student)

//     return scheda;

    
// }

// console.log(stefania.creaScheda());
// console.log(leonardo.creaScheda());

// console.log("studente:\n" + stefania);
// console.log(leonardo.toString());

// const rect1 = new Rettangolo(30,20,'rosso');
// console.log(rect1.calcolaArea());
// console.log(rect1.calcolaPerimetro());
// console.log(rect1.toString());

const stefania = new Student("stefania", "dagnino", 1990, [10, 9, 7, 8, 8]);
const leonardo = new Student("leonardo", "silva",1991, [3, 4, 4, 2, 5] );
const salma  = new Student("salma", "sobhi", 2002, [6, 6, 6, 6, 6]);

const Andrea = new Teacher("andrea", "asioli", 1970, [stefania,leonardo,salma]) ;
// console.log(Andrea.students.length);

const heros = new StudentTutor("heros", "balan", 2005, [10, 9, 7, 8], leonardo);

console.log(stefania.toString());
console.log(Andrea.toString());
console.log(heros.toString());
console.log(heros.calculateMean());
heros.addMark(7);

console.log(heros.calculateMean());
console.log(leonardo.calculateMean());

leonardo.addMark(10);
leonardo.addMark(9);
leonardo.addMark(9.5);
leonardo.addMark(8);
console.log(leonardo.calculateMean());
console.log(heros.calculateMean());

console.log(Andrea.toString());

heros.name = "giovanni"; // cambia il nome 

console.log(heros.toString());
console.log(leonardo.toString());
console.log(stefania.toString());
console.log(salma.toString());

const yearsOfBirthOfEros = heros.tob;
console.log(heros.yob);

heros.yob = 3000;
console.log(heros.yob);

heros.yob = 100;
console.log(heros.yob);

heros.yob = 1993;
console.log(heros.yob);

















// // console.log(creaScheda(stefania));
// // console.log(creaScheda(leonardo));


