
const  desafio = require("./model/desafios.json");



var validarDesafio = function (id_desafio, res) {
    var listaAux = [];
    var passou = false;
    
    for (var i = 0; i < desafio.length; i++) {
      
        if(desafio[i].id == id_desafio){
            listaAux = desafio[i];

            passou = true;
       //    return desafio[i]
        }
    }
    if(passou){
        
        return listaAux
        
    }else {
        
        return listaAux =  {id: "-", descrição: "-"};
    }
    
}

module.exports = validarDesafio;