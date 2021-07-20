
const  ciclos = require("./model/ciclo.json");


var validarCiclos = function (id_ciclos, res) {
    var listaAux = [];
    var passou = false;

    for (var i = 0; i < ciclos.length; i++) {
        
        if(ciclos[i].id == id_ciclos){
            listaAux = ciclos[i];
            
            passou = true;
         //  return ciclos[i]
        }
    }
    
    if(passou){
        
        return listaAux
        
    }else {
      
        return listaAux =  {id: "-", descrição: "-"};
    }

    
}

module.exports = validarCiclos;