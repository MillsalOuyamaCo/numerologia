import React from 'react';

//react-bootstrap
import {
    Card,
    Container,
    Col,
    Row
} from 'react-bootstrap';

export interface Calculo {
    nome_teste: string,
    idade: number,
    alma: string,
    aparencia: string,
    destino: string,
    primeiroCiclo: string,
    segundoCiclo: string,
    terceiroCiclo: string,
    primeiraVogal: string,
    licaoVida: string,
    dia_natalicio: string,
    data_nasc: string,
    poder: string,
    //repeticaoNumero: RepeticaoNumero,
    temperamento: string,
    temperamentoNumero: string,
    vibracao: string,
    realizacaoDt1: string,
    realizacaoDt2: string,
    realizacaoDt3: string,
    realizacaoDt4: string,
    realizacaoDt5: string,
    realizacaoDt6: string,
    realizacaoDt7: string,
    realizacaoUm: string,
    realizacaoDois: string,
    realizacaoTres: string,
    realizacaoQuatro: string,
    desafioDt1: string,
    desafioDt2: string,
    desafioDt3: string,
    desafioDt4: string,
    desafioDt5: string,
    desafioDt6: string,
    desafioDt7: string,
    desafioUm: string,
    desafioDois: string,
    desafioTres: string,
    desafioQuatro: string,
    numeros: string,
    numeroCarmicoUm: string,
    numeroCarmicoDois: string,
    numeroCarmicoTres: string,
    numeroCarmicoQuatro: string,
    anoPessoal: string,
    ausenciaCarmica: string[],
    quadrimestres: Quadrimestre[]
}

export interface Quadrimestre {
    dataInicial: string,
    dataFinal: string,
    resultadoCalculo: string
}

export interface RepeticaoNumero {
    [index: number]: number
}

interface CalculoProps {
    calculo: Calculo;
}

