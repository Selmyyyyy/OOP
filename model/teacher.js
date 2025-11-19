 class Teacher extends Human{
  constructor(name, surname, yob, students) {

        super(name, surname, yob);

        this.students = students;
    }

    // toString() {


    //     const prof = "name: " + this.name + "\n" +
    //         "cognome: " + this.surname + "\n" + "------------\n";
    //     let listaStudenti = "";

    //     for (let i = 0; i < this.students.length; i++) {

    //         const studente = this.students[i];


    //         listaStudenti = listaStudenti +

    //             studente.name + " " +
    //             studente.surname +
    //             " - media: " + studente.calculateMean() +
    //             "\n";

    //     }
    //     return prof + listaStudenti;

    calculateMean(){
        let sum = 0;

       for (const student of  this.students) {
        sum += student.calculateMean();

        } 

        const mean = sum / this.students.length;

        return mean;
        
      
    }


    

    toString(){
        let string = super.toString() + '\n' +
        "-------------------\n" +
        "allievi:\n";

        for (const student of this.students){
            string += student.name + " " +
            " - media:" + " " +
            student.calculateMean() + 
            "\n";
            
        }

        string += "----------------------\n"

        string += "media della classe:" + this.calculateMean();

        return string;
    }
}
