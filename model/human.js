class Human {
     constructor(name, surname, yob){
        this.name = name; // vuol dire questo nome sarà il tuo nome.
        this.surname = surname;
        this._yob = yob;

}

get yob(){
    return this._yob;
}

set yob(newYob){

    const actualYear = new Date().getFullYear();

    const isInThePast = newYob <= actualYear;

    const isYoungerThan150 = (actualYear - newYob) < 150;

    if (isInThePast && isYoungerThan150) {
        this._yob = newYob;

    } else {
        console.log("anno non valido");
        
    }   
    
}

get age(){
    const actualYear = new Date().getFullYear();
    const age = actualYear - this._yob;
    return age;
}

toString(){
    return "name: " + this.name + "\n" +
    "surname: " + this.surname + "\n" +
    "anno di nascita:" + this._yob;

}
}
