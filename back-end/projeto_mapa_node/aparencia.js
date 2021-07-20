const aparencia = require("./model/aparencia.json");


var validarAparencia = function(id_aparencia, res) {
    
    var listaAux = [];
    var passou = false;

    for (var i = 0; i < aparencia.length; i++) {

       
        if(aparencia[i].id == id_aparencia){
            listaAux = aparencia[i];
            
            passou = true;
           console.log('id aparencia - ' + passou)
           console.log(aparencia[i])
        //    return aparencia[i];        
          // return res.render('resultado', {numero_alma: alma[i].id, descrição_alma: alma[i].descrição})
        }
    }
    if(passou){
        
        console.log('if aparencia' + id_aparencia)
        return listaAux
        
    }else {
        console.log('else aparencia' + id_aparencia)
        return listaAux =  {id: "-", descrição: "-"};
    }
}

module.exports = validarAparencia