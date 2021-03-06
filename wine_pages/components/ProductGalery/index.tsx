import styled from "styled-components";
import WineCard from "../WineCard";
import { saveWineInCart } from "../../services/cartLocalStorage";
import IWine from "../../interfaces/WineInterface";
import { Dispatch, SetStateAction } from "react";
import Footer from "../Footer";

const Galery = styled.div`
	display: flex;
	align-items: flex-start;
	padding: 0px;
	gap: 32px;
	flex-wrap: wrap;
	position: absolute;
	align-content: flex-start;
	width: 832px;
	height: 1225px;
	left: 25%;
	top: 182px;
`;

const CardButtonDiv = styled.div`
	display: flex;
	flex-direction: column;
	width: 256px;
`;

const SmallButton = styled.button`
	padding: 11.6806px 23.3612px;
	gap: 9.73px;
	width: 256px;
	height: 39.36px;
	top: 348px;
	margin-top: 30px;
	background: #7ebc43;
	box-shadow: 0px 0.973384px 1.94677px rgba(0, 0, 0, 0.2);
	border-radius: 3.89354px;
	border-color: #7ebc43;
	font-family: "Lato";
	font-style: normal;
	font-weight: 700;
	font-size: 14px;
	line-height: 16px;
	color: white;
`;

interface Props {
	data: {
		items: IWine[];
	};
	filter: number[];
	setCartCounter: Dispatch<SetStateAction<number>>;
	nameFilter: string;
}

function ProductGalery({ data, filter, setCartCounter, nameFilter }: Props) {
	const [greaterThanThisValue, lesserThanThisValue] = filter;
	const wineIsValid = (item: IWine): boolean =>
		item.price > greaterThanThisValue &&
		item.price < lesserThanThisValue &&
		item.name.toLocaleLowerCase().includes(nameFilter.toLocaleLowerCase());
	const galeryCard = (item: IWine, index: number) => (
		<CardButtonDiv data-testid="button-and-card" key={index}>
			<WineCard wine={item} />
			<SmallButton onClick={() => setCartCounter(saveWineInCart(item))}>
				Adicionar
			</SmallButton>
		</CardButtonDiv>
	);
	return (
		<Galery>
			{data.items.map((item, index) =>
				wineIsValid(item) ? galeryCard(item, index) : null
			)}
			<Footer />
		</Galery>
	);
}

export default ProductGalery;
