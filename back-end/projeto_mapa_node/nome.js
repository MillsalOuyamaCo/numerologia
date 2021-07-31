

var calcularLetra = function (nome_letras) {

    var valor = 0;
    var array_numero = [];

    for (var i = 0; i < nome_letras.length; i++) {

        if (nome_letras[i] === "A" || nome_letras[i] === "J" || nome_letras[i] === "S") {
            valor = 1;
            array_numero.push(valor);
        } else if (nome_letras[i] === "B" || nome_letras[i] === "K" || nome_letras[i] === "T") {
            valor = 2;
            array_numero.push(valor);
        } else if (nome_letras[i] === "C" || nome_letras[i] === "L" || nome_letras[i] === "U") {
            valor = 3;
            array_numero.push(valor);
        } else if (nome_letras[i] === "D" || nome_letras[i] === "M" || nome_letras[i] === "V") {
            valor = 4;
            array_numero.push(valor);
        } else if (nome_letras[i] === "E" || nome_letras[i] === "N" || nome_letras[i] === "W") {
            valor = 5;
            array_numero.push(valor);
        } else if (nome_letras[i] === "F" || nome_letras[i] === "O" || nome_letras[i] === "X") {
            valor = 6;
            array_numero.push(valor);
        } else if (nome_letras[i] === "G" || nome_letras[i] === "P" || nome_letras[i] === "Y") {
            valor = 7;
            array_numero.push(valor);
        } else if (nome_letras[i] === "H" || nome_letras[i] === "Q" || nome_letras[i] === "Z") {
            valor = 8;
            array_numero.push(valor);
        } else if (nome_letras[i] === "I" || nome_letras[i] === "R") {
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

    for (var i = 0; i < lista_numeros.length; i++) {
        total += parseInt(lista_numeros[i]);
    }

    console.log('impressão somarletra = ' + total);
    var num_separado = total.toString()
    num_separado.split('');

    console.log(num_separado)


    if (total.toString().length > 1) {

        console.log('chamou função reduzir')
        reduzido = reduzirCalculo(num_separado);

        console.log('valor reduzido 1 = ' + reduzido)

        //segunda validação caso seja muito grande nome
        if (reduzido.toString().length > 1 && reduzido.toString() != '11') {
            //var = novoReduzido = reduzido.toString();
            var reduzido2 = reduzido.toString().split('')

            reduzidoDois = reduzirCalculo(reduzido2);
            console.log('entrada reduzido 2 = ' + reduzidoDois)


            return [reduzido.toString().replace(',', ''), reduzidoDois]
        }
    }

    if (num_separado > 99) {
        num_separado = num_separado / 10;
    }

    console.log('TESTE FINAL = ' + num_separado)
    return [num_separado.toString(), reduzido]
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


var validarData = function (data_split) {
    var total = 0;

    console.log(data_split)

    for (var i = 0; i < data_split.length; i++) {
        total += parseInt(data_split[i]);
        console.log('ano/data teste = ' + data_split[i])
    }

    console.log('valor total ano ----===' + total)
    return total;
}


var calcularRealizacao = function (numero_licaoVida, segundoCiclo, primeiroCiclo, terceiroCiclo) {

    if (numero_licaoVida == "11") {
        numero_licaoVida = "2";
    }

    idadeDois = 36 - parseInt(numero_licaoVida)
    idadeTres = idadeDois + 1
    idadeQuatro = idadeTres + 9
    idadeCinco = idadeQuatro + 1
    idadeSeis = idadeCinco + 9
    idadeSete = idadeSeis + 1

    console.log('0000000000000000000000000000000000000011111111 ====== ' + primeiroCiclo + '/' + segundoCiclo + '/')


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
    if (realizacaoUm[0].toString().length > 1) {
        var realizaUm = realizacaoUm[1].toString()
    } else {
        var realizaUm = realizacaoUm[0].toString()
    }
    console.log('0000000000000000000000000000000000000011111111 ====== ' + primeiroCiclo + '/' + segundoCiclo + '/' + rel1)

    rel2 = parseInt(segundoCiclo) + parseInt(terceiroCiclo)
    realizacaoDois = somarLetras(rel2.toString())
    if (realizacaoDois[0].toString().length > 1) {
        var realizaDois = realizacaoDois[1].toString()
    } else {
        var realizaDois = realizacaoDois[0].toString()
    }

    rel3 = parseInt(realizaUm) + parseInt(realizaDois)
    realizacaoTres = somarLetras(rel3.toString())

    if (realizacaoTres[0].toString().length > 1) {
        var realizaTres = realizacaoTres[1].toString()
    } else {
        var realizaTres = realizacaoTres[0].toString()
    }

    rel4 = parseInt(primeiroCiclo) + parseInt(terceiroCiclo)
    realizacaoQuatro = somarLetras(rel4.toString())
    if (realizacaoQuatro[0].toString().length > 1) {
        var realizaQuatro = realizacaoQuatro[1].toString()
    } else {
        var realizaQuatro = realizacaoQuatro[0].toString()
    }

    var resultadoIdade = [0, idadeDois, idadeTres, idadeQuatro, idadeCinco, idadeSeis, idadeSete]
    var resultadoRealizacao = [realizaUm, realizaDois, realizaTres, realizaQuatro]

    console.log(resultadoIdade)
    return { resultadoIdade, resultadoRealizacao }

}

var calcularDesafio = function (numero_licaoVida, segundoCiclo, primeiroCiclo, terceiroCiclo) {

    if (numero_licaoVida == "11") {
        numero_licaoVida = "2";
    }

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

    if (parseInt(primeiroCiclo) > parseInt(segundoCiclo)) {
        des1 = parseInt(primeiroCiclo) - parseInt(segundoCiclo)
    } else {
        des1 = parseInt(segundoCiclo) - parseInt(primeiroCiclo)
    }
    desafioUm = somarLetras(des1.toString())

    if (desafioUm[0].toString().length > 1) {
        var desafioUm = desafioUm[1].toString()
    } else {
        var desafioUm = desafioUm[0].toString()
    }

    if (parseInt(segundoCiclo) > parseInt(terceiroCiclo)) {
        des2 = parseInt(segundoCiclo) - parseInt(terceiroCiclo)
    } else {
        des2 = parseInt(terceiroCiclo) - parseInt(segundoCiclo)
    }
    desafioDois = somarLetras(des2.toString())
    if (desafioDois[0].toString().length > 1) {
        var desafioDois = desafioDois[1].toString()
    } else {
        var desafioDois = desafioDois[0].toString()
    }

    if (parseInt(desafioUm) > parseInt(desafioDois)) {
        des3 = parseInt(desafioUm) - parseInt(desafioDois)
    } else {
        des3 = parseInt(desafioDois) - parseInt(desafioUm)
    }
    desafioTres = somarLetras(des3.toString())
    console.log('000000000000000000000000000000000000000000000000000000000000 ====== ' + desafioUm + '/' + desafioDois + des3)
    if (desafioTres[0].toString().length > 1) {
        var desafioTres = desafioTres[1].toString()
    } else {
        var desafioTres = desafioTres[0].toString()
    }
    if (parseInt(primeiroCiclo) > parseInt(terceiroCiclo)) {
        des4 = parseInt(primeiroCiclo) - parseInt(terceiroCiclo)
    } else {
        des4 = parseInt(terceiroCiclo) - parseInt(primeiroCiclo)
    }

    desafioQuatro = somarLetras(des4.toString())
    if (desafioQuatro[0].toString().length > 1) {
        var desafioQuatro = desafioQuatro[1].toString()
    } else {
        var desafioQuatro = desafioQuatro[0].toString()
    }

    var resultadoIdade = [0, idadeDois, idadeTres, idadeQuatro, idadeCinco, idadeSeis, idadeSete]
    var resultadoDesafio = [desafioUm, desafioDois, desafioTres, desafioQuatro]

    console.log(resultadoIdade)
    return { resultadoIdade, resultadoDesafio }

}

var ausenciaCarmica = function (numeros_existe) {

    numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    ausencia = [];

    let difference = numeros.filter(x => !numeros_existe.includes(x));

    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
    console.log(difference);
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> numeros existe')
    console.log(numeros_existe);
    return difference;
}

const anoPessoal = (dia, mes) => {
    const actualDate = new Date().toISOString().split('-').join('');
    const birthdate = new Date().getFullYear().toString() + mes + dia;
    const isBirthdayThisYear = birthdate < actualDate;
    let yearToCalculate = parseInt(new Date().getFullYear());

    if (!isBirthdayThisYear) {
        yearToCalculate = yearToCalculate - 1;
    }

    // const dayReducedArray = somarLetras([dia]);
    // const monthReducedArray = somarLetras([mes]);
    const yearReducedArray = somarLetras([yearToCalculate]);

    // let dayReduced = dayReducedArray[0].toString().length > 1 ? dayReducedArray[1] : dayReducedArray[0];
    // let monthReduced = monthReducedArray[0].toString().length > 1 ? monthReducedArray[1] : monthReducedArray[0];
    let yearReduced = yearReducedArray[0].toString().length > 1 ? yearReducedArray[1] : yearReducedArray[0];


    const result = somarLetras([dia, mes, yearReduced]);

    let anoPessoal = ''

    if (result[0].toString().length > 1) {
        if (result[0] > 78) {
            // if(destinoRetorno[0].toString().length > 2){
            anoPessoal = result[1].toString()

        } else {
            anoPessoal = result[0].toString().concat('/', result[1].toString())

        }
    } else {
        anoPessoal = result[0].toString()

    }

    console.log("ANO PESSOAL >>>>>>> ");
    console.log("ACTUAL DATE: " + actualDate);
    console.log("birthdate: " + birthdate);
    console.log("DIA NASCIMENO: " + dia);
    console.log("MES NASCIMENO: " + mes);
    console.log("Aniversaio ja passou: " + isBirthdayThisYear);
    console.log("ANO PASSADO: " + yearToCalculate);

    // console.log("DIA REDUZIDO ARRAY: " + dayReducedArray);
    // console.log("MES REDUZIDO ARRAY: " + monthReducedArray);
    console.log("ANO REDUZIDO ARRAY: " + yearReducedArray);

    // console.log("DIA REDUZIDO: " + dayReduced);
    // console.log("MES REDUZIDO: " + monthReduced);
    console.log("ANO REDUZIDO: " + yearReduced);
    console.log("RESULTADO REDUZIDO: " + result);
    console.log(new Date().toLocaleDateString('en-CA'));

    return anoPessoal;
}

const quadrimestre = (dia, mes, ano, licaoDeVida, alma) => {
    let Quadrimester = class Quadrimester {
        constructor(dataInicial, dataFinal, resultadoCalculo) {
            this.dataInicial = dataInicial,
                this.dataFinal = dataFinal,
                this.resultadoCalculo = resultadoCalculo
        }
    };

    let quadrimestreArray = [];

    const actualDate = new Date().toISOString().split('-').join('');
    const birthdate = new Date().getFullYear().toString() + mes + dia;
    const isBirthdayPassedThisYear = birthdate < actualDate;
    let yearToCalculate = parseInt(new Date().getFullYear());

    if (!isBirthdayPassedThisYear) {
        yearToCalculate = yearToCalculate - 1;
    }

    console.log("QUADRIMESTRE >>>>>>> ");
    console.log("ACTUAL DATE: " + actualDate);
    console.log("birthdate: " + birthdate);

    const actualBirthday = dia + "/" + mes + "/" + yearToCalculate;
    let quadrimesterOne = new Quadrimester();

    //quadrimesterOne.dataInicial = actualBirthday;

    var currentBirthday = new Date(yearToCalculate, mes - 1, dia);
    console.log("PRIMEIRO ANO DE TODOS " + yearToCalculate);
    console.log("PRIMEIRO MES DE TODOS " + mes);
    console.log("PRIMEIRO DIA DE TODOS " + dia);
    console.log("PRIMEIRA DATA DE TODAS " + currentBirthday);
    currentBirthday.setMonth(currentBirthday.getMonth() + 4);
    var finalDateOne = currentBirthday;
    //quadrimesterOne.dataFinal = finalDateOne.toLocaleDateString();

    console.log("DT.getMonth : " + finalDateOne.getMonth());
    console.log("DT post calculus : " + finalDateOne);


    const age = isBirthdayPassedThisYear ? new Date().getFullYear() - ano : new Date().getFullYear() - ano - 1;
    const lastBirthdayYear = isBirthdayPassedThisYear ? new Date().getFullYear() : new Date().getFullYear() - 1;
    const reducedBirthYearArray = somarLetras([lastBirthdayYear]);

    console.log("idade: " + age);
    console.log("ano de aniversario: " + lastBirthdayYear);
    console.log("ano de aniversario reduzido: " + reducedBirthYearArray);

    if (reducedBirthYearArray[0].toString().length > 1) {
        var reducedBirthYear = reducedBirthYearArray[1]
    } else {
        var reducedBirthYear = reducedBirthYearArray[0]
    }

    const resultOneArray = somarLetras([age + parseInt(reducedBirthYear)])
    const resultOne = resultOneArray[0] + "/" + resultOneArray[1];
    quadrimesterOne = new Quadrimester(actualBirthday, finalDateOne.toLocaleDateString(), resultOne);

    //quadrimesterOne.resultadoCalculo = somarLetras([age + parseInt(reducedBirthYear)]);
    quadrimestreArray.push(quadrimesterOne);

    console.log("quadrimestrre 1: " + JSON.stringify(quadrimesterOne));
    console.log("quadrimestrrearray : " + JSON.stringify(quadrimestreArray));

    const initialDateTwo = new Date(finalDateOne);
    const finalDateTwo = new Date(initialDateTwo);
    console.log("initial date two: " + initialDateTwo);
    console.log("final date two: " + finalDateTwo);
    finalDateTwo.setMonth(finalDateTwo.getMonth() + 4, finalDateTwo.getDate());
    const resultTwoArray = somarLetras([licaoDeVida + parseInt(reducedBirthYear)]);
    const resultTwo = resultTwoArray[0] + "/" + resultTwoArray[1];

    let quadrimesterTwo = new Quadrimester(initialDateTwo.toLocaleDateString(), finalDateTwo.toLocaleDateString(), resultTwo);
    quadrimestreArray.push(quadrimesterTwo);

    console.log("quadrimestre 2: " + JSON.stringify(quadrimesterTwo));
    console.log("quadrimestrrearray : " + JSON.stringify(quadrimestreArray));

    const intialDateThree = new Date(finalDateTwo);
    const finalDateThree = new Date(intialDateThree);
    finalDateThree.setMonth(finalDateThree.getMonth() + 4, finalDateThree.getDate());
    console.log("ALMA DENTRO DE QUADRIMESTRE: " + alma);
    let resultThreeArray = somarLetras([alma[0] + parseInt(reducedBirthYear)]);
    let resultThree = resultThreeArray[0] + "/" + resultThreeArray[1];

    let quadrimesterThree = new Quadrimester(intialDateThree.toLocaleDateString(), finalDateThree.toLocaleDateString(), resultThree);
    quadrimestreArray.push(quadrimesterThree);

    console.log("quadrimestre 3: " + JSON.stringify(quadrimesterThree));
    console.log("quadrimestrrearray : " + JSON.stringify(quadrimestreArray));

    return quadrimestreArray;
}

const idade = (dia, mes, ano) => {
    const actualDate = new Date().toISOString().split('-').join('');
    const birthdate = new Date().getFullYear().toString() + mes + dia;
    const isBirthdayPassedThisYear = birthdate < actualDate;

    const age = isBirthdayPassedThisYear ? new Date().getFullYear() - ano : new Date().getFullYear() - ano - 1;

    return age;
}

module.exports = {
    calcularLetra,
    reduzirCalculo,
    validarVogais,
    somarLetras,
    validarData,
    calcularRealizacao,
    calcularDesafio,
    ausenciaCarmica,
    anoPessoal,
    quadrimestre,
    idade

}

