class CalcController {

    constructor(){
        //use o "_" na frente do atributo para ter o acesso privado.
        //e sempre q o atributo for privado temos que definir os gets e sets do atributo.
        this._displayCalc  = "0";
        this._currentDate;
        this.initialize();
    }

    initialize(){ //método principal do nosso projeto.

        let displayCalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");
        //innerHTML para manipular o DOM
        displayCalcEl.innerHTML = "1234";
        dateEl.innerHTML = "02/12/1998";
        timeEl.innerHTML = "23:06";

    }

    //Os métodos getteres e setteres permitem definir como acessar os valores:
    get displayCalc(){ //get é para saber o que vai ser dovolvido toda vez que chamarmos.
        return this._displayCalc;
    }
    set displayCalc(valor){ //set é para salvarmos/mudarmos o valor do que desejarmos:
        this._displayCalc = valor;
    }

    get currentDate(){
        return this._currentDate;
    }
    set currentDate(valor){
        this._currentDate = valor;
    }
}