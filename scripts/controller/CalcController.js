class CalcController {

    constructor(){
        //use o "_" na frente do atributo para ter o acesso privado.
        //e sempre q o atributo for privado temos que definir os gets e sets do atributo.
        this._displayCalc  = "0";
        this._dataAtual;

    }
    //Os métodos getteres e setteres permitem definir como acessar os valores:
    get displayCalc(){ //get é para saber o que vai ser dovolvido toda vez que chamarmos.
        return this._displayCalc;
    }
    set displayCalc(valor){ //set é para salvarmos/mudarmos o valor do que desejarmos:
        this._displayCalc = valor;
    }

    get dataAtual(){
        return this._dataAtual;
    }
    set dataAtual(valor){
        this._dataAtual = valor;
    }
}