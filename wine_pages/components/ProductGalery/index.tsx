import styled from "styled-components";
import SmallButton from "../SmallButton";
import WineCard from "../WineCard";

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

export default function ProductGalery() {
	return (
		<Galery>
			<CardButtonDiv>
				<WineCard />
				<SmallButton />
			</CardButtonDiv>
			<CardButtonDiv>
				<WineCard />
				<SmallButton />
			</CardButtonDiv>
			<CardButtonDiv>
				<WineCard />
				<SmallButton />
			</CardButtonDiv>
			<CardButtonDiv>
				<WineCard />
				<SmallButton />
			</CardButtonDiv>
			<CardButtonDiv>
				<WineCard />
				<SmallButton />
			</CardButtonDiv>
		</Galery>
	);
}
