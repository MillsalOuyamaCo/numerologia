const express = require("express");
const app = express();
const cors = require("cors");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const { json } = require("body-parser");
const { empty } = require("statuses");

//variaveis de funções para validção
const validaVibracao = require("./vibração")
const validaAlma = require("./alma")
const validaAparencia = require("./aparencia")
const validaDestino = require("./destino")
const validaLicaoVida = require("./lição_vida")
const validaDiaNatalicio = require("./dia_natalicio")
const validaCarmica = require("./carmica")
const validaVogal = require("./vogal");
const validaRealizacao = require("./realizacao");
const validaDesafio = require("./desafio")
const validaCiclo = require("./ciclos");
const validaPoder = require("./poder");
const validaAnoPessoal = require("./ano_pessoal");
const validaTemperamento = require("./temperamento");

const letra = require("./nome");
//const reduzirCalculo = require("./nome");


app.use(cors());

//config
//Template Engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//BODYPARSER
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get("/cadastro", function (req, res) {
    res.render('formulario');
})


app.post("/add", function (req, res) {

    console.log(req.body)
    /*
 1.VIBRACÃO
 2.ALMA
 3.APARÊNCIA
 4.DESTINO 
 5.LIÇÃO DE VIDA
 6.DIA NATALÍCIO
 7.LIÇÕES CÁRMICAS
 8.PRIMEIRA VOGAL
 9.REALIZAÇÕES
 10.DESAFIOS
 11.CICLOS
 12.NÚMERO DE PODER.
 13.ANO PESSOAL
 14.QUADRIMESTRE
 15.MÊS PESSOAL
 16.DIA PESSOAL
 17.TEMPERAMENTO
 18.ASSINATURA.
    */

    var rtVibracao = validaVibracao(req.body.vibracao, res)
    var rtAparencia = validaAparencia(req.body.aparencia, res)
    var rtAlma = validaAlma(req.body.alma, res)
    var rtDestino = validaDestino(req.body.destino, res)
    var rtLicaoVida = validaLicaoVida(req.body.licao_vida, res)
    var rtDiaNatalicio = validaDiaNatalicio(req.body.dia_natalicio, res)

    var rtCarmica = validaCarmica(req.body.carmicaUm, res)
    var rtCarmicaDois = validaCarmica(req.body.carmicaDois, res)
    var rtCarmicaTres = validaCarmica(req.body.carmicaTres, res)
    var rtVogal = validaVogal(req.body.vogal, res)

    var rtDesafioUm = validaDesafio(req.body.desafioUm, res)
    var rtDesafioDois = validaDesafio(req.body.desafioDois, res)
    var rtDesafioTres = validaDesafio(req.body.desafioTres, res)
    var rtDesafioQuatro = validaDesafio(req.body.desafioQuatro, res)


    var rtRealizacaoUm = validaRealizacao(req.body.realizacaoUm, res)
    var rtRealizacaoDois = validaRealizacao(req.body.realizacaoDois, res)
    var rtRealizacaoTres = validaRealizacao(req.body.realizacaoTres, res)
    var rtRealizacaoQuatro = validaRealizacao(req.body.realizacaoQuatro, res)



    var rtCicloFormativo = validaCiclo(req.body.ciclo_formativo, res)
    var rtCicloProdutivo = validaCiclo(req.body.ciclo_produtivo, res)
    var rtCicloColheita = validaCiclo(req.body.ciclo_colheita, res)
    var rtPoder = validaPoder(req.body.poder, res)
    var rtAnoPessoal = validaAnoPessoal(req.body.ano_pessoal)
    var rtQuadrimestreUm = validaAnoPessoal(req.body.quadrimestreUm, res)
    var rtQuadrimestreDois = validaAnoPessoal(req.body.quadrimestreDois, res)
    var rtQuadrimestreTres = validaAnoPessoal(req.body.quadrimestreTres, res)
    var rtTemperamento = validaTemperamento(req.body.temperamento)

    var tst = { id: "-", descrição: "-" };

    var data = req.body.quadrimestreDt1.split('-').reverse().join('/');
    console.log(data);

    // resultado = validaAlma(req.body.alma, res);
    //console.log(resultado.descrição)

    res.render('resultado', {
        //vibração
        numero_vibracao: rtVibracao.id, descricao_vibracao: rtVibracao.descrição,
        //Alma
        numero_alma: rtAlma.id, descricao_alma: rtAlma.descrição,
        //Aparencia
        numero_aparencia: rtAparencia.id, descricao_aparencia: rtAparencia.descrição,
        //Destino
        numero_destino: rtDestino.id, descricao_destino: rtDestino.descrição,
        //Lição de Vida
        numero_licaoVida: rtLicaoVida.id, descricao_licaoVida: rtLicaoVida.descrição,
        //Dia Natalicio
        numero_diaNatalicio: rtDiaNatalicio.id, descricao_diaNatalicio: rtDiaNatalicio.descrição,
        //Lições Carmicas 1
        numero_carmicaUm: rtCarmica.id, descricao_carmicaUm: rtCarmica.descrição,
        //Lições Carmicas 2
        numero_carmicaDois: rtCarmicaDois.id, descricao_carmicaDois: rtCarmicaDois.descrição,
        //Lições Carmicas 3
        numero_carmicaTres: rtCarmicaTres.id, descricao_carmicaTres: rtCarmicaTres.descrição,
        //Vogal
        numero_vogal: rtVogal.id, descricao_vogal: rtVogal.descrição,
        //Realizações
        //numero_realizacao: rtRealizacao.id, descricao_realizacao: rtRealizacao.descrição,

        //ciclo formativo
        numero_formativo: rtCicloFormativo.id, descricao_formativo: rtCicloFormativo.descrição,
        //ciclo produtivo
        numero_produtivo: rtCicloProdutivo.id, descricao_produtivo: rtCicloProdutivo.descrição,
        //ciclo colheita
        numero_colheita: rtCicloColheita.id, descricao_colheita: rtCicloColheita.descrição,

        //anos desafio
        desafioDt1: req.body.desafioDt1,
        desafioDt2: req.body.desafioDt2,
        desafioDt3: req.body.desafioDt3,
        desafioDt4: req.body.desafioDt4,
        desafioDt5: req.body.desafioDt5,
        desafioDt6: req.body.desafioDt6,
        desafioDt7: req.body.desafioDt7,
        //Desafio 1
        numero_desafioUm: rtDesafioUm.id, descricao_desafioUm: rtDesafioUm.descrição,

        //Desafio 2
        numero_desafioDois: rtDesafioDois.id, descricao_desafioDois: rtDesafioDois.descrição,

        //Desafio 3
        numero_desafioTres: rtDesafioTres.id, descricao_desafioTres: rtDesafioTres.descrição,

        //Desafio 4
        numero_desafioQuatro: rtDesafioQuatro.id, descricao_desafioQuatro: rtDesafioQuatro.descrição,

        //anos realizacao
        realizacaoDt1: req.body.realizacaoDt1,
        realizacaoDt2: req.body.realizacaoDt2,
        realizacaoDt3: req.body.realizacaoDt3,
        realizacaoDt4: req.body.realizacaoDt4,
        realizacaoDt5: req.body.realizacaoDt5,
        realizacaoDt6: req.body.realizacaoDt6,
        realizacaoDt7: req.body.realizacaoDt7,
        //realizacao 1
        numero_realizacaoUm: rtRealizacaoUm.id, descricao_realizacaoUm: rtRealizacaoUm.descrição,

        //realizacao 2
        numero_realizacaoDois: rtRealizacaoDois.id, descricao_realizacaoDois: rtRealizacaoDois.descrição,

        //realizacao 3
        numero_realizacaoTres: rtRealizacaoTres.id, descricao_realizacaoTres: rtRealizacaoTres.descrição,

        //realizacao 4
        numero_realizacaoQuatro: rtRealizacaoQuatro.id, descricao_realizacaoQuatro: rtRealizacaoQuatro.descrição,


        //PODER
        numero_poder: rtPoder.id, descricao_poder: rtPoder.descrição,

        //ano pessoal
        numero_ano_pessoal: rtAnoPessoal.id, descricao_ano_pessoal: rtAnoPessoal.descrição,
        //ano pessoal data
        anoPessoalUm: req.body.anoPessoalUm.split('-').reverse().join('/'),
        anoPessoalDois: req.body.anoPessoalDois.split('-').reverse().join('/'),

        //quadrimestre
        quadrimestreDt1: req.body.quadrimestreDt1.split('-').reverse().join('/'),
        quadrimestreDt2: req.body.quadrimestreDt2.split('-').reverse().join('/'),
        quadrimestreDt3: req.body.quadrimestreDt3.split('-').reverse().join('/'),
        quadrimestreDt4: req.body.quadrimestreDt4.split('-').reverse().join('/'),
        quadrimestreDt5: req.body.quadrimestreDt5.split('-').reverse().join('/'),
        quadrimestreDt6: req.body.quadrimestreDt6.split('-').reverse().join('/'),

        //quadrimestre 1
        numero_quadrimestreUm: rtQuadrimestreUm.id, descricao_quadrimestreUm: rtQuadrimestreUm.descrição,

        //quadrimestre 2
        numero_quadrimestreDois: rtQuadrimestreDois.id, descricao_quadrimestreDois: rtQuadrimestreDois.descrição,

        //quadrimestre 3
        numero_quadrimestreTres: rtQuadrimestreTres.id, descricao_quadrimestreTres: rtQuadrimestreTres.descrição,

        //Temperamento
        numero_temperamento: rtTemperamento.id, descricao_temperamento: rtTemperamento.descrição,

        //teste seleção
        selecao: tst
    })


})

