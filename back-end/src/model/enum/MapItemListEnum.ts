import MapItemEnum from "./MapItemEnum";

export default class MapItemListEnum {
    private List: MapItemEnum[] = [];

	constructor() {
		this.List.push(new MapItemEnum("vibration", "VIBRAÇÃO", ["Representa o acordo natalício e o elemento a que você pertence: Fogo, Água ou Ar.", "Este valor indica sua inclinação profissional original."]));
		this.List.push(new MapItemEnum("soul", "ALMA", ["Representa o Eu Verdadeiro, a Sua Essência, A Natureza do Seu Ser, os Seus Valores."]));
		this.List.push(new MapItemEnum("appearance", "APARENCIA", ["Representa a imagem com a qual você se relaciona com o mundo. Indica a forma como outros te enxergam."]));
		this.List.push(new MapItemEnum("destiny", "DESTINO", ["Indica o caminho que já está disponível para você seguir com mais facilidade e realizar a sua missão na Terra."]));
		this.List.push(new MapItemEnum("lifeLesson", "LIÇÃO DE VIDA (CAMINHO DO DESTINO)", ["Representa as lições que você precisa aprender nesta vida e é da maior importância na escolha de uma carreira."]));
		this.List.push(new MapItemEnum("birthDay", "DIA NATALICIO", ["O dia de nascimento indica o talento interior oculto, que pode ser aplicado na escolha da carreira."]));
		this.List.push(new MapItemEnum("karmicLesson", "LIÇÕES CARMICAS", ["Cada número que lhe falta no nome dá uma indicação dos pontos fracos que devem ser fortalecidos. Estas ausências sugerem normas de comportamento ou lições para facilitar sua vida."]));
		this.List.push(new MapItemEnum("karmicNumbers", "NÚMEROS CARMICOS", ["Os números Cármicos surgem das violações das leis naturais. São atos cometidos conscientemente contra o próximo, e as vezes contra nós mesmos, em vidas passadas. OBS. : Nem todas as pessoas são obrigadas a enfrentar números Cármicos. Embora períodos de aprendizado nos pareçam uma calamidade, quando compreendemos que a Lei da vida é justa e que nada que não tenhamos provocado nos acontece, passar por estas vibrações nos conduz à evolução. Cada vida é uma nova oportunidade que recebemos para nossa elevação e portanto, aqui e agora, nós e somente nós, somos responsáveis pelos nossos sofrimentos, pois compreendendo nossos enganos passados, usaremos nosso livre arbítrio para que estas dívidas Cármicas sejam anuladas, através do amor e da compreensão."]));
		this.List.push(new MapItemEnum("firstVowel", "PRIMEIRA VOGAL", ["A Primeira Vogal mostra os seus impulsos emocionais,  atitudes e reações diante de estímulos externos."]));
		this.List.push(new MapItemEnum("realizations", "REALIZAÇÕES", ["São períodos em que o Universo lhe proporciona a oportunidade de crescimento, são comparáveis a um teste que você tem que fazer. Suas vibrações são exatas ao período em que vive seus ciclos. São mudanças ou transformações que você sofre sob a influência dos números e lhe apontam para a direção em que deve obter sucesso. Eles irão sugerir suas oportunidades. Conhecê-los o levará a compreender as modificações em suas atitudes em relação à vida."]));
		this.List.push(new MapItemEnum("challenges", "DESAFIOS", ["Ao longo de sua existência você experimentará alguns desafios, sem os quais sua vida seria terrivelmente monótona.  Os empecilhos e obstáculos servem para sacudi-lo para fora de sua letargia, forçando-o a combater os elementos e dificuldades que lhe impedem de alcançar sua meta.", "Um desafio é um traço fraco em sua personalidade ou um talento não desenvolvido. Representa um ponto em seu caráter que deve ser fortalecido através da força de vontade e compreensão. Atua como pedra de tropeço ou sinal de alerta, avisando para evitar as armadilhas."]));
		this.List.push(new MapItemEnum("cycles", "CICLOS", ["Há três grandes períodos em sua vida:",
			"O Primeiro, ou Ciclo Formativo, em que busca sua verdadeira natureza, ao mesmo tempo em que  tenta enfrentar as poderosas forças presentes em seu meio, seus parentes e as condições sócio-econômicas de sua família, por exemplo.",  
			"O Segundo Ciclo, ou Ciclo Produtivo, traz o lento surgimento de sua individualidade e talentos criativos.  A parte inicial deste ciclo - do início até meados dos 30 anos - representa a luta para encontrar seu lugar no mundo, enquanto que na parte final dos 30, os 40 e o início dos 50 anos,  você se encontra com muito maior autodomínio e influência sobre o meio.",  
			"O Terceiro Ciclo, ou Ciclo de Colheita, pode representar o florescimento de seu ser interior, uma vez que sua verdadeira natureza finalmente deu frutos. É durante este período que você tem o maior grau de auto-expressão e poder."]));
		this.List.push(new MapItemEnum("power", "NÚMERO DO PODER", ["É o farol que lhe guia através dos anos. Com esse número sua vida será cheia de sentido, útil e feliz.",
			"Conhecendo-o você poderá reconhecer algumas de suas vontades e aversões. Suas vibrações irão sendo sentidas ao longo de sua vida.",
			"Se você viver de acordo com este número, não terá dias inúteis. A velhice será plenamente ativa. Ele é a chave para seu sucesso, porque lhe dará um objetivo na vida. É o seu número de poder."]));
		this.List.push(new MapItemEnum("personalYear", "ANO PESSOAL", ["Cada ano tem sua própria vibração - conjunto de influências, oportunidades e obstáculos. Sabendo antecipadamente o que esperar, você poderá aproveitar melhor as oportunidades que o ano oferece."]));
		this.List.push(new MapItemEnum("personalMonth", "MÊS PESSOAL", ["Da mesma forma que o Ano Pessoal, cada mês vibra com um número diferente. Conhecendo estas vibrações, é possível usá-las para melhorar a vida."]));
		this.List.push(new MapItemEnum("personalDay", "DIA PESSOAL", ["Cada dia do mês tem o seu próprio número do dia pessoal. A vibração do Dia Pessoal indica o que fazer neste dia específico. Cada dia tem a sua própria vibração e não é aconselhável agir contra ela. Fluir com os números traz sucesso."]));
		this.List.push(new MapItemEnum("quadrimester", "QUADRIMESTRE", ["Dentro do Ano Pessoal você tem três Quadrimestres que apontam as possibilidades do período."]));
		this.List.push(new MapItemEnum("temperament", "TEMPERAMENTO", [""]));
		this.List.push(new MapItemEnum("signature", "ASSINATURA", ["A forma como você assina diz muito sobre a sua personalidade. Ela é a sua marca, seu carimbo.",
			"Se rabiscar o nome, além de não emitir qualquer vibração, as pessoas não saberão quem passou por ali.",
			"Se der voltas, colocar traços para baixo, provavelmente estará fazendo o mesmo com sua vida!",
			"A assinatura, para ser positiva e trazer harmonia para sua vida deve vibrar de acordo com  o seu dia de nascimento."]));
	}

    /**
     * Getter List
     * @return {MapItemEnum[]}
     */
	public getList(): MapItemEnum[] {
		return this.List;
	}
}