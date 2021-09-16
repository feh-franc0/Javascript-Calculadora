class CalcController {

    constructor(){
        //use o "_" na frente do atributo para ter o acesso privado e use get e set para os mesmos.
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
    }

    initialize(){ //método principal do nosso projeto.
        //setInterval : função executada em um intervalo de tempo, o tempo é marcado em milisegundos.
        //setTimeout : executa algo apenas uma vez e depois do tempo definido.

        this.setDisplayDateTime();

        setInterval(()=>{

            this.setDisplayDateTime();

        }, 1000);

    }

    initButtonsEvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

    }

    setDisplayDateTime(){//sempre que for reutilizar algum codigo,crie um metodo.
            
        this.displayDate = this.currentDate.toLocaleDateString(this._locale,{
            day:"2-digit",
            month: "long",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

    }    

    get displayTime(){
        return this._timeEl.innerHTML;
    }
    set displayTime(value){
        return this._timeEl.innerHTML = value;
    }

    get displayDate(){
        return this._dateEl.innerHTML;
    }
    set displayDate(value){
        return this._dateEl.innerHTML = value;
    }

    get displayCalc(){ //get é para saber o que vai ser dovolvido toda vez que chamarmos.
        return this._displayCalcEl.innerHTML;
    }
    set displayCalc(value){ //set é para salvarmos/mudarmos o valor do que desejarmos:
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate(){
        return new Date();
    }
    set currentDate(value){
        this._currentDate = value;
    }
}