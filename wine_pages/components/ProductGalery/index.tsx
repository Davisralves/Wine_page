import styled from "styled-components";
import WineCard from "../WineCard";

import IWine from "../../interfaces/WineInterface";

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
	/* Auto layout */
	padding: 11.6806px 23.3612px;
	gap: 9.73px;
	width: 256px;
	height: 39.36px;
	top: 348px;
	margin-top: 30px;
	/* functional / sucess-default */
	background: #7ebc43;
	box-shadow: 0px 0.973384px 1.94677px rgba(0, 0, 0, 0.2);
	border-radius: 3.89354px;
	border-color: #7ebc43;
	/* Button font*/
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
}

const createCart = () => {
	const cartExist = localStorage.getItem("cart");
	if (cartExist) return true;
	else localStorage.setItem("cart", "[]");
};

const saveWineInCart = (item: IWine) => {
	createCart();
	const actual_cart = JSON.parse(localStorage.getItem("cart") as string);
	const productInCart = actual_cart.find(({ id }: IWine) => id == item.id);
	if (!productInCart) {
		actual_cart.push(item);
		localStorage.setItem("cart", JSON.stringify(actual_cart));
	}
};

function ProductGalery({ data, filter }: Props) {
	const [greaterThanThisValue, lesserThanThisValue] = filter;
	const galeryCard = (item: IWine, index: number) => (
		<CardButtonDiv data-testid="button-and-card" key={index}>
			<WineCard wine={item} />
			<SmallButton onClick={() => saveWineInCart(item)}>Adicionar</SmallButton>
		</CardButtonDiv>
	);
	return (
		<Galery>
			{data.items.map((item, index) =>
				item.price > greaterThanThisValue && item.price < lesserThanThisValue
					? galeryCard(item, index)
					: null
			)}
		</Galery>
	);
}

export default ProductGalery;
