import styled from "styled-components";
import SmallButton from "../SmallButton";
import WineCard from "../WineCard";
import IWine from "../../interfaces/WineInterface";
import { GetServerSideProps } from "next";

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
}

export default function ProductGalery({ data: { items } }: Props) {
	return (
		<Galery>
			{items.map((item, index) => (
				<CardButtonDiv key={index}>
					<WineCard wine={item} />
					<SmallButton />
				</CardButtonDiv>
			))}
		</Galery>
	);
}

export const getServerSideProps: GetServerSideProps = async () => {
	const res = await fetch(
		`https://wine-back-test.herokuapp.com/products?page=1&limit=10`
	);
	const data = await res.json();

	return { props: { data } };
};
