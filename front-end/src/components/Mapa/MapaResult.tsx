import React from 'react';

//react-bootstrap
import {
    Card,
    Container,
} from 'react-bootstrap';
import IMapResponse from '../model/responses/IMapResponse';

export interface Map {
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
    mapResponse: IMapResponse[]
}

const MapaResult: React.FC<MapaProps> = ({ mapResponse }) => {
    return (
        <Container className='mt-5'>
            {
                mapResponse.map((mapItem, index) => {
                    return (
                        <>
                            <Card key={index}>
                                <Card.Body>
                                    <h2>{mapItem.title}</h2>
                                    {
                                        mapItem.subTitle.map((st, index) => {
                                            return (
                                                <h5 key={index}>
                                                    {st}
                                                </h5>
                                            );
                                        })
                                    }
                                    <br />
                                    {
                                        mapItem.itemValueFirstPart !== "" &&
                                        mapItem.itemValueSecondPart !== "" &&
                                        mapItem.description !== "" &&
                                        <>
                                            <Card.Text>
                                                <strong className="font-weight-bold">{mapItem.itemValueFirstPart}</strong> {mapItem.itemValueSecondPart}
                                            </Card.Text>
                                            <Card.Text>
                                                {mapItem.description}
                                            </Card.Text>
                                        </>
                                    }
                                    {
                                        mapItem.mapSubItemList.length > 0 &&
                                        mapItem.mapSubItemList.map((subItem, index) => {
                                            return (
                                                <>
                                                    <Card.Text>
                                                        <strong className="font-weight-bold">{subItem.title}</strong>                                                </Card.Text>
                                                    <Card.Text>
                                                        {subItem.description}
                                                    </Card.Text>
                                                </>
                                            );
                                        })
                                    }

                                </Card.Body>
                            </Card>
                            <br />
                        </>
                    );
                })
            }

            {/* <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <h2>VIBRAÇÃO</h2>
                    <h5>Representa o acordo natalício e o elemento a que você pertence: Fogo, Água ou Ar.
                        Este valor indica sua inclinação profissional original.
                    </h5>
                    <br />
                    <Card.Text><strong className="font-weight-bold">A sua vibração é: </strong> {mapa.numero_vibracao}</Card.Text>
                    <Card.Text> {mapa.descricao_vibracao}</Card.Text>
                </Card.Body>
            </Card>

            <Card className='mt-5'>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <h2>ALMA</h2>
                    <h5>Representa o Eu Verdadeiro, a Sua Essência, A Natureza do Seu Ser, os Seus Valores.
                    </h5>
                    <br />
                    <Card.Text><strong className="font-weight-bold"> A Sua Alma é: </strong> {mapa.numero_alma}</Card.Text>
                    <Card.Text> {mapa.descricao_alma}</Card.Text>
                </Card.Body>
            </Card>

            <Card className='mt-5'>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <h2>APARÊNCIA</h2>
                    <h5>Representa a imagem com a qual você se relaciona com o mundo. Indica a forma como outros te enxergam.
                    </h5>
                    <br />
                    <Card.Text><strong className="font-weight-bold">A Sua Aparência é: </strong> {mapa.numero_aparencia}</Card.Text>
                    <Card.Text> {mapa.descricao_aparencia}</Card.Text>
                </Card.Body>
            </Card>

            <Card className='mt-5'>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <h2>DESTINO</h2>
                    <h5>Indica o caminho que já está disponível para você seguir com mais facilidade e realizar a sua missão na Terra.
                    </h5>
                    <br />
                    <Card.Text><strong className="font-weight-bold">O Seu Destino é: </strong> {mapa.numero_destino}</Card.Text>
                    <Card.Text> {mapa.descricao_destino}</Card.Text>
                </Card.Body>
            </Card>

            <Card className='mt-5'>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <h2>LIÇÃO DE VIDA (CAMINHO DO DESTINO)</h2>
                    <h5>Representa as lições que você precisa aprender nesta vida e é da maior importância na escolha de uma carreira.
                    </h5>
                    <br />
                    <Card.Text><strong className="font-weight-bold">A Sua Lição de Vida é: </strong> {mapa.numero_licaoVida}</Card.Text>
                    <Card.Text> {mapa.descricao_licaoVida}</Card.Text>
                </Card.Body>
            </Card>

            <Card className='mt-5'>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <h2>DIA NATALICIO</h2>
                    <h5>O dia de nascimento indica o talento interior oculto, que pode ser aplicado na escolha da carreira.
                    </h5>
                    <br />
                    <Card.Text><strong className="font-weight-bold">O Seu dia de Nascimento é: </strong> {mapa.numero_diaNatalicio}</Card.Text>
                    <Card.Text> {mapa.descricao_diaNatalicio}</Card.Text>
                </Card.Body>
            </Card>

            <Card className='mt-5'>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <h2>LIÇÕES CARMICAS</h2>
                    <h5>Cada número que lhe falta no nome dá uma indicação dos pontos fracos que devem ser fortalecidos. Estas ausências sugerem normas de comportamento ou lições para facilitar sua vida.
                    </h5>
                    <br />
                    <Card.Text><strong className="font-weight-bold">Lições Carmicas: </strong> {mapa.numero_carmicaUm}</Card.Text>
                    <Card.Text> {mapa.descricao_carmicaUm}</Card.Text>
                    <br/>
                    <Card.Text><strong className="font-weight-bold">Lições Carmicas: </strong> {mapa.numero_carmicaDois}</Card.Text>
                    <Card.Text> {mapa.descricao_carmicaDois}</Card.Text>
                    <br/>
                    <Card.Text><strong className="font-weight-bold">Lições Carmicas: </strong> {mapa.numero_carmicaTres}</Card.Text>
                    <Card.Text> {mapa.descricao_carmicaTres}</Card.Text>
                    <br/>
                    <Card.Text><strong className="font-weight-bold">Lições Carmicas: </strong> {mapa.numero_carmicaQuatro}</Card.Text>
                    <Card.Text> {mapa.descricao_carmicaQuatro}</Card.Text>
                </Card.Body>
            </Card>

            <Card className='mt-5'>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <h2>PRIMEIRA VOGAL</h2>
                    <h5>A Primeira Vogal mostra os seus impulsos emocionais,  atitudes e reações diante de estímulos externos.
                    </h5>
                    <br />
                    <Card.Text><strong className="font-weight-bold">A Sua Primeira Vogal é: </strong> {mapa.numero_vogal}</Card.Text>
                    <Card.Text> {mapa.descricao_vogal}</Card.Text>
                </Card.Body>
            </Card>

            <Card className='mt-5'>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <h2>REALIZAÇÕES</h2>
                    <h5>São períodos em que o Universo lhe proporciona a oportunidade de crescimento, são comparáveis a um teste que você tem que fazer. Suas vibrações são exatas ao período em que vive seus ciclos. São mudanças ou transformações que você sofre sob a influência dos números e lhe apontam para a direção em que deve obter sucesso. Eles irão sugerir suas oportunidades. Conhecê-los o levará a compreender as modificações em suas atitudes em relação à vida.
                    </h5>
                    <br />
                    <Card.Text><strong className="font-weight-bold">Sua Realização Dos</strong> {mapa.realizacaoDt1} <strong className="font-weight-bold">aos</strong> {mapa.realizacaoDt2} <strong className="font-weight-bold"> anos: </strong> {mapa.numero_realizacaoUm}</Card.Text>
                    <Card.Text> {mapa.descricao_realizacaoUm}</Card.Text>
                    <br />
                    <Card.Text><strong className="font-weight-bold">Sua Realização Dos</strong> {mapa.realizacaoDt3} <strong className="font-weight-bold">aos</strong> {mapa.realizacaoDt4} <strong className="font-weight-bold"> anos: </strong> {mapa.numero_realizacaoDois}</Card.Text>
                    <Card.Text> {mapa.descricao_realizacaoDois}</Card.Text>
                    <br />
                    <Card.Text><strong className="font-weight-bold">Sua Realização Dos</strong> {mapa.realizacaoDt5} <strong className="font-weight-bold">aos</strong> {mapa.realizacaoDt6} <strong className="font-weight-bold"> anos: </strong> {mapa.numero_realizacaoTres}</Card.Text>
                    <Card.Text> {mapa.descricao_realizacaoTres}</Card.Text>
                    <br />
                    <Card.Text><strong className="font-weight-bold">Sua Realização Dos</strong> {mapa.realizacaoDt7} <strong className="font-weight-bold"> anos em diante: </strong> {mapa.numero_realizacaoQuatro} <strong className="font-weight-bold"> anos: </strong> {mapa.numero_realizacaoUm}</Card.Text>
                    <Card.Text> {mapa.descricao_realizacaoQuatro}</Card.Text>
                </Card.Body>
            </Card>

            <Card className='mt-5'>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <h2>DESAFIOS</h2>
                    <h5>Ao longo de sua existência você experimentará alguns desafios, sem os quais sua vida seria terrivelmente monótona.  Os empecilhos e obstáculos servem para sacudi-lo para fora de sua letargia, forçando-o a combater os elementos e dificuldades que lhe impedem de alcançar sua meta. 
                        Um desafio é um traço fraco em sua personalidade ou um talento não desenvolvido. Representa um ponto em seu caráter que deve ser fortalecido através da força de vontade e compreensão. Atua como pedra de tropeço ou sinal de alerta, avisando para evitar as armadilhas.
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
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <h2>CICLOS</h2>
                    <h5>Há três grandes períodos em sua vida:
                        O Primeiro, ou Ciclo Formativo, em que busca sua verdadeira natureza, ao mesmo tempo em que  tenta enfrentar as poderosas forças presentes em seu meio, seus parentes e as condições sócio-econômicas de sua família, por exemplo.  
                        O Segundo Ciclo, ou Ciclo Produtivo, traz o lento surgimento de sua individualidade e talentos criativos.  A parte inicial deste ciclo - do início até meados dos 30 anos - representa a luta para encontrar seu lugar no mundo, enquanto que na parte final dos 30, os 40 e o início dos 50 anos,  você se encontra com muito maior autodomínio e influência sobre o meio.  
                        O Terceiro Ciclo, ou Ciclo de Colheita, pode representar o florescimento de seu ser interior, uma vez que sua verdadeira natureza finalmente deu frutos. É durante este período que você tem o maior grau de auto-expressão e poder.
                    </h5>
                    <br />
                    <Card.Text><strong className="font-weight-bold">1º Formativo :</strong> {mapa.numero_formativo} <strong className="font-weight-bold">| 0 aos 28 anos</strong></Card.Text>
                    <Card.Text> {mapa.descricao_formativo}</Card.Text>

                    <br />
                    <Card.Text><strong className="font-weight-bold">2º Produtivo :</strong> {mapa.numero_produtivo} <strong className="font-weight-bold">| 29 aos 56 anos</strong></Card.Text>
                    <Card.Text> {mapa.descricao_formativo}</Card.Text>

                    <br />
                    <Card.Text><strong className="font-weight-bold">2º Colheita :</strong> {mapa.numero_colheita} <strong className="font-weight-bold">| 57 anos em diante</strong></Card.Text>
                    <Card.Text> {mapa.descricao_formativo}</Card.Text>
                </Card.Body>
            </Card>

            <Card className='mt-5'>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <h2>NÚMERO DO PODER</h2>
                    <h5>É o farol que lhe guia através dos anos. Com esse número sua vida será cheia de sentido, útil e feliz. 
                        Conhecendo-o você poderá reconhecer algumas de suas vontades e aversões. Suas vibrações irão sendo sentidas ao longo de sua vida. 
                        Se você viver de acordo com este número, não terá dias inúteis. A velhice será plenamente ativa. Ele é a chave para seu sucesso, porque lhe dará um objetivo na vida. É o seu número de poder. 
                    </h5>
                    <br />
                    <Card.Text><strong className="font-weight-bold">Seu Número do Poder é: </strong> {mapa.numero_poder}</Card.Text>
                    <Card.Text> {mapa.descricao_poder}</Card.Text>
                </Card.Body>
            </Card>

            <Card className='mt-5'>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <h2>ANO PESSOAL</h2>
                    <h5>Cada ano tem sua própria vibração - conjunto de influências, oportunidades e obstáculos. Sabendo antecipadamente o que esperar, você poderá aproveitar melhor as oportunidades que o ano oferece.
                    </h5>
                    <br />
                    <Card.Text><strong className="font-weight-bold">De </strong> {mapa.numero_ano_pessoal} </Card.Text>
                    <Card.Text> {mapa.descricao_vogal}</Card.Text>
                </Card.Body>
            </Card>

            <Card className='mt-5'>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <h2>ANO PESSOAL</h2>
                    <h5>Cada ano tem sua própria vibração - conjunto de influências, oportunidades e obstáculos. Sabendo antecipadamente o que esperar, você poderá aproveitar melhor as oportunidades que o ano oferece.
                    </h5>
                    <br />
                    <Card.Text><strong className="font-weight-bold">De </strong> {mapa.numero_ano_pessoal} <strong className="font-weight-bold"> à </strong> {mapa.numero_ano_pessoal} <strong className="font-weight-bold">| Você estará vivendo um Ano Pessoal : </strong> {mapa.numero_ano_pessoal} </Card.Text>
                    <Card.Text> {mapa.descricao_ano_pessoal}</Card.Text>
                </Card.Body>
            </Card>

            <Card className='mt-5'>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <h2>QUADRIMESTRE</h2>
                    <h5>Dentro do Ano Pessoal você tem três Quadrimestres que apontam as possibilidades do período.
                    </h5>
                    <br />
                    <Card.Text><strong className="font-weight-bold">1º - De </strong> {mapa.numero_ano_pessoal} <strong className="font-weight-bold"> à </strong> {mapa.numero_ano_pessoal} <strong className="font-weight-bold"> Você estará vivendo um Quadrimestre: </strong> {mapa.numero_ano_pessoal} </Card.Text>
                    <Card.Text> {mapa.descricao_ano_pessoal}</Card.Text>
                    <br />
                    <Card.Text><strong className="font-weight-bold">2º - De </strong> {mapa.numero_ano_pessoal} <strong className="font-weight-bold"> à </strong> {mapa.numero_ano_pessoal} <strong className="font-weight-bold"> Você estará vivendo um Quadrimestre: </strong> {mapa.numero_ano_pessoal} </Card.Text>
                    <Card.Text> {mapa.descricao_ano_pessoal}</Card.Text>
                    <br />
                    <Card.Text><strong className="font-weight-bold">3º - De </strong> {mapa.numero_ano_pessoal} <strong className="font-weight-bold"> à </strong> {mapa.numero_ano_pessoal} <strong className="font-weight-bold"> Você estará vivendo um Quadrimestre: </strong> {mapa.numero_ano_pessoal} </Card.Text>
                    <Card.Text> {mapa.descricao_ano_pessoal}</Card.Text>
                </Card.Body>
            </Card>
            
            <Card className='mt-5'>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <h2>TEMPERAMENTO</h2>
                    <h5>Seu Temperamento é :  
                    </h5>
                    <br />
                    <Card.Text><strong className="font-weight-bold">Seu Temperamento é:  </strong> {mapa.numero_temperamento} </Card.Text>
                    <Card.Text> {mapa.descricao_temperamento}</Card.Text>
                </Card.Body>
            </Card>

            <Card className='mt-5'>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <h2>ASSINATURA</h2>
                    <h5>A forma como você assina diz muito sobre a sua personalidade. Ela é a sua marca, seu carimbo. 
                        Se rabiscar o nome, além de não emitir qualquer vibração, as pessoas não saberão quem passou por ali. 
                        Se der voltas, colocar traços para baixo, provavelmente estará fazendo o mesmo com sua vida! 
                        A assinatura, para ser positiva e trazer harmonia para sua vida deve vibrar de acordo com  o seu dia de nascimento. 
                    </h5>
                    <br />
                    <Card.Text><strong className="font-weight-bold">Sugestão de Assinatura: </strong> {mapa.numero_ano_pessoal} </Card.Text>
                </Card.Body>
            </Card> */}
        </Container>
    );
}

export default MapaResult;