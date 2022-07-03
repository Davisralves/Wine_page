import type { NextPage } from "next";
import Filter from "../components/Filter";
import Header from "../components/Header";
import styled from "styled-components";
import ProductGalery from "../components/ProductGalery";
import wine from "../mocks/winesjson";
import { useState } from "react";

const StyledMain = styled.main`
	background: #ffffff;
	border-width: 0.1px;
	border-color: lightgray;
`;

const StyledAside = styled.h4`
	position: absolute;
	width: 256px;
	height: 24px;
	left: 160px;
	top: 119px;
`;

const StyledHeading4 = styled(StyledAside)`
	font-family: "Neo Sans Std";
	font-style: normal;
	font-weight: 700;
	font-size: 20px;
	line-height: 24px;
	color: #000000;
`;

const SearchCount = styled.div`
	position: absolute;
	width: 832px;
	height: 39px;
	left: 448px;
	top: 147px;
	font-family: "Lato";
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	line-height: 22px;
	/* identical to box height */

	color: #262626;
`;

const Home: NextPage = () => {
	const [filter, setFilter] = useState([0, 99999]);

	return (
		<StyledMain>
			<Header />
			<StyledHeading4>Redefine sua busca</StyledHeading4>
			<SearchCount>
				<strong>49</strong> Produtos encontrados
			</SearchCount>
			<Filter SetFilter={setFilter} />
			<ProductGalery data={{ items: wine }} filter={filter} />
		</StyledMain>
	);
};

export default Home;
