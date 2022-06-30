import styled from "styled-components";

const StyledHeader = styled.header`
	position: absolute;
	left: 0%;
	right: 0%;
	top: 1.14%;
	bottom: -1.14%;
`;

const StylePages = styled.div`
	font-family: "Neo Sans Std";
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 24px;
    color: #555555
`;

const StyledDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 0px;
	gap: 48px;
	position: absolute;
	width: 479px;
	height: 24px;
	left: calc(50% - 479px / 2 - 144.35px);
	top: 32px;
`;

export default function Header() {
	return (
		<StyledHeader>
			<StyledDiv>
				<StylePages>Club</StylePages>
				<StylePages>Loja</StylePages>
				<StylePages>Produtores</StylePages>
				<StylePages>Ofertas</StylePages>
				<StylePages>Eventos</StylePages>
			</StyledDiv>
		</StyledHeader>
	);
}
