const  licaoVida = require("./model/lição_vida.json");


var validarLicaoVida = function (id_licaoVida, res) {
        
    var listaAux = [];
    var passou = false;
    
    for (var i = 0; i < licaoVida.length; i++) {
        if(licaoVida[i].id == id_licaoVida){
            listaAux = licaoVida[i];
            
            passou = true;
        //   return licaoVida[i]
        }
    }
    if(passou){
        
        return listaAux
        
    }else {
        
        return listaAux =  {id: "-", descrição: "-"};
    }
    
}

module.exports = validarLicaoVida;