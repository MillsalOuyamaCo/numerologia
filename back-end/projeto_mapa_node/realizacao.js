
const  realizacao = require("./model/realização.json");


var validarRealizacao = function (id_realizacao, res) {
    var listaAux = [];
    var passou = false;

   
    for (var i = 0; i < realizacao.length; i++) {
        
        if(realizacao[i].id == id_realizacao){
            listaAux = realizacao[i];
            
            passou = true;
        
          // return realizacao[i]
        }
    }

    if(passou){
   
        return listaAux
        
    }else {
        
        return listaAux =  {id: "-", descrição: "-"};
    }
    
    
}

module.exports = validarRealizacao;