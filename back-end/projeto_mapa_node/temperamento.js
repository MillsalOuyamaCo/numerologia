

const  temperamento = require("./model/temperamento.json");



var validarTemperamento = function (id_temperamento, res) {
            
    var listaAux = [];
    var passou = false;

    for (var i = 0; i < temperamento.length; i++) {
        if(temperamento[i].id == id_temperamento){
            listaAux = temperamento[i];
            
            passou = true;
          // return temperamento[i]
        }
    }
    if(passou){
        
        return listaAux
        
    }else {
        
        return listaAux =  {id: "-", descrição: "-"};
    }
    
}

module.exports = validarTemperamento;