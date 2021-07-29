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
import CalculoForm, { Calculo } from '../../components/Calculo/CalculoResult';
import MapaResult, { Mapa } from '../../components/Mapa/MapaResult';


function Home() {
    const CalculoResponse: Calculo = {
        nome_teste: "",
        alma: "",
        aparencia: "",
        destino: "",
        primeiroCiclo: "",
        segundoCiclo: "",
        terceiroCiclo: "",
        primeiraVogal: "",
        licaoVida: "",
        dia_natalicio: "",
        data_nasc: "",
        poder: "",
        temperamento: "",
        temperamentoNumero: "",
        vibracao: "",
        realizacaoDt1: "",
        realizacaoDt2: "",
        realizacaoDt3: "",
        realizacaoDt4: "",
        realizacaoDt5: "",
        realizacaoDt6: "",
        realizacaoDt7: "",
        realizacaoUm: "",
        realizacaoDois: "",
        realizacaoTres: "",
        realizacaoQuatro: "",
        desafioDt1: "",
        desafioDt2: "",
        desafioDt3: "",
        desafioDt4: "",
        desafioDt5: "",
        desafioDt6: "",
        desafioDt7: "",
        desafioUm: "",
        desafioDois: "",
        desafioTres: "",
        desafioQuatro: "",
        numeros: "",
        numeroCarmicoUm: "",
        numeroCarmicoDois: "",
        numeroCarmicoTres: "",
        numeroCarmicoQuatro: "",
        anoPessoal: "",
        ausenciaCarmica: []
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

        numerologiaApi.post('calculo', {
            nome_mil: name,
            data_nasc: birthDate
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
            nome_teste: numerologyResponse.nome_teste,
            alma: numerologyResponse.alma,
            aparencia: numerologyResponse.aparencia,
            destino: numerologyResponse.destino,
            primeiroCiclo: numerologyResponse.primeiroCiclo,
            segundoCiclo: numerologyResponse.segundoCiclo,
            terceiroCiclo: numerologyResponse.terceiroCiclo,
            primeiraVogal: numerologyResponse.primeiraVogal,
            licaoVida: numerologyResponse.licaoVida,
            dia_natalicio: numerologyResponse.dia_natalicio,
            data_nasc: numerologyResponse.data_nasc,
            poder: numerologyResponse.poder,
            temperamento: numerologyResponse.temperamento,
            temperamentoNumero: numerologyResponse.temperamentoNumero,
            vibracao: numerologyResponse.vibracao,
            realizacaoDt1: numerologyResponse.realizacaoDt1,
            realizacaoDt2: numerologyResponse.realizacaoDt2,
            realizacaoDt3: numerologyResponse.realizacaoDt3,
            realizacaoDt4: numerologyResponse.realizacaoDt4,
            realizacaoDt5: numerologyResponse.realizacaoDt5,
            realizacaoDt6: numerologyResponse.realizacaoDt6,
            realizacaoDt7: numerologyResponse.realizacaoDt7,
            realizacaoUm: numerologyResponse.realizacaoUm,
            realizacaoDois: numerologyResponse.realizacaoDois,
            realizacaoTres: numerologyResponse.realizacaoTres,
            realizacaoQuatro: numerologyResponse.realizacaoQuatro,
            desafioDt1: numerologyResponse.desafioDt1,
            desafioDt2: numerologyResponse.desafioDt2,
            desafioDt3: numerologyResponse.desafioDt3,
            desafioDt4: numerologyResponse.desafioDt4,
            desafioDt5: numerologyResponse.desafioDt5,
            desafioDt6: numerologyResponse.desafioDt6,
            desafioDt7: numerologyResponse.desafioDt7,
            desafioUm: numerologyResponse.desafioUm,
            desafioDois: numerologyResponse.desafioDois,
            desafioTres: numerologyResponse.desafioTres,
            desafioQuatro: numerologyResponse.desafioQuatro,
            numeros: numerologyResponse.numeros,
            numeroCarmicoUm: numerologyResponse.numeroCarmicoUm,
            numeroCarmicoDois: numerologyResponse.numeroCarmicoDois,
            numeroCarmicoTres: numerologyResponse.numeroCarmicoTres,
            numeroCarmicoQuatro: numerologyResponse.numeroCarmicoQuatro,
            anoPessoal: numerologyResponse.anoPessoal,
            ausenciaCarmica: numerologyResponse.ausenciaCarmica
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
                    <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
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
                                    <FloatingLabel controlId="floatingInputGrid" label="Data de Nascimento">
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
                numerologyResponse.nome_teste !== "" &&
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