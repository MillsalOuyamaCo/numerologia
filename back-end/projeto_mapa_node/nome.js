

var calcularLetra = function (nome_letras) {

    var valor = 0;
    var array_numero = [];

  for (var i = 0; i < nome_letras.length; i++) {

    if (nome_letras[i] === "A" || nome_letras[i] === "J"  || nome_letras[i] === "S") {
        valor = 1;
        array_numero.push(valor);
    } else if(nome_letras[i] === "B" ||nome_letras[i] === "K" ||nome_letras[i] === "T"){
        valor = 2;
        array_numero.push(valor);
    }else if (nome_letras[i] === "C" ||nome_letras[i] === "L"||nome_letras[i] === "U") {
        valor = 3;
        array_numero.push(valor);
    }else if (nome_letras[i] === "D"||nome_letras[i] === "M"||nome_letras[i] === "V") {
        valor = 4;
        array_numero.push(valor);
    }else if (nome_letras[i] === "E" ||nome_letras[i] ===  "N" ||nome_letras[i] === "W") {
        valor = 5;
        array_numero.push(valor);
    }else if (nome_letras[i] === "F" ||nome_letras[i] === "O" ||nome_letras[i] === "X") {
        valor = 6;
        array_numero.push(valor);
    }else if (nome_letras[i] === "G" ||nome_letras[i] === "P" ||nome_letras[i] === "Y") {
        valor = 7;
        array_numero.push(valor);
    }else if (nome_letras[i] === "H" ||nome_letras[i] === "Q" ||nome_letras[i] === "Z") {
        valor = 8;
        array_numero.push(valor);
    }else if (nome_letras[i] === "I" ||nome_letras[i] === "R") {
        valor = 9;
        array_numero.push(valor);
    }


}
    console.log('MOSTRAR ARRAY NUMEROS ANTES CALCULO')
    console.log(array_numero);
    console.log('calcular FIM')
    
    return array_numero;
}


var reduzirCalculo = function (numero_split) {

    var soma = 0;

    for (var i = 0; i < numero_split.length; i++) {

        soma += parseInt(numero_split[i])
        
    }

    console.log('soma função reduzir = ' + soma);
    return soma
}


