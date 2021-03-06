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
                <Card.Img variant="top"   />
                <Card.Body>
                    <h2>VIBRA????O</h2>
                    <h5>Representa o acordo natal??cio e o elemento a que voc?? pertence: Fogo, ??gua ou Ar.
                        Este valor indica sua inclina????o profissional original.
                    </h5>
                    <br />
                    <Card.Text><strong className="font-weight-bold">A sua vibra????o ??: </strong> {mapa.numero_vibracao}</Card.Text>
                    <Card.Text> {mapa.descricao_vibracao}</Card.Text>
                </Card.Body>
            </Card>

            <Card className='mt-5'>
                <Card.Img variant="top"   />
                <Card.Body>
                    <h2>ALMA</h2>
                    <h5>Representa o Eu Verdadeiro, a Sua Ess??ncia, A Natureza do Seu Ser, os Seus Valores.
                    </h5>
                    <br />
                    <Card.Text><strong className="font-weight-bold"> A Sua Alma ??: </strong> {mapa.numero_alma}</Card.Text>
                    <Card.Text> {mapa.descricao_alma}</Card.Text>
                </Card.Body>
            </Card>

            <Card className='mt-5'>
                <Card.Img variant="top"   />
                <Card.Body>
                    <h2>APAR??NCIA</h2>
                    <h5>Representa a imagem com a qual voc?? se relaciona com o mundo. Indica a forma como outros te enxergam.
                    </h5>
                    <br />
                    <Card.Text><strong className="font-weight-bold">A Sua Apar??ncia ??: </strong> {mapa.numero_aparencia}</Card.Text>
                    <Card.Text> {mapa.descricao_aparencia}</Card.Text>
                </Card.Body>
            </Card>

            <Card className='mt-5'>
                <Card.Img variant="top"   />
                <Card.Body>
                    <h2>DESTINO</h2>
                    <h5>Indica o caminho que j?? est?? dispon??vel para voc?? seguir com mais facilidade e realizar a sua miss??o na Terra.
                    </h5>
                    <br />
                    <Card.Text><strong className="font-weight-bold">O Seu Destino ??: </strong> {mapa.numero_destino}</Card.Text>
                    <Card.Text> {mapa.descricao_destino}</Card.Text>
                </Card.Body>
            </Card>

            <Card className='mt-5'>
                <Card.Img variant="top"   />
                <Card.Body>
                    <h2>LI????O DE VIDA (CAMINHO DO DESTINO)</h2>
                    <h5>Representa as li????es que voc?? precisa aprender nesta vida e ?? da maior import??ncia na escolha de uma carreira.
                    </h5>
                    <br />
                    <Card.Text><strong className="font-weight-bold">A Sua Li????o de Vida ??: </strong> {mapa.numero_licaoVida}</Card.Text>
                    <Card.Text> {mapa.descricao_licaoVida}</Card.Text>
                </Card.Body>
            </Card>

            <Card className='mt-5'>
                <Card.Img variant="top"   />
                <Card.Body>
                    <h2>DIA NATALICIO</h2>
                    <h5>O dia de nascimento indica o talento interior oculto, que pode ser aplicado na escolha da carreira.
                    </h5>
                    <br />
                    <Card.Text><strong className="font-weight-bold">O Seu dia de Nascimento ??: </strong> {mapa.numero_diaNatalicio}</Card.Text>
                    <Card.Text> {mapa.descricao_diaNatalicio}</Card.Text>
                </Card.Body>
            </Card>

            <Card className='mt-5'>
                <Card.Img variant="top"   />
                <Card.Body>
                    <h2>LI????ES CARMICAS</h2>
                    <h5>Cada n??mero que lhe falta no nome d?? uma indica????o dos pontos fracos que devem ser fortalecidos. Estas aus??ncias sugerem normas de comportamento ou li????es para facilitar sua vida.
                    </h5>
                    <br />
                    <Card.Text><strong className="font-weight-bold">Li????es Carmicas: </strong> {mapa.numero_carmicaUm}</Card.Text>
                    <Card.Text> {mapa.descricao_carmicaUm}</Card.Text>
                    <br/>
                    <Card.Text><strong className="font-weight-bold">Li????es Carmicas: </strong> {mapa.numero_carmicaDois}</Card.Text>
                    <Card.Text> {mapa.descricao_carmicaDois}</Card.Text>
                    <br/>
                    <Card.Text><strong className="font-weight-bold">Li????es Carmicas: </strong> {mapa.numero_carmicaTres}</Card.Text>
                    <Card.Text> {mapa.descricao_carmicaTres}</Card.Text>
                    <br/>
                    <Card.Text><strong className="font-weight-bold">Li????es Carmicas: </strong> {mapa.numero_carmicaQuatro}</Card.Text>
                    <Card.Text> {mapa.descricao_carmicaQuatro}</Card.Text>
                </Card.Body>
            </Card>

            <Card className='mt-5'>
                <Card.Img variant="top"   />
                <Card.Body>
                    <h2>PRIMEIRA VOGAL</h2>
                    <h5>A Primeira Vogal mostra os seus impulsos emocionais,  atitudes e rea????es diante de est??mulos externos.
                    </h5>
                    <br />
                    <Card.Text><strong className="font-weight-bold">A Sua Primeira Vogal ??: </strong> {mapa.numero_vogal}</Card.Text>
                    <Card.Text> {mapa.descricao_vogal}</Card.Text>
                </Card.Body>
            </Card>

            <Card className='mt-5'>
                <Card.Img variant="top"   />
                <Card.Body>
                    <h2>REALIZA????ES</h2>
                    <h5>S??o per??odos em que o Universo lhe proporciona a oportunidade de crescimento, s??o compar??veis a um teste que voc?? tem que fazer. Suas vibra????es s??o exatas ao per??odo em que vive seus ciclos. S??o mudan??as ou transforma????es que voc?? sofre sob a influ??ncia dos n??meros e lhe apontam para a dire????o em que deve obter sucesso. Eles ir??o sugerir suas oportunidades. Conhec??-los o levar?? a compreender as modifica????es em suas atitudes em rela????o ?? vida.
                    </h5>
                    <br />
                    <Card.Text><strong className="font-weight-bold">Sua Realiza????o Dos</strong> {mapa.realizacaoDt1} <strong className="font-weight-bold">aos</strong> {mapa.realizacaoDt2} <strong className="font-weight-bold"> anos: </strong> {mapa.numero_realizacaoUm}</Card.Text>
                    <Card.Text> {mapa.descricao_realizacaoUm}</Card.Text>
                    <br />
                    <Card.Text><strong className="font-weight-bold">Sua Realiza????o Dos</strong> {mapa.realizacaoDt3} <strong className="font-weight-bold">aos</strong> {mapa.realizacaoDt4} <strong className="font-weight-bold"> anos: </strong> {mapa.numero_realizacaoDois}</Card.Text>
                    <Card.Text> {mapa.descricao_realizacaoDois}</Card.Text>
                    <br />
                    <Card.Text><strong className="font-weight-bold">Sua Realiza????o Dos</strong> {mapa.realizacaoDt5} <strong className="font-weight-bold">aos</strong> {mapa.realizacaoDt6} <strong className="font-weight-bold"> anos: </strong> {mapa.numero_realizacaoTres}</Card.Text>
                    <Card.Text> {mapa.descricao_realizacaoTres}</Card.Text>
                    <br />
                    <Card.Text><strong className="font-weight-bold">Sua Realiza????o Dos</strong> {mapa.realizacaoDt7} <strong className="font-weight-bold"> anos em diante: </strong> {mapa.numero_realizacaoQuatro} <strong className="font-weight-bold"> anos: </strong> {mapa.numero_realizacaoUm}</Card.Text>
                    <Card.Text> {mapa.descricao_realizacaoQuatro}</Card.Text>
                </Card.Body>
            </Card>

            <Card className='mt-5'>
                <Card.Img variant="top"   />
                <Card.Body>
                    <h2>DESAFIOS</h2>
                    <h5>Ao longo de sua exist??ncia voc?? experimentar?? alguns desafios, sem os quais sua vida seria terrivelmente mon??tona.  Os empecilhos e obst??culos servem para sacudi-lo para fora de sua letargia, for??ando-o a combater os elementos e dificuldades que lhe impedem de alcan??ar sua meta. 
                        Um desafio ?? um tra??o fraco em sua personalidade ou um talento n??o desenvolvido. Representa um ponto em seu car??ter que deve ser fortalecido atrav??s da for??a de vontade e compreens??o. Atua como pedra de trope??o ou sinal de alerta, avisando para evitar as armadilhas.
                    </h5>
                    <br />
                    <Card.Text><strong className="font-weight-bold">Seu Desafio de </strong> {mapa.desafioDt1} <strong className="font-weight-bold">aos</strong> {mapa.desafioDt2} <strong className="font-weight-bold"> anos: </strong> {mapa.numero_desafioUm}</Card.Text>
                    <Card.Text> {mapa.descricao_desafioUm}</Card.Text>
                    <br />
                    <Card.Text><strong className="font-weight-bold">Seu Desafio de </strong> {mapa.desafioDt3} <strong className="font-weight-bold">aos</strong> {mapa.desafioDt4} <strong className="font-weight-bold"> anos: </strong> {mapa.numero_desafioDois}</Card.Text>
                    <Card.Text> {mapa.descricao_desafioDois}</Card.Text>
                    <br />
                    <Card.Text><strong className="font-weight-bold">Seu Desafio de </strong> {mapa.desafioDt5} <strong className="font-weight-bold">aos</strong> {mapa.desafioDt6} <strong className="font-weight-bold"> anos: </strong> {mapa.numero_desafioTres}</Card.Text>
                    <Card.Text> {mapa.descricao_desafioTres}</Card.Text>
                    <br />
                    <Card.Text><strong className="font-weight-bold">Seu Desafio de </strong> {mapa.desafioDt7} <strong className="font-weight-bold"> anos em diante: </strong> {mapa.numero_realizacaoQuatro} <strong className="font-weight-bold"> anos: </strong> {mapa.numero_desafioQuatro}</Card.Text>
                    <Card.Text> {mapa.descricao_desafioQuatro}</Card.Text>
                </Card.Body>
            </Card>

            <Card className='mt-5'>
                <Card.Img variant="top"   />
                <Card.Body>
                    <h2>CICLOS</h2>
                    <h5>H?? tr??s grandes per??odos em sua vida:
                        O Primeiro, ou Ciclo Formativo, em que busca sua verdadeira natureza, ao mesmo tempo em que  tenta enfrentar as poderosas for??as presentes em seu meio, seus parentes e as condi????es s??cio-econ??micas de sua fam??lia, por exemplo.  
                        O Segundo Ciclo, ou Ciclo Produtivo, traz o lento surgimento de sua individualidade e talentos criativos.  A parte inicial deste ciclo - do in??cio at?? meados dos 30 anos - representa a luta para encontrar seu lugar no mundo, enquanto que na parte final dos 30, os 40 e o in??cio dos 50 anos,  voc?? se encontra com muito maior autodom??nio e influ??ncia sobre o meio.  
                        O Terceiro Ciclo, ou Ciclo de Colheita, pode representar o florescimento de seu ser interior, uma vez que sua verdadeira natureza finalmente deu frutos. ?? durante este per??odo que voc?? tem o maior grau de auto-express??o e poder.
                    </h5>
                    <br />
                    <Card.Text><strong className="font-weight-bold">1?? Formativo :</strong> {mapa.numero_formativo} <strong className="font-weight-bold">| 0 aos 28 anos</strong></Card.Text>
                    <Card.Text> {mapa.descricao_formativo}</Card.Text>

                    <br />
                    <Card.Text><strong className="font-weight-bold">2?? Produtivo :</strong> {mapa.numero_produtivo} <strong className="font-weight-bold">| 29 aos 56 anos</strong></Card.Text>
                    <Card.Text> {mapa.descricao_formativo}</Card.Text>

                    <br />
                    <Card.Text><strong className="font-weight-bold">2?? Colheita :</strong> {mapa.numero_colheita} <strong className="font-weight-bold">| 57 anos em diante</strong></Card.Text>
                    <Card.Text> {mapa.descricao_formativo}</Card.Text>
                </Card.Body>
            </Card>

            <Card className='mt-5'>
                <Card.Img variant="top"   />
                <Card.Body>
                    <h2>N??MERO DO PODER</h2>
                    <h5>?? o farol que lhe guia atrav??s dos anos. Com esse n??mero sua vida ser?? cheia de sentido, ??til e feliz. 
                        Conhecendo-o voc?? poder?? reconhecer algumas de suas vontades e avers??es. Suas vibra????es ir??o sendo sentidas ao longo de sua vida. 
                        Se voc?? viver de acordo com este n??mero, n??o ter?? dias in??teis. A velhice ser?? plenamente ativa. Ele ?? a chave para seu sucesso, porque lhe dar?? um objetivo na vida. ?? o seu n??mero de poder. 
                    </h5>
                    <br />
                    <Card.Text><strong className="font-weight-bold">Seu N??mero do Poder ??: </strong> {mapa.numero_poder}</Card.Text>
                    <Card.Text> {mapa.descricao_poder}</Card.Text>
                </Card.Body>
            </Card>

            <Card className='mt-5'>
                <Card.Img variant="top"   />
                <Card.Body>
                    <h2>ANO PESSOAL</h2>
                    <h5>Cada ano tem sua pr??pria vibra????o - conjunto de influ??ncias, oportunidades e obst??culos. Sabendo antecipadamente o que esperar, voc?? poder?? aproveitar melhor as oportunidades que o ano oferece.
                    </h5>
                    <br />
                    <Card.Text><strong className="font-weight-bold">De </strong> {mapa.numero_ano_pessoal} </Card.Text>
                    <Card.Text> {mapa.descricao_ano_pessoal}</Card.Text>
                </Card.Body>
            </Card>

            <Card className='mt-5'>
                <Card.Img variant="top"   />
                <Card.Body>
                    <h2>QUADRIMESTRE</h2>
                    <h5>Dentro do Ano Pessoal voc?? tem tr??s Quadrimestres que apontam as possibilidades do per??odo.
                    </h5>
                    <br />
                    <Card.Text><strong className="font-weight-bold">1?? - De </strong> {mapa.numero_ano_pessoal} <strong className="font-weight-bold"> ?? </strong> {mapa.numero_ano_pessoal} <strong className="font-weight-bold"> Voc?? estar?? vivendo um Quadrimestre: </strong> {mapa.numero_ano_pessoal} </Card.Text>
                    <Card.Text> {mapa.descricao_ano_pessoal}</Card.Text>
                    <br />
                    <Card.Text><strong className="font-weight-bold">2?? - De </strong> {mapa.numero_ano_pessoal} <strong className="font-weight-bold"> ?? </strong> {mapa.numero_ano_pessoal} <strong className="font-weight-bold"> Voc?? estar?? vivendo um Quadrimestre: </strong> {mapa.numero_ano_pessoal} </Card.Text>
                    <Card.Text> {mapa.descricao_ano_pessoal}</Card.Text>
                    <br />
                    <Card.Text><strong className="font-weight-bold">3?? - De </strong> {mapa.numero_ano_pessoal} <strong className="font-weight-bold"> ?? </strong> {mapa.numero_ano_pessoal} <strong className="font-weight-bold"> Voc?? estar?? vivendo um Quadrimestre: </strong> {mapa.numero_ano_pessoal} </Card.Text>
                    <Card.Text> {mapa.descricao_ano_pessoal}</Card.Text>
                </Card.Body>
            </Card>
            
            <Card className='mt-5'>
                <Card.Img variant="top"   />
                <Card.Body>
                    <h2>TEMPERAMENTO</h2>
                    <h5>Seu Temperamento ?? :  
                    </h5>
                    <br />
                    <Card.Text><strong className="font-weight-bold">Seu Temperamento ??:  </strong> {mapa.numero_temperamento} </Card.Text>
                    <Card.Text> {mapa.descricao_temperamento}</Card.Text>
                </Card.Body>
            </Card>

            <Card className='mt-5'>
                <Card.Img variant="top"   />
                <Card.Body>
                    <h2>ASSINATURA</h2>
                    <h5>A forma como voc?? assina diz muito sobre a sua personalidade. Ela ?? a sua marca, seu carimbo. 
                        Se rabiscar o nome, al??m de n??o emitir qualquer vibra????o, as pessoas n??o saber??o quem passou por ali. 
                        Se der voltas, colocar tra??os para baixo, provavelmente estar?? fazendo o mesmo com sua vida! 
                        A assinatura, para ser positiva e trazer harmonia para sua vida deve vibrar de acordo com  o seu dia de nascimento. 
                    </h5>
                    <br />
                    <Card.Text><strong className="font-weight-bold">Sugest??o de Assinatura: </strong> {mapa.numero_ano_pessoal} </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default MapaResult;