class StudentTutor extends Student{
    constructor(name, surname, marks, tutee){
      super( name, surname, marks ); 
        this.tutee = tutee;
    }

    calculateMean(){
        const actualmean = super.calculateMean();

        const tuteeMean = this.tutee.calculateMean();

        let newMean;

        if (tuteeMean >= 6) {
            
            newMean = actualmean +1;

        } else {
            newMean = actualmean;
        }
        return newMean;
    }
}