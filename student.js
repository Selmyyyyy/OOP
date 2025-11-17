class Student{
    constructor(name, surname, marks){
        this.name = name; // vuol dire questo nome sarà il tuo nome.
        this.surname = surname;
        this.marks = marks; 


    }

    calculateMean() {
        
        let sum = 0;

    for (let i = 0; i < this.marks.length; i++) {
        const mark = this.marks[i];

        sum += mark;

        
    }
    const mean = sum / this.marks.length;

    return mean;
    }

addMark(newMark){

   

}
}

//1) crea scheda 