const CalculoResult: React.FC<CalculoProps> = ({ calculo }) => {
    return (
        <Container className='mt-5'>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h2>Resumo</h2>
                            <br />
                            <Card.Text><strong className="font-weight-bold">Nome: </strong> {calculo.nome_teste}</Card.Text>
                            <Card.Text><strong className="font-weight-bold">Idade: </strong> {calculo.idade}</Card.Text>
                            <Card.Text><strong className="font-weight-bold">Data Aniversário: </strong> {calculo.data_nasc}</Card.Text>
                            <Card.Text><strong className="font-weight-bold">Vibração: </strong> {calculo.vibracao}</Card.Text>
                            <Card.Text><strong className="font-weight-bold">Temperamento: </strong> {calculo.temperamentoNumero} - {calculo.temperamento}</Card.Text>
                            <Card.Text><strong className="font-weight-bold">Alma: </strong> {calculo.alma}</Card.Text>
                            <Card.Text><strong className="font-weight-bold">Aparência: </strong> {calculo.aparencia}</Card.Text>
                            <Card.Text><strong className="font-weight-bold">Destino: </strong> {calculo.destino}</Card.Text>
                            <Card.Text><strong className="font-weight-bold">Primeira Vogal: </strong> {calculo.primeiraVogal}</Card.Text>
                            <Card.Text><strong className="font-weight-bold"> Data Natalicia / Lição de Vida: </strong> {calculo.licaoVida}</Card.Text>
                            <Card.Text><strong className="font-weight-bold">Dia Natalicio: </strong> {calculo.dia_natalicio}</Card.Text>
                            <Card.Text><strong className="font-weight-bold">Poder: </strong> {calculo.poder}</Card.Text>
                            <Card.Text><strong className="font-weight-bold">1º Ciclo: </strong> {calculo.primeiroCiclo}</Card.Text>
                            <Card.Text><strong className="font-weight-bold">2º Ciclo: </strong> {calculo.segundoCiclo}</Card.Text>
                            <Card.Text><strong className="font-weight-bold">3º Ciclo: </strong> {calculo.terceiroCiclo}</Card.Text>

                            {
                                calculo.numeroCarmicoUm !== "" && calculo.numeroCarmicoUm !== undefined &&
                                <Card.Text><strong className="font-weight-bold">Número Carmico Um: </strong> {calculo.numeroCarmicoUm}</Card.Text>
                            }
                            {
                                calculo.numeroCarmicoDois !== "" && calculo.numeroCarmicoDois !== undefined &&
                                <Card.Text><strong className="font-weight-bold">Número Carmico Dois: </strong> {calculo.numeroCarmicoDois}</Card.Text>
                            }
                            {
                                calculo.numeroCarmicoTres !== "" && calculo.numeroCarmicoTres !== undefined &&
                                <Card.Text><strong className="font-weight-bold">Número Carmico Três: </strong> {calculo.numeroCarmicoTres}</Card.Text>
                            }
                            {
                                calculo.numeroCarmicoQuatro !== "" && calculo.numeroCarmicoQuatro !== undefined &&
                                <Card.Text><strong className="font-weight-bold">Número Carmico Quatro: </strong> {calculo.numeroCarmicoQuatro}</Card.Text>
                            }
                            <Card.Text><strong className="font-weight-bold">Ausência Carmica: </strong>
                                {calculo.ausenciaCarmica.map((value, index) => {
                                    return (value + ", ");
                                })}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <br />
                <Col>
                    <Card>
                        <Card.Body>
                            {/* <h2>Realizações e Desafios</h2> */}
                            <br />
                            <h4>Realizações</h4>
                            <Card.Text><strong className="font-weight-bold">Dos: </strong> {calculo.realizacaoDt1} <strong className="font-weight-bold">aos: </strong> {calculo.realizacaoDt2} <strong className="font-weight-bold">Anos = </strong> {calculo.realizacaoUm}</Card.Text>
                            <Card.Text><strong className="font-weight-bold">Dos: </strong> {calculo.realizacaoDt3} <strong className="font-weight-bold">aos: </strong> {calculo.realizacaoDt4} <strong className="font-weight-bold">Anos = </strong> {calculo.realizacaoDois}</Card.Text>
                            <Card.Text><strong className="font-weight-bold">Dos: </strong> {calculo.realizacaoDt5} <strong className="font-weight-bold">aos: </strong> {calculo.realizacaoDt6} <strong className="font-weight-bold">Anos = </strong> {calculo.realizacaoTres}</Card.Text>
                            <Card.Text><strong className="font-weight-bold">Dos: </strong> {calculo.realizacaoDt7} <strong className="font-weight-bold">em diante </strong> {calculo.realizacaoQuatro}</Card.Text>
                            <br />
                            <h4>Desafios</h4>
                            <Card.Text><strong className="font-weight-bold">Dos: </strong> {calculo.desafioDt1} <strong className="font-weight-bold">aos: </strong> {calculo.desafioDt2} <strong className="font-weight-bold">Anos = </strong> {calculo.desafioUm}</Card.Text>
                            <Card.Text><strong className="font-weight-bold">Dos: </strong> {calculo.desafioDt3} <strong className="font-weight-bold">aos: </strong> {calculo.desafioDt4} <strong className="font-weight-bold">Anos = </strong> {calculo.desafioDois}</Card.Text>
                            <Card.Text><strong className="font-weight-bold">Dos: </strong> {calculo.desafioDt5} <strong className="font-weight-bold">aos: </strong> {calculo.desafioDt6} <strong className="font-weight-bold">Anos = </strong> {calculo.desafioTres}</Card.Text>
                            <Card.Text><strong className="font-weight-bold">Dos: </strong> {calculo.desafioDt7} <strong className="font-weight-bold">em diante </strong> {calculo.desafioQuatro}</Card.Text>
                            <br />
                            <Card.Text><strong className="font-weight-bold">Ano Pessoal </strong> {calculo.anoPessoal}</Card.Text>
                            <br />
                            <h4>Quadrimestres</h4>
                            {
                                calculo.quadrimestres.map((quadrimestre, index) => {
                                    return (
                                        <Card.Text><strong className="font-weight-bold">1º De: </strong> {quadrimestre.dataInicial} <strong className="font-weight-bold"> à: </strong> {quadrimestre.dataFinal} <strong className="font-weight-bold"> Quadrimestre = </strong> {quadrimestre.resultadoCalculo}</Card.Text>
                                    );
                                })
                            }
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    );
}

export default CalculoResult;