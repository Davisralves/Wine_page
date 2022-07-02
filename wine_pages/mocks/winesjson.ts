import IWine from "../interfaces/WineInterface";

const wine: IWine[] = [
	{
		id: 0,
		image:
			"https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/19694-01.png",
		name: "Bacalhôa Quinta da Garrida Colheita Selecionada 2015",
		price: 175.9,
		discount: 45,
		priceMember: 96.9,
		priceNonMember: 114,
		type: "Tinto",
		classification: "Seco",
		size: "750 ml",
		rating: 4,
		avaliations: 292,
		country: "Portugal",
		region: "Dão",
		flag: "https://img.wine.com.br/fenix/image/flags/rounded/portugal.svg",
		sommelierComment:
			"Esse tinto traz em seu assemblage a Touriga Nacional, uma das uvas tintas portuguesas mais conhecidas no mundo do vinho. Nativa do Dão, região produtora desse vinho, essa variedade atinge a sua expressão máxima nesse terroir. O termo Colheita Selecionada estampado no rótulo, é uma referência a qualidade da safra 2015.",
	},

	{
		id: 2,
		image:
			"https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/24168-01.png",
		name: "Viña Bouchon País Salvaje 2019",
		price: 241.9,
		discount: 31,
		priceMember: 166.55,
		priceNonMember: 195.94,
		type: "Tinto",
		classification: "Seco",
		volume: "750 ml",
		rating: 4,
		country: "Chile",
		region: "Valle del Maule",
		flag: "https://img.wine.com.br/fenix/image/flags/rounded/chile.svg",
		sommelierComment:
			"Pontuado com 92 Tim Atkin, este tinto traz a uva País, proveniente de vinhas selvagens que crescem naturalmente no Valle del Maule. A colheita dessas uvas é feita manualmente, com o auxílio de escadas de até 5 metros de altura. Para expressar fielmente suas características, esse vinho não é filtrado, preservando os aromas e sabores desta raridade",
	},
];

export default wine;
