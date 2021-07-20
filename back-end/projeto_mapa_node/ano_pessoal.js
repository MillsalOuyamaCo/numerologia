const  anoPessoal = require("./model/ano_pessoal.json");


var validarAnoPessoal = function (id_ano, res) {
    
    var listaAux = [];
    var passou = false;

    for (var i = 0; i < anoPessoal.length; i++) {
        
        if(anoPessoal[i].id == id_ano){
            listaAux = anoPessoal[i];

            passou = true;
          //  return anoPessoal[i]
        }
    }
    if(passou){
        
        return listaAux
        
    }else {
        
        return listaAux =  {id: "-", descrição: "-"};
    }
    
}

module.exports = validarAnoPessoal;