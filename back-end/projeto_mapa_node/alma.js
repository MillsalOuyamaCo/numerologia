
const  alma = require("./model/alma.json");


var validarAlma = function (id_alma, res) {
    
    var listaAux = [];
    var passou = false;
    
    for (var i = 0; i < alma.length; i++) {


        if(alma[i].id == id_alma){
            listaAux = alma[i];

            passou = true;
          // return alma[i]
          // return res.render('resultado', {numero_alma: alma[i].id, descrição_alma: alma[i].descrição})
        }
    }
   if(passou){
        
        return listaAux
        
    }else {
        
        return listaAux =  {id: "-", descrição: "-"};
    }

    
}

module.exports = validarAlma;