app.get("/", function (req, res) {

    res.render('nome')
    //res.send(alma[48].descrição);
})

app.post("/calculo", function (req, res) {

    var nome_tes = req.body.nome_mil.toUpperCase()
    var dataTela = req.body.data_nasc.split('-').reverse().join('/')
    data = dataTela.split('/');
    var dia = data[0]
    var mes = data[1]
    var ano = data[2]

    var dia_natalicio = dia;

    console.log(dia + mes + ano);

    var array_letra = nome_tes.split('');
    //array.split('');

    console.log('entrando no calculo letra')
    console.log(array_letra)

    //calcularLetra(array_letra);
    var retornoNumeros = letra.calcularLetra(array_letra);

    var destinoResumido = '';

    console.log('CALCULAR DESTINO')
    var destinoRetorno = letra.somarLetras(retornoNumeros);

    if (destinoRetorno[0].toString().length > 1) {
        if (destinoRetorno[0] > 78) {
            // if(destinoRetorno[0].toString().length > 2){
            var destino = destinoRetorno[1].toString()
            destinoResumido = destinoRetorno[1].toString();
        } else {
            var destino = destinoRetorno[0].toString().concat('/', destinoRetorno[1].toString())
            destinoResumido = destinoRetorno[1].toString();

        }
    } else {
        var destino = destinoRetorno[0].toString()
        destinoResumido = destinoRetorno[0].toString();
    }

    var vogaisCons = letra.validarVogais(array_letra);
    var vogais = vogaisCons[0];
    var retornoNumerosVogais = letra.calcularLetra(vogaisCons[0]);
    var retornoNumerosCons = letra.calcularLetra(vogaisCons[1]);

    var almaRetorno = letra.somarLetras(retornoNumerosVogais);

    if (almaRetorno[0].toString().length > 1 && almaRetorno[0].toString() == '11'
        || almaRetorno[0].toString() == '22') {
        var alma = almaRetorno[0].toString().concat('/', almaRetorno[1].toString())
    } else if (almaRetorno[0].toString().length > 1) {
        var alma = almaRetorno[1].toString()
    } else {
        var alma = almaRetorno[0].toString()
    }

    var aparenciaRetorno = letra.somarLetras(retornoNumerosCons);
    if (aparenciaRetorno[0].toString().length > 1 && aparenciaRetorno[0].toString() == '11'
        || aparenciaRetorno[0].toString() == '22') {
        var aparencia = aparenciaRetorno[0].toString().concat('/', aparenciaRetorno[1].toString())
    } else if (aparenciaRetorno[0].toString().length > 1) {
        var aparencia = aparenciaRetorno[1].toString()
    } else {
        var aparencia = aparenciaRetorno[0].toString()
    }

    /*
     var retornoAno = letra.validarData(ano.split(''))
     console.log(ano)
    */

    //reduzir ano
    var anoNatal = letra.somarLetras(ano)
    anoNatal = anoNatal[0].toString()

    var retornoMes = letra.somarLetras(mes);
    if (mes != '11') {
        if (retornoMes[0].toString().length > 1) {
            var primeiroCiclo = retornoMes[1].toString()
        } else {
            var primeiroCiclo = retornoMes[0].toString()
        }

    } else {
        var primeiroCiclo = '11'
    }
    var retornoDia = letra.somarLetras(dia);
    if (dia == '11' || dia == '29') {
        var segundoCiclo = '11'
    } else if (retornoDia[0].toString().length > 1) {
        var segundoCiclo = retornoDia[1].toString()
    } else {
        var segundoCiclo = retornoDia[0].toString()
    }




    var retornoAno = letra.somarLetras(ano);
    if (retornoAno[0].toString().length > 1) {
        var terceiroCiclo = retornoAno[1].toString()
    } else {
        var terceiroCiclo = retornoAno[0].toString()
    }

    var dataCompleta = [dia, mes, anoNatal]
    var licaoVidaResumido = '';

    var retornoLicaoVida = letra.somarLetras(dataCompleta)
    if (retornoLicaoVida[0].toString().length > 1) {
        var licaoVida = retornoLicaoVida[0].toString().concat('/', retornoLicaoVida[1].toString())
        licaoVidaResumido = retornoLicaoVida[1].toString()
    } else {
        var licaoVida = retornoLicaoVida[0].toString()
        licaoVidaResumido = retornoLicaoVida[0].toString()
    }



    var somaPoderDestino = parseInt(licaoVidaResumido) + parseInt(destinoResumido);
    var retornoPoder = letra.somarLetras(somaPoderDestino.toString().split(''))

    if (somaPoderDestino == 11 || somaPoderDestino == 29) {
        var poder = '11/2'
    }
    else if (retornoPoder[0].toString().length > 1) {
        var poder = retornoPoder[1].toString()
    } else {
        var poder = retornoPoder[0].toString()
    }

    var diaResumido = segundoCiclo;
    var vibracao = '';

    if (diaResumido == 3 || diaResumido == 6 || diaResumido == 9) {
        vibracao = 'ARTÍSTICO (3,6,9)'
    } else if (diaResumido == 1 || diaResumido == 5 || diaResumido == 7) {
        vibracao = 'MENTAL (1,5,7)'
    } else if (diaResumido == 2 || diaResumido == 4 || diaResumido == 8) {
        vibracao = 'GERENCIAMENTO (2,4,8)'
    }

    //  realização

    var realizacao = letra.calcularRealizacao(licaoVidaResumido, segundoCiclo, primeiroCiclo, terceiroCiclo)

    var realizacaoIdade = realizacao.resultadoIdade
    var resultadoRealizacao = realizacao.resultadoRealizacao

    console.log(realizacao.resultadoIdade)

    var realizacaoDt1 = realizacaoIdade[0]
    var realizacaoDt2 = realizacaoIdade[1]
    var realizacaoDt3 = realizacaoIdade[2]
    var realizacaoDt4 = realizacaoIdade[3]
    var realizacaoDt5 = realizacaoIdade[4]
    var realizacaoDt6 = realizacaoIdade[5]
    var realizacaoDt7 = realizacaoIdade[6]

    var realizacaoUm = resultadoRealizacao[0]
    var realizacaoDois = resultadoRealizacao[1]
    var realizacaoTres = resultadoRealizacao[2]
    var realizacaoQuatro = resultadoRealizacao[3]


    // desafio

    var desafio = letra.calcularDesafio(licaoVidaResumido, segundoCiclo, primeiroCiclo, terceiroCiclo)

    var desafioIdade = desafio.resultadoIdade
    var resultadoDesafio = desafio.resultadoDesafio

    console.log(desafio.resultadoIdade)

    var desafioDt1 = desafioIdade[0]
    var desafioDt2 = desafioIdade[1]
    var desafioDt3 = desafioIdade[2]
    var desafioDt4 = desafioIdade[3]
    var desafioDt5 = desafioIdade[4]
    var desafioDt6 = desafioIdade[5]
    var desafioDt7 = desafioIdade[6]

    var desafioUm = resultadoDesafio[0]
    var desafioDois = resultadoDesafio[1]
    var desafioTres = resultadoDesafio[2]
    var desafioQuatro = resultadoDesafio[3]


    console.log(dataCompleta)
    console.log(retornoLicaoVida)

    console.log('DESTINO = ' + destino)
    console.log('ALMA VOGAIS = ' + alma)
    console.log('APARENCIA CONSOANTES = ' + aparencia)

    console.log('array numero destino = ' + retornoNumeros.toString())
    console.log('array NOME destino = ' + array_letra.toString())
    console.log('array numero alma vogais = ' + retornoNumerosVogais.toString())
    console.log('array NOME alma vogais = ' + vogaisCons[0].toString())
    console.log('array numero aparencia consoantes = ' + retornoNumerosCons.toString())
    console.log('array NOME aparencia consoantes = ' + vogaisCons[1].toString())

    console.log('dia nascimento - lição de vida = ' + dia)
    console.log('mes nascimento - lição de vida = ' + mes)
    console.log('ano nascimento - lição de vida = ' + anoNatal)


    console.log('CICLO 1 = ' + primeiroCiclo)
    console.log('CICLO 2 = ' + segundoCiclo)
    console.log('CICLO 3 = ' + terceiroCiclo)
    console.log('PODER === ' + poder)
    console.log('VIBRAÇÃO === ' + vibracao)
    console.log('data natalicia  = ' + licaoVida)

    console.log('impressão nome = ' + nome_tes);
    console.log('data = ' + data)

    console.log(dia + mes + ano);
    console.log(2 - 5);

    /*
     var repeticaoNumero = {};
     retornoNumeros.forEach(function(x) { repeticaoNumero[x] = (repeticaoNumero[x] || 0)+1; });
 */



    // contar quantidade de vezes que os numeros se repetem
    var map = retornoNumeros.reduce(function (prev, cur) {
        prev[cur] = (prev[cur] || 0) + 1;
        return prev;
    }, {});

    repeticaoNumero = Object.values(map)

    var temperamento = '';
    var temperamentoNumero;
    if (repeticaoNumero[0] == 1 || repeticaoNumero[0] == 8) {
        temperamento = 'MENTAL'
        temperamentoNumero = repeticaoNumero[0]
    } else if (repeticaoNumero[0] == 2 || repeticaoNumero[0] == 3 || repeticaoNumero[0] == 6) {
        temperamento = 'EMOCIONAL'
        temperamentoNumero = repeticaoNumero[0]
    } else if (repeticaoNumero[0] == 4 || repeticaoNumero[0] == 5) {
        temperamento = 'FÍSICO'
        temperamentoNumero = repeticaoNumero[0]
    } else if (repeticaoNumero[0] == 7 || repeticaoNumero[0] == 9) {
        temperamento = 'INTUITIVO'
        temperamentoNumero = repeticaoNumero[0]
    }

    console.log(Object.keys(map))
    console.log(Object.values(map))


    var numeros_existe = Object.keys(map);
    var retornoAusencia = letra.ausenciaCarmica(numeros_existe)

    console.log(retornoAusencia)

    //numeros carmicos
    if (destinoRetorno[0].toString() == '13' || destinoRetorno[0].toString() == '14'
        || destinoRetorno[0].toString() == '16' || destinoRetorno[0].toString() == '19') {
        var numeroCarmicoUm = destinoRetorno[0].toString();
    }

    if (almaRetorno[0].toString() == '13' || almaRetorno[0].toString() == '14'
        || almaRetorno[0].toString() == '16' || almaRetorno[0].toString() == '19') {
        var numeroCarmicoDois = almaRetorno[0].toString();
    }

    if (aparenciaRetorno[0].toString() == '13' || aparenciaRetorno[0].toString() == '14'
        || aparenciaRetorno[0].toString() == '16' || aparenciaRetorno[0].toString() == '19') {
        var numeroCarmicoTres = aparenciaRetorno[0].toString();
    }

    if (retornoLicaoVida[0].toString() == '13' || retornoLicaoVida[0].toString() == '14'
        || retornoLicaoVida[0].toString() == '16' || retornoLicaoVida[0].toString() == '19') {
        var numeroCarmicoQuatro = retornoLicaoVida[0].toString();
    }

    const resultadoAnoPessoal = letra.anoPessoal(dia, mes);

    //res.render('resumo' , {
    res.send({
        nome_teste: nome_tes,
        alma: alma,
        aparencia: aparencia,
        destino: destino,
        primeiroCiclo: primeiroCiclo,
        segundoCiclo: segundoCiclo,
        terceiroCiclo: terceiroCiclo,
        primeiraVogal: vogais[0],
        licaoVida: licaoVida,
        dia_natalicio: dia_natalicio,
        data_nasc: dataTela,
        poder: poder,
        repeticaoNumero: repeticaoNumero,
        temperamento: temperamento,
        temperamentoNumero: temperamentoNumero,
        vibracao: vibracao,
        realizacaoDt1: realizacaoDt1,
        realizacaoDt2: realizacaoDt2,
        realizacaoDt3: realizacaoDt3,
        realizacaoDt4: realizacaoDt4,
        realizacaoDt5: realizacaoDt5,
        realizacaoDt6: realizacaoDt6,
        realizacaoDt7: realizacaoDt7,
        realizacaoUm: realizacaoUm,
        realizacaoDois: realizacaoDois,
        realizacaoTres: realizacaoTres,
        realizacaoQuatro: realizacaoQuatro,
        //desafio
        desafioDt1: desafioDt1,
        desafioDt2: desafioDt2,
        desafioDt3: desafioDt3,
        desafioDt4: desafioDt4,
        desafioDt5: desafioDt5,
        desafioDt6: desafioDt6,
        desafioDt7: desafioDt7,
        desafioUm: desafioUm,
        desafioDois: desafioDois,
        desafioTres: desafioTres,
        desafioQuatro: desafioQuatro,
        //numero carmico
        numeroCarmicoUm: numeroCarmicoUm,
        numeroCarmicoDois: numeroCarmicoDois,
        numeroCarmicoTres: numeroCarmicoTres,
        numeroCarmicoQuatro: numeroCarmicoQuatro,
        ausenciaCarmica: retornoAusencia,
        numeros: retornoNumeros.toString(),
    })
    //res.send(alma[48].descrição);
})













