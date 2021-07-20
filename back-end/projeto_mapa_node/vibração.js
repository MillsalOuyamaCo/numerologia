

const  vibracao = require("./model/vibração.json");



var validarVibracao = function (id_vibracao, res) {
    var listaAux = [];
    var passou = false;
    
    for (var i = 0; i < vibracao.length; i++) {
        if(vibracao[i].id == id_vibracao){
            listaAux = vibracao[i];

            passou = true;
        }
    }
    
    if(passou){

        return listaAux
        
    }else {
  
        return listaAux =  {id: "-", descrição: "-"};
    }

}

module.exports = validarVibracao;