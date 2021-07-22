import React from 'react';

//react-bootstrap
import {
    Card,
    Container,
} from 'react-bootstrap';

export interface Mapa {
    numero_vibracao: string,
    descricao_vibracao: string,
    numero_alma: string,
    descricao_alma: string,
    numero_aparencia: string,
    descricao_aparencia: string,
    numero_destino: string,
    descricao_destino: string,
    numero_licaoVida: string,
    descricao_licaoVida: string,
    numero_diaNatalicio: string,
    descricao_diaNatalicio: string,
    numero_carmicaUm: string,
    descricao_carmicaUm: string,
    numero_carmicaDois: string,
    descricao_carmicaDois: string,
    numero_carmicaTres: string,
    descricao_carmicaTres: string,
    numero_carmicaQuatro: string,
    descricao_carmicaQuatro: string,
    numero_vogal: string,
    descricao_vogal: string,
    numero_formativo: string,
    descricao_formativo: string,
    numero_produtivo: string,
    descricao_produtivo: string,
    numero_colheita: string,
    descricao_colheita: string,
    desafioDt1: string,
    desafioDt2: string,
    desafioDt3: string,
    desafioDt4: string,
    desafioDt5: string,
    desafioDt6: string,
    desafioDt7: string,
    numero_desafioUm: string,
    descricao_desafioUm: string,
    numero_desafioDois: 1,
    descricao_desafioDois: string,
    numero_desafioTres: string,
    descricao_desafioTres: string,
    numero_desafioQuatro: string,
    descricao_desafioQuatro: string,
    realizacaoDt1: string,
    realizacaoDt2: string,
    realizacaoDt3: string,
    realizacaoDt4: string,
    realizacaoDt5: string,
    realizacaoDt6: string,
    realizacaoDt7: string,
    numero_realizacaoUm: string,
    descricao_realizacaoUm: string,
    numero_realizacaoDois: string,
    descricao_realizacaoDois: string,
    numero_realizacaoTres: string,
    descricao_realizacaoTres: string,
    numero_realizacaoQuatro: string,
    descricao_realizacaoQuatro: string,
    numero_poder: string,
    descricao_poder: string,
    numero_ano_pessoal: string,
    descricao_ano_pessoal: string,
    numero_temperamento: string,
    descricao_temperamento: string
}

interface MapaProps {
    mapa: Mapa
}

const MapaResult: React.FC<MapaProps> = ({ mapa }) => {
    return (
        <Container className='mt-5'>
            <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <h2>Vibracao</h2>
                    <h5>Representa o acordo natalício e o elemento a que você pertence: Fogo, Água ou Ar.
                        Este valor indica sua inclinação profissional original.
                    </h5>
                    <br />
                    <Card.Text><strong className="font-weight-bold">A sua vibração é: </strong> {mapa.numero_vibracao}</Card.Text>
                    <Card.Text> {mapa.descricao_vibracao}</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default MapaResult;