
const  destino = require("./model/destino.json");



var validarDestino = function (id_destino, res) {
    var listaAux = [];
    var passou = false;

    for (var i = 0; i < destino.length; i++) {

        if(destino[i].id == id_destino){
            listaAux = destino[i];

            passou = true;
         //  return destino[i]
        }
    }
    if(passou){
        
        return listaAux
        
    }else {
        
        return listaAux =  {id: "-", descrição: "-"};
    }
    
}

module.exports = validarDestino;