
const  poder = require("./model/poder.json");


var validarpoder = function (id_poder, res) {

    var listaAux =[];
    var passou = false;

    for (var i = 0; i < poder.length; i++) {
        
        if(poder[i].id == id_poder){
            listaAux = poder[i];
          
            passou = true;
          // return poder[i]
        }
    }
    if(passou){
        console.log('poder if' + passou)
        return listaAux
        
    }else {
        console.log('poder else' + passou)
        return listaAux =  {id: "-", descrição: "-"};
    }
    
}

module.exports = validarpoder;