var somarLetras = function (lista_numeros) {


    console.log('inicio somarletras')
    
        var total = 0;
        var reduzido;

        console.log(lista_numeros)

        for ( var i = 0; i < lista_numeros.length; i++ ){
        total += parseInt(lista_numeros[i]);
                }

        console.log('impressão somarletra = ' + total);
        var num_separado = total.toString()
        num_separado.split('');

        console.log(num_separado)


        if(total.toString().length > 1) {

            console.log('chamou função reduzir')
             reduzido = reduzirCalculo(num_separado);
             
             console.log('valor reduzido 1 = ' + reduzido)

             //segunda validação caso seja muito grande nome
                  if(reduzido.toString().length > 1 && reduzido.toString() != '11' ) {
                        //var = novoReduzido = reduzido.toString();
                        var reduzido2 = reduzido.toString().split('')
                        
                        reduzidoDois = reduzirCalculo(reduzido2);
                        console.log('entrada reduzido 2 = ' + reduzidoDois)
                    

                            return  [reduzido.toString().replace(',',''), reduzidoDois]
                        }
                    }

                    console.log('TESTE FINAL = ' + num_separado)
                    return  [num_separado.toString().replace('0',''), reduzido]
            }


 


    var validarVogais = function (nome_split) {

            var newVogal = [];
            var newCons = [];

        for (var index = 0; index < nome_split.length; index++) {

            switch (nome_split[index]) {
                case 'A':
                case 'E':
                case 'I':                    
                case 'O':
                case 'U':   
                case 'Y':    
                    newVogal.push(nome_split[index]);
                break;
                default:
                    newCons.push(nome_split[index]);;   
                }

    }
        console.log('vogais')
        console.log(newVogal)
        console.log('consoantes')
        console.log(newCons)

        return [newVogal, newCons]
    }


    var validarData = function(data_split) {
        var total = 0;

        console.log(data_split)

        for ( var i = 0; i < data_split.length; i++ ){
        total += parseInt(data_split[i]);
        console.log('ano/data teste = ' + data_split[i])
        }

        console.log('valor total ano ----===' + total)
        return total;
    }


    var calcularRealizacao = function (numero_licaoVida, segundoCiclo, primeiroCiclo, terceiroCiclo) {

        idadeDois = 36 - parseInt(numero_licaoVida)
        idadeTres = idadeDois + 1
        idadeQuatro = idadeTres + 9
        idadeCinco = idadeQuatro + 1
        idadeSeis = idadeCinco + 9
        idadeSete = idadeSeis + 1

        console.log('0000000000000000000000000000000000000011111111 ====== ' + primeiroCiclo + '/' + segundoCiclo +'/' )


        if (primeiroCiclo == '11') {
            primeiroCiclo = '2'
        }
        if (segundoCiclo == '11') {
            segundoCiclo = '2'
        }
        if (terceiroCiclo == '11') {
            terceiroCiclo = '2'
        }
    
        rel1 = parseInt(segundoCiclo) + parseInt(primeiroCiclo)
        realizacaoUm = somarLetras(rel1.toString())
            if(realizacaoUm[0].toString().length > 1) {
                var realizaUm = realizacaoUm[1].toString()
            }else{
                var realizaUm = realizacaoUm[0].toString()
            }
    console.log('0000000000000000000000000000000000000011111111 ====== ' + primeiroCiclo + '/' + segundoCiclo +'/' + rel1)

        rel2 = parseInt(segundoCiclo) + parseInt(terceiroCiclo)
        realizacaoDois = somarLetras(rel2.toString()) 
            if(realizacaoDois[0].toString().length > 1) {
                var realizaDois = realizacaoDois[1].toString()
            }else{
                var realizaDois = realizacaoDois[0].toString()
            }

        rel3 = parseInt(realizaUm) + parseInt(realizaDois)
        realizacaoTres = somarLetras(rel3.toString()) 

            if(realizacaoTres[0].toString().length > 1) {
                var realizaTres = realizacaoTres[1].toString()
            }else{
                var realizaTres = realizacaoTres[0].toString()
            }

        rel4 = parseInt(primeiroCiclo) + parseInt(terceiroCiclo)
        realizacaoQuatro = somarLetras(rel4.toString()) 
            if(realizacaoQuatro[0].toString().length > 1) {
                var realizaQuatro = realizacaoQuatro[1].toString()
            }else{
                var realizaQuatro = realizacaoQuatro[0].toString()
            }

       var resultadoIdade = [0, idadeDois, idadeTres, idadeQuatro, idadeCinco, idadeSeis, idadeSete]
       var resultadoRealizacao = [realizaUm, realizaDois, realizaTres, realizaQuatro]

        console.log(resultadoIdade)
        return {resultadoIdade, resultadoRealizacao}

    }

    var calcularDesafio = function (numero_licaoVida, segundoCiclo, primeiroCiclo, terceiroCiclo) {

        idadeDois = 36 - parseInt(numero_licaoVida)
        idadeTres = idadeDois + 1
        idadeQuatro = idadeTres + 9
        idadeCinco = idadeQuatro + 1
        idadeSeis = idadeCinco + 9
        idadeSete = idadeSeis + 1

        if (primeiroCiclo == '11') {
            primeiroCiclo = '2'
        }
        if (segundoCiclo == '11') {
            segundoCiclo = '2'
        }
        if (terceiroCiclo == '11') {
            terceiroCiclo = '2'
        }
      
        if (parseInt(primeiroCiclo) > parseInt(segundoCiclo)){
            des1 = parseInt(primeiroCiclo) - parseInt(segundoCiclo)
        }else {
            des1 = parseInt(segundoCiclo) - parseInt(primeiroCiclo)
        }
        desafioUm = somarLetras(des1.toString())
       
            if(desafioUm[0].toString().length > 1) {
                var desafioUm = desafioUm[1].toString()
            }else{
                var desafioUm = desafioUm[0].toString()
            }

            if (parseInt(segundoCiclo) > parseInt(terceiroCiclo)) {
                des2 = parseInt(segundoCiclo) - parseInt(terceiroCiclo)
            }else{
                des2 = parseInt(terceiroCiclo) - parseInt(segundoCiclo)
            }
        desafioDois = somarLetras(des2.toString()) 
            if(desafioDois[0].toString().length > 1) {
                var desafioDois = desafioDois[1].toString()
            }else{
                var desafioDois = desafioDois[0].toString()
            }

            if (parseInt(desafioUm) > parseInt(desafioDois)) {
                des3 = parseInt(desafioUm) - parseInt(desafioDois)
            }else{
                des3 = parseInt(desafioDois) - parseInt(desafioUm)
            }
        desafioTres = somarLetras(des3.toString()) 
        console.log('000000000000000000000000000000000000000000000000000000000000 ====== ' + desafioUm + '/' + desafioDois + des3)
            if(desafioTres[0].toString().length > 1) {
                var desafioTres = desafioTres[1].toString()
            }else{
                var desafioTres = desafioTres[0].toString()
            }
            if (parseInt(primeiroCiclo) > parseInt(terceiroCiclo)) {
                des4 = parseInt(primeiroCiclo) - parseInt(terceiroCiclo) 
            }else{
                des4 = parseInt(terceiroCiclo) - parseInt(primeiroCiclo)
            }
       
        desafioQuatro = somarLetras(des4.toString()) 
            if(desafioQuatro[0].toString().length > 1) {
                var desafioQuatro = desafioQuatro[1].toString()
            }else{
                var desafioQuatro = desafioQuatro[0].toString()
            }

       var resultadoIdade = [0, idadeDois, idadeTres, idadeQuatro, idadeCinco, idadeSeis, idadeSete]
       var resultadoDesafio = [desafioUm, desafioDois, desafioTres, desafioQuatro]

        console.log(resultadoIdade)
        return {resultadoIdade, resultadoDesafio}

    }

    var ausenciaCarmica = function(numeros_existe) {

        numeros = [1,2,3,4,5,6,7,8,9]
        ausencia = [];

        for (var i = 0; i < numeros.length; i++) {

                if (numeros_existe[i] != numeros[i]) {

                    ausencia.push(numeros[i])

            }

            
        }
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
        console.log(ausencia);
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> numeros existe')
        console.log(numeros_existe);
        return ausencia;
    }


module.exports = {  calcularLetra,
                    reduzirCalculo,
                    validarVogais,
                    somarLetras,
                    validarData,
                    calcularRealizacao,
                    calcularDesafio,
                    ausenciaCarmica
                    
}

