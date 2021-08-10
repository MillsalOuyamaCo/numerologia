import React, { FormEvent, useState } from 'react';

//react-bootstrap
import {
    Navbar,
    Container,
    Card,
    Form,
    Button,
    Row,
    Col,
} from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import numerologiaApi from '../../services/numerologiaApi';

//components
import CalculoForm, { Calculo, CalculoObject, CalculoObjectArray } from '../../components/Calculo/CalculoResult';
import MapaResult, { Mapa } from '../../components/Mapa/MapaResult';


function Home() {
    const CalculoObjectResponse: CalculoObject = {
        id: "",
        value: "",
        description: ""
    }
    
    const CalculoObjectArrayResponse: CalculoObjectArray = {
        list: [],
        descrption: ""
    }
    
    const CalculoResponse: Calculo = {
        name: CalculoObjectResponse,
        soul: CalculoObjectResponse,
        appearance: CalculoObjectResponse,
        destiny: CalculoObjectResponse,
        lifeCycle: CalculoObjectArrayResponse,
        firstVowel: CalculoObjectResponse,
        lifeLesson: CalculoObjectResponse,
        birthDay: CalculoObjectResponse,
        birthdate: CalculoObjectResponse,
        power: CalculoObjectResponse,
        temperament: CalculoObjectResponse,
        vibration: CalculoObjectResponse,
        spiersAndRealization: CalculoObjectArrayResponse,
        challenge: CalculoObjectArrayResponse,
        karmicNumber: CalculoObjectArrayResponse,
        karmicAbsences: CalculoObjectArrayResponse,
        personalYear: CalculoObjectResponse,
        quadrimesters: CalculoObjectArrayResponse,
        personalMonth: CalculoObjectResponse,
        personalDay: CalculoObjectResponse
    };

    const Map: Mapa = {
        numero_vibracao: "",
        descricao_vibracao: "",
        numero_alma: "",
        descricao_alma: "",
        numero_aparencia: "",
        descricao_aparencia: "",
        numero_destino: "",
        descricao_destino: "",
        numero_licaoVida: "",
        descricao_licaoVida: "",
        numero_diaNatalicio: "",
        descricao_diaNatalicio: "",
        numero_carmicaUm: "",
        descricao_carmicaUm: "",
        numero_carmicaDois: "",
        descricao_carmicaDois: "",
        numero_carmicaTres: "",
        descricao_carmicaTres: "",
        numero_carmicaQuatro: "",
        descricao_carmicaQuatro: "",
        numero_vogal: "",
        descricao_vogal: "",
        numero_formativo: "",
        descricao_formativo: "",
        numero_produtivo: "",
        descricao_produtivo: "",
        numero_colheita: "",
        descricao_colheita: "",
        desafioDt1: "",
        desafioDt2: "",
        desafioDt3: "",
        desafioDt4: "",
        desafioDt5: "",
        desafioDt6: "",
        desafioDt7: "",
        numero_desafioUm: "",
        descricao_desafioUm: "",
        numero_desafioDois: 1,
        descricao_desafioDois: "",
        numero_desafioTres: "",
        descricao_desafioTres: "",
        numero_desafioQuatro: "",
        descricao_desafioQuatro: "",
        realizacaoDt1: "",
        realizacaoDt2: "",
        realizacaoDt3: "",
        realizacaoDt4: "",
        realizacaoDt5: "",
        realizacaoDt6: "",
        realizacaoDt7: "",
        numero_realizacaoUm: "",
        descricao_realizacaoUm: "",
        numero_realizacaoDois: "",
        descricao_realizacaoDois: "",
        numero_realizacaoTres: "",
        descricao_realizacaoTres: "",
        numero_realizacaoQuatro: "",
        descricao_realizacaoQuatro: "",
        numero_poder: "",
        descricao_poder: "",
        numero_ano_pessoal: "",
        descricao_ano_pessoal: "",
        numero_temperamento: "",
        descricao_temperamento: ""
    }

    const [birthDate, setBirthDate] = useState("");
    const [name, setName] = useState("");

    const [numerologyResponse, setNumerologyResponse] = useState<Calculo>(CalculoResponse);
    const [mapResponse, setMapResponse] = useState<Mapa>(Map);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(birthDate);
        console.log(name);

        numerologiaApi.get('calculate', {
            params: { 
                name: name,
                birthdate: birthDate,
                deep: true
            }
        })
            .then(response => {
                setNumerologyResponse(response.data);
            })
            .catch(error => {
                console.log("Erro ao chamar api de calculo: " + error);
            });
    }

    const generateMap = () => {
        numerologiaApi.post('novoMapa', {
            nome_teste: numerologyResponse.name.id,
            alma: numerologyResponse.soul.id,
            aparencia: numerologyResponse.appearance.id,
            destino: numerologyResponse.destiny.id,
            lifeCycle: numerologyResponse.lifeCycle.list.map(ls => ls.id),
            primeiraVogal: numerologyResponse.firstVowel.id,
            licaoVida: numerologyResponse.lifeLesson.id,
            dia_natalicio: numerologyResponse.birthDay.id,
            data_nasc: numerologyResponse.birthdate.id,
            poder: numerologyResponse.power.id,
            temperamento: numerologyResponse.temperament.id,
            vibracao: numerologyResponse.vibration.id,
            realizacao: numerologyResponse.spiersAndRealization.list.map(sr => sr.id),
            challenge: numerologyResponse.challenge.list.map(c => c.id),
            numerosKarmicos: numerologyResponse.karmicNumber.list.map(k => k.id),
            karmicAbsences: numerologyResponse.karmicAbsences.list.map(ka => ka.id),
        }).then(response => {
            setMapResponse(response.data);
        })
            .catch(error => {
                console.log("Erro ao gerar mapa: " + error);
            });
    }

    return (
        <>
            {console.log(numerologyResponse)}
            {console.log(mapResponse)}
            <Navbar expand="lg" variant="light" bg="light">
                <Container>
                    <Navbar.Brand href="#home">Mapa Numerológico</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container className='mt-5'>
                <Card>
                    <Card.Body>
                        <Form onSubmit={handleSubmit}>
                            <Row className="align-items-center">
                                <Col>
                                    <FloatingLabel controlId="floatingInputGrid" label="Nome">
                                        <Form.Control
                                            type="text"
                                            placeholder="Nome"
                                            onChange={(e) => { setName(e.target.value) }}
                                        />
                                    </FloatingLabel>
                                </Col>
                                <Col>
                                    <FloatingLabel controlId="floatingInputGrid" label="Nome">
                                        <Form.Control
                                            type="date"
                                            placeholder="Data de Nascimento"
                                            onChange={(e) => { setBirthDate(e.target.value) }}
                                        />
                                    </FloatingLabel>
                                </Col>
                                <Col>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>

                        </Form>
                    </Card.Body>
                </Card>
            </Container>

            {
                numerologyResponse.name.value !== "" &&
                <>
                    <CalculoForm
                        calculo={numerologyResponse}
                    />

                    <br />

                    <Container>
                        <div className="d-grid gap-2">
                            <Button
                                variant="primary"
                                size="lg"
                                onClick={generateMap}
                            >
                                Gerar mapa
                            </Button>
                        </div>
                    </Container>
                </>
            }

            {
                mapResponse.numero_vibracao !== "" && mapResponse.numero_vibracao !== "" &&
                <MapaResult
                    mapa={mapResponse}
                />
            }

            <br />
            <br />
            <br />
        </>
    );
}

export default Home;