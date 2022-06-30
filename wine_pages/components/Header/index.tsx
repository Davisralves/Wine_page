import styled from "styled-components";
import cartImage from "../../images/cart.png";
const StyledHeader = styled.header`
	position: absolute;
	left: 0%;
	right: 0%;
	top: 1.14%;
	bottom: -1.14%;
	background: #ffffff;
`;

const StylePages = styled.div`
	font-family: "Neo Sans Std";
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 24px;
	color: #555555;
`;

const StyledNav = styled.nav`
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

const WineLogo = styled.div`
	position: absolute;
	left: 2.18%;
	right: 0.68%;
	top: 0%;
	bottom: 9.68%;
`;

const SearchIcon = styled.div`
	position: absolute;
	width: 56px;
	height: 56px;
	left: calc(50% - 56px / 2 + 341.28px);
	top: calc(50% - 56px / 2 - 0.12px);
`;

const Elipse = styled.div`
	box-sizing: border-box;
	position: absolute;
	left: -0.5%;
	right: 0.5%;
	top: 0%;
	bottom: 0%;
	border: 2px solid #555555;
`;

const Lupa = styled.div`
	position: absolute;
	left: 15.57%;
	right: 16.57%;
	top: 16.07%;
	bottom: 16.07%;
`;

const Cart = styled.div`
	position: absolute;
	width: 56px;
	height: 56px;
	left: 0px;
	top: 0px;
`;
const CartImage = styled.img`
	position: absolute;
	width: 40px;
	height: 56px;
	right: 8px;
	top: calc(50% - 56px / 2 + 2px);
	background: url("../../images/cart.png");
`;
export default function Header() {
	return (
		<StyledHeader>
			<WineLogo>Wine</WineLogo>
			<StyledNav>
				<StylePages>Club</StylePages>
				<StylePages>Loja</StylePages>
				<StylePages>Produtores</StylePages>
				<StylePages>Ofertas</StylePages>
				<StylePages>Eventos</StylePages>
			</StyledNav>
			<Cart>
				<CartImage src="../../images/cart.png" />
			</Cart>
		</StyledHeader>
	);
}
