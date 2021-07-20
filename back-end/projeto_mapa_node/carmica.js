
const { empty } = require("statuses");
const  carmica = require("./model/carmicas.json");



var validarCarmica = function (id_carmica, res) {
    var listaAux = [];
    var passou = false;

    for (var i = 0; i < carmica.length; i++) {
        
        if(carmica[i].id == id_carmica){
            listaAux = carmica[i];
            
            passou = true;
       //    return carmica[i]
        }
    }
    if(passou){
        
        return listaAux
        
    }else {
        
        return listaAux =  {id: "-", descrição: "-"};
    }

}

module.exports = validarCarmica;