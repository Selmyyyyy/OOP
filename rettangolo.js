// base altezza il colore 
// calcola perimetro, descrive i dettagli del 

console.log('ciao pippo');

class Rettangolo {
    constructor(base, altezza, colore) {
        this.base = base; // vuol dire questo nome sarà il tuo nome.
        this.altezza = altezza;
        this.colore = colore;

    }

    calcolaArea() {
        return this.altezza * this.base;
    }


    calcolaPerimetro() {
        return this.altezza * 2 + this.base * 2;

    }

    toString() {


        const scheda = "altezza:" + this.altezza + "\n" +
            "base:" + this.base + "\n" +
            "area:" + this.calcolaArea() + "\n" +
            "perimetro:" + this.calcolaPerimetro;

        return scheda;



    }
}