app.post("/novoMapa", function (req, res) {

    /*
 1.VIBRACÃO
 2.ALMA
 3.APARÊNCIA
 4.DESTINO 
 5.LIÇÃO DE VIDA
 6.DIA NATALÍCIO
 7.LIÇÕES CÁRMICAS
 8.PRIMEIRA VOGAL
 9.REALIZAÇÕES
 10.DESAFIOS
 11.CICLOS
 12.NÚMERO DE PODER.
 13.ANO PESSOAL
 14.QUADRIMESTRE
 15.MÊS PESSOAL
 16.DIA PESSOAL
 17.TEMPERAMENTO
 18.ASSINATURA.
    */

    console.log('---------------------------------------------------------- ' + req.body.temperamento)
    console.log(req.body)

    //var rtVibracao = validaVibracao(req.body.vibracao, res)
    var rtVibracao = validaVibracao(req.body.segundoCiclo, res)
    var rtAparencia = validaAparencia(req.body.aparencia, res)
    var rtAlma = validaAlma(req.body.alma, res)
    var rtDestino = validaDestino(req.body.destino, res)
    var rtLicaoVida = validaLicaoVida(req.body.licaoVida, res)
    var rtDiaNatalicio = validaDiaNatalicio(req.body.dia_natalicio, res)

    var rtCarmica = validaCarmica(req.body.numeroCarmicoUm, res)
    var rtCarmicaDois = validaCarmica(req.body.numeroCarmicoDois, res)
    var rtCarmicaTres = validaCarmica(req.body.numeroCarmicoTres, res)
    var rtCarmicaQuatro = validaCarmica(req.body.numeroCarmicoQuatro, res)
    var rtVogal = validaVogal(req.body.primeiraVogal, res)

    var rtDesafioUm = validaDesafio(req.body.desafioUm, res)
    var rtDesafioDois = validaDesafio(req.body.desafioDois, res)
    var rtDesafioTres = validaDesafio(req.body.desafioTres, res)
    var rtDesafioQuatro = validaDesafio(req.body.desafioQuatro, res)


    var rtRealizacaoUm = validaRealizacao(req.body.realizacaoUm, res)
    var rtRealizacaoDois = validaRealizacao(req.body.realizacaoDois, res)
    var rtRealizacaoTres = validaRealizacao(req.body.realizacaoTres, res)
    var rtRealizacaoQuatro = validaRealizacao(req.body.realizacaoQuatro, res)



    var rtCicloFormativo = validaCiclo(req.body.primeiroCiclo, res)
    var rtCicloProdutivo = validaCiclo(req.body.segundoCiclo, res)
    var rtCicloColheita = validaCiclo(req.body.terceiroCiclo, res)
    var rtPoder = validaPoder(req.body.poder, res)
    var rtAnoPessoal = validaAnoPessoal(req.body.ano_pessoal)
    //  var rtQuadrimestreUm = validaAnoPessoal(req.body.quadrimestreUm, res)
    //  var rtQuadrimestreDois = validaAnoPessoal(req.body.quadrimestreDois, res)
    // var rtQuadrimestreTres = validaAnoPessoal(req.body.quadrimestreTres, res)
    var rtTemperamento = validaTemperamento(req.body.temperamento)


    //res.render('resultadoNovo', {
    res.send({
        //vibração
        numero_vibracao: rtVibracao.id, descricao_vibracao: rtVibracao.descrição,
        //Alma
        numero_alma: rtAlma.id, descricao_alma: rtAlma.descrição,
        //Aparencia
        numero_aparencia: rtAparencia.id, descricao_aparencia: rtAparencia.descrição,
        //Destino
        numero_destino: rtDestino.id, descricao_destino: rtDestino.descrição,
        //Lição de Vida
        numero_licaoVida: rtLicaoVida.id, descricao_licaoVida: rtLicaoVida.descrição,
        //Dia Natalicio
        numero_diaNatalicio: rtDiaNatalicio.id, descricao_diaNatalicio: rtDiaNatalicio.descrição,
        //Lições Carmicas 1
        numero_carmicaUm: rtCarmica.id, descricao_carmicaUm: rtCarmica.descrição,
        //Lições Carmicas 2
        numero_carmicaDois: rtCarmicaDois.id, descricao_carmicaDois: rtCarmicaDois.descrição,
        //Lições Carmicas 3
        numero_carmicaTres: rtCarmicaTres.id, descricao_carmicaTres: rtCarmicaTres.descrição,
        //Lições Carmicas 4
        numero_carmicaQuatro: rtCarmicaQuatro.id, descricao_carmicaQuatro: rtCarmicaQuatro.descrição,
        //Vogal
        numero_vogal: rtVogal.id, descricao_vogal: rtVogal.descrição,
        //Realizações
        //numero_realizacao: rtRealizacao.id, descricao_realizacao: rtRealizacao.descrição,

        //ciclo formativo
        numero_formativo: rtCicloFormativo.id, descricao_formativo: rtCicloFormativo.descrição,
        //ciclo produtivo
        numero_produtivo: rtCicloProdutivo.id, descricao_produtivo: rtCicloProdutivo.descrição,
        //ciclo colheita
        numero_colheita: rtCicloColheita.id, descricao_colheita: rtCicloColheita.descrição,

        //anos desafio
        desafioDt1: req.body.desafioDt1,
        desafioDt2: req.body.desafioDt2,
        desafioDt3: req.body.desafioDt3,
        desafioDt4: req.body.desafioDt4,
        desafioDt5: req.body.desafioDt5,
        desafioDt6: req.body.desafioDt6,
        desafioDt7: req.body.desafioDt7,
        //Desafio 1
        numero_desafioUm: rtDesafioUm.id, descricao_desafioUm: rtDesafioUm.descrição,

        //Desafio 2
        numero_desafioDois: rtDesafioDois.id, descricao_desafioDois: rtDesafioDois.descrição,

        //Desafio 3
        numero_desafioTres: rtDesafioTres.id, descricao_desafioTres: rtDesafioTres.descrição,

        //Desafio 4
        numero_desafioQuatro: rtDesafioQuatro.id, descricao_desafioQuatro: rtDesafioQuatro.descrição,

        //anos realizacao
        realizacaoDt1: req.body.realizacaoDt1,
        realizacaoDt2: req.body.realizacaoDt2,
        realizacaoDt3: req.body.realizacaoDt3,
        realizacaoDt4: req.body.realizacaoDt4,
        realizacaoDt5: req.body.realizacaoDt5,
        realizacaoDt6: req.body.realizacaoDt6,
        realizacaoDt7: req.body.realizacaoDt7,
        //realizacao 1
        numero_realizacaoUm: rtRealizacaoUm.id, descricao_realizacaoUm: rtRealizacaoUm.descrição,

        //realizacao 2
        numero_realizacaoDois: rtRealizacaoDois.id, descricao_realizacaoDois: rtRealizacaoDois.descrição,

        //realizacao 3
        numero_realizacaoTres: rtRealizacaoTres.id, descricao_realizacaoTres: rtRealizacaoTres.descrição,

        //realizacao 4
        numero_realizacaoQuatro: rtRealizacaoQuatro.id, descricao_realizacaoQuatro: rtRealizacaoQuatro.descrição,


        //PODER
        numero_poder: rtPoder.id, descricao_poder: rtPoder.descrição,

        //ano pessoal
        numero_ano_pessoal: rtAnoPessoal.id, descricao_ano_pessoal: rtAnoPessoal.descrição,
        //ano pessoal data
        //anoPessoalUm: req.body.anoPessoalUm.split('-').reverse().join('/'),
        //anoPessoalDois: req.body.anoPessoalDois.split('-').reverse().join('/'),

        //quadrimestre
        /*
        quadrimestreDt1: req.body.quadrimestreDt1.split('-').reverse().join('/'), 
        quadrimestreDt2: req.body.quadrimestreDt2.split('-').reverse().join('/'),
        quadrimestreDt3: req.body.quadrimestreDt3.split('-').reverse().join('/'),
        quadrimestreDt4: req.body.quadrimestreDt4.split('-').reverse().join('/'),
        quadrimestreDt5: req.body.quadrimestreDt5.split('-').reverse().join('/'),
        quadrimestreDt6: req.body.quadrimestreDt6.split('-').reverse().join('/'),
    
        //quadrimestre 1
        numero_quadrimestreUm: rtQuadrimestreUm.id, descricao_quadrimestreUm: rtQuadrimestreUm.descrição,
    
        //quadrimestre 2
        numero_quadrimestreDois: rtQuadrimestreDois.id, descricao_quadrimestreDois: rtQuadrimestreDois.descrição,
    
        //quadrimestre 3
        numero_quadrimestreTres: rtQuadrimestreTres.id, descricao_quadrimestreTres: rtQuadrimestreTres.descrição,    
    */
        //Temperamento
        numero_temperamento: rtTemperamento.id, descricao_temperamento: rtTemperamento.descrição,


    })


})

/*
app.get("/", function(req, res){
    res.sendFile(__dirname + "/views/mapa.html");
})

app.get("/mapa", function(req, res){
    res.send("Bem vindos ao mapa Numerologico")
})
*/

app.listen(3001, function () {
    console.log("SERVIDOR RODANDO");
})