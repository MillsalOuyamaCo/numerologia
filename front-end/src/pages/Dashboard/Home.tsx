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
import MapaResult from '../../components/Mapa/MapaResult';
import MapKarmicNumberRequest from '../../components/model/requests/MapKarmicNumberRequest';
import MapRequest from '../../components/model/requests/MapRequest';
import IData from '../../components/model/responses/IData';


const Home = () => {
    const CalculoObjectResponse: CalculoObject = {
        id: "",
        value: "",
        description: "",
        startValue: "",
        finalValue: ""
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

    const Map: IData = {
        data: []
    };

    const [birthDate, setBirthDate] = useState("");
    const [name, setName] = useState("");

    const [numerologyResponse, setNumerologyResponse] = useState<Calculo>(CalculoResponse);
    const [mapResponse, setMapResponse] = useState<IData>(Map);

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
        numerologiaApi.post('generate-map', {
            soulId: numerologyResponse.soul.id,
            appearanceId: numerologyResponse.appearance.id,
            destinyId: numerologyResponse.destiny.id,
            lifeCycleListIds: numerologyResponse.lifeCycle.list.map(ls => {
                return new MapRequest(ls.id, ls.startValue, ls.finalValue);
            }),
            firstVowelId: numerologyResponse.firstVowel.id,
            lifeLessonId: numerologyResponse.lifeLesson.id,
            birthDayId: numerologyResponse.birthDay.id,
            birthdateId: numerologyResponse.birthdate.id,
            powerId: numerologyResponse.power.id,
            personalYearId: numerologyResponse.personalYear.id,
            personalMonthId: numerologyResponse.personalMonth.id,
            personalDayId: numerologyResponse.personalDay.id,
            quadrimesterListIds: numerologyResponse.quadrimesters.list.map(q => {
                return new MapRequest(q.id, q.startValue, q.finalValue);
            }),
            temperamentId: numerologyResponse.temperament.id,
            vibrationId: numerologyResponse.vibration.id,
            spiersAndRealizationListIds: numerologyResponse.spiersAndRealization.list.map(sr => {
                return new MapRequest(sr.id, sr.startValue, sr.finalValue);
            }),
            challengeListIds: numerologyResponse.challenge.list.map(c => {
                return new MapRequest(c.id, c.startValue, c.finalValue);
            }),
            karmicNumberListIds: numerologyResponse.karmicNumber.list.map(k => {
                return new MapKarmicNumberRequest(k.id, k.description);
            }),
            karmicAbsencesListIds: numerologyResponse.karmicAbsences.list.map(ka => ka.id),
        }).then(response => {
            setMapResponse(response.data);
            console.log("SUCESSO CHAMANDO MAPA: " + JSON.stringify(response.data));
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
                mapResponse.data.length > 0 && 
                <MapaResult
                    mapResponse={mapResponse.data}
                />
            }

            <br />
            <br />
            <br />
        </>
    );
}

export default Home;