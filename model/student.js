class Student extends Human{
    constructor(name, surname, yob, marks){
        super(name,surname, yob)
        if (marks) {
          this.marks = marks;
        }else{
         this.marks = [];      
        }
        


    }

    calculateMean() {
        if (this.marks.length) {
            
        }

        let sum = 0;

    for (let i = 0; i < this.marks.length; i++) {
        const mark = this.marks[i];

        sum += mark;

        
    }
    const mean = sum / this.marks.length;

    return mean;
    }

    addMark(newMark) {

    if (newMark >= 0 && newMark <= 10) {
        this.marks.push(newMark);
        
    } else{
        console.log('errore, voto non valido');
        
    }
    
}

    toString(){
          const scheda = super.toString() + "\n" +
          "media:" + this.calculateMean();
    return scheda;

}

}

