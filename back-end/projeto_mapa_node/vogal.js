
const  vogal = require("./model/vogal.json");



var validarVogal = function (id_vogal, res) {
    var listaAux =[];
    var passou = false;

    for (var i = 0; i < vogal.length; i++) {
        
        if(vogal[i].id == id_vogal){
            listaAux = vogal[i];

            passou = true;
           //return vogal[i]
        }
    }
    if(passou){
        
        return listaAux
        
    }else {
        
        return listaAux =  {id: "-", descrição: "-"};
    }
}

module.exports = validarVogal;