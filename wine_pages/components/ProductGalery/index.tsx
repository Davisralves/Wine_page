import styled from "styled-components";
import SmallButton from "../SmallButton";
import WineCard from "../WineCard";
import Wine from "../../interfaces/WineInterface";
import {
	GetServerSideProps,
	GetStaticProps,
	InferGetServerSidePropsType,
} from "next";
import IWine from "../../interfaces/WineInterface";

const link = `https://wine-back-test.herokuapp.com/products?page=1&limit=10`;

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

export default function ProductGalery({ data }: Props) {
	return (
		<Galery>
			{data.items.map((item, index) => (
				<CardButtonDiv data-testid="button-and-card" key={index}>
					<WineCard wine={item} />
					<SmallButton />
				</CardButtonDiv>
			))}
		</Galery>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const res = await fetch(link);
	console.log(res);
	const data = await res.json();
	console.log(data);
	return { props: { data } };
};
