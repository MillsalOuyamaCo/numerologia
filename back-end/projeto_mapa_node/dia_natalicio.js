
const  diaNatalicio = require("./model/dia_natalicio.json");



var validarDiaNatalicio = function (id_diaNatalicio, res) {
            
    var listaAux = [];
    var passou = false;

    for (var i = 0; i < diaNatalicio.length; i++) {

        if(diaNatalicio[i].id == id_diaNatalicio){
            listaAux = diaNatalicio[i];

            passou = true;
       //    return diaNatalicio[i]
        }
    }
    if(passou){
        
        return listaAux
        
    }else {
        
        return listaAux =  {id: "-", descrição: "-"};
    }
}

module.exports = validarDiaNatalicio;