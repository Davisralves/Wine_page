import styled from "styled-components";
import SmallButton from "../SmallButton";
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
	left: 448px;
	top: 182px;
`;

const CardButtonDiv = styled.div`
	display: flex;
	flex-direction: column;
	width: 256px;
`;

interface Props {
	data: {
		items: IWine[];
	};
	filter: number[];
}

function ProductGalery({ data, filter }: Props) {
	const [greaterThanThisValue, lesserThanThisValue] = filter;
	const galeryCard = (item: IWine, index: number) => (
		<CardButtonDiv data-testid="button-and-card" key={index}>
			<WineCard wine={item} />
			<SmallButton />
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
