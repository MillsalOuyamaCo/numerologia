import React from 'react';

//react-bootstrap
import {
    Card,
    Container,
    Row,
    Col
} from 'react-bootstrap';

export interface CalculoObject {
    id: string;
    value: string;
    description: string;
}

export interface CalculoObjectArray {
    list: CalculoObject[];
    descrption: string;
}

export interface Calculo {
    name: CalculoObject,
    soul: CalculoObject,
    appearance: CalculoObject,
    destiny: CalculoObject,
    lifeCycle: CalculoObjectArray,
    firstVowel: CalculoObject,
    lifeLesson: CalculoObject,
    birthDay: CalculoObject,
    birthdate: CalculoObject,
    power: CalculoObject,
    temperament: CalculoObject,
    vibration: CalculoObject,
    spiersAndRealization: CalculoObjectArray,
    challenge: CalculoObjectArray,
    karmicNumber: CalculoObjectArray,
    karmicAbsences: CalculoObjectArray,
    personalYear: CalculoObject,
    quadrimesters: CalculoObjectArray,
    personalMonth: CalculoObject,
    personalDay: CalculoObject
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
                            <h2>Resultado</h2>
                            <br />
                            <Card.Text><strong className="font-weight-bold">Nome: </strong> {calculo.name.value}</Card.Text>
                            <Card.Text><strong className="font-weight-bold">Data Aniversário: </strong> {calculo.birthdate.value}</Card.Text>
                            <Card.Text><strong className="font-weight-bold">Vibração: </strong> {calculo.vibration.value}</Card.Text>
                            <Card.Text><strong className="font-weight-bold">Temperamento: </strong> {calculo.temperament.value}</Card.Text>
                            <Card.Text><strong className="font-weight-bold">Alma: </strong> {calculo.soul.value}</Card.Text>
                            <Card.Text><strong className="font-weight-bold">Aparência: </strong> {calculo.appearance.value}</Card.Text>
                            <Card.Text><strong className="font-weight-bold">Destino: </strong> {calculo.destiny.value}</Card.Text>
                            <Card.Text><strong className="font-weight-bold">Primeira Vogal: </strong> {calculo.firstVowel.value}</Card.Text>
                            <Card.Text><strong className="font-weight-bold">Data Natalicia / Lição de Vida: </strong> {calculo.lifeLesson.value}</Card.Text>
                            <Card.Text><strong className="font-weight-bold">Dia Natalicio: </strong> {calculo.birthDay.value}</Card.Text>
                            <Card.Text><strong className="font-weight-bold">Poder: </strong> {calculo.power.value}</Card.Text>
                            {
                                calculo.lifeCycle.list.map((lifeCycle, index) => {
                                    return (
                                        <Card.Text key={lifeCycle.id}><strong className="font-weight-bold">{index + 1}º Ciclo: </strong> {lifeCycle.value}</Card.Text>
                                    );
                                })
                            }
                            {
                                calculo.karmicNumber.list.map((karmicNumber, index) => {
                                    return (
                                        <Card.Text key={karmicNumber.id}><strong className="font-weight-bold">Número Carmico {index + 1}: </strong> {karmicNumber.value}</Card.Text>
                                    );
                                })
                            }

                            <Card.Text><strong className="font-weight-bold">Ausência Carmica: </strong>
                                {calculo.karmicAbsences.list.map((karmicAbsences, index) => {
                                    return (karmicAbsences.value + ", ");
                                })}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Body>
                            <h2>Realizações e Desafios</h2>
                            <br />
                            <h4>Realizações</h4>
                            {
                                calculo.spiersAndRealization.list.map((realizations, index) => {
                                    return (
                                        <Card.Text>{realizations.value}</Card.Text>
                                    );
                                })
                            }
                            <br />
                            <h4>Desafios</h4>
                            {
                                calculo.challenge.list.map((challenge, index) => {
                                    return (
                                        <Card.Text>{challenge.value}</Card.Text>
                                    );
                                })
                            }
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br />
        </Container>
    );
}

export default CalculoResult;