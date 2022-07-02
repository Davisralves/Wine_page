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
	filter: number[];
}

export default function ProductGalery({ data, filter }: Props) {
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

export const getStaticProps: GetStaticProps = async () => {
	const res = await fetch(link);
	console.log(res);
	const data = await res.json();
	console.log(data);
	return { props: { data } };
};
