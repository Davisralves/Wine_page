import styled from "styled-components";
import wineLogo from "../../images/black.png";
import searchLogo from "../../images/busca.png";
import cartLogo from "../../images/winebox.png";
import countLogo from "../../images/conta.png";
import Image from "next/image";
import { useState } from "react";
import { Dispatch, SetStateAction } from "react";

const StyledHeader = styled.header`
	background: #ffffff;
	width: 6%;
	padding-bottom: 6.8%;
`;

const StylePages = styled.div`
	font-family: "Neo Sans Std";
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 24px;
	color: #555555;
`;

const PageSelected = styled(StylePages)`
	color: #d14b8f;
	border-block-end: solid;
	text-align: center;
	vertical-align: middle;
	padding: 2em 0 2em 0;
	border-width: 3px;
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
	left: 20%;
	top: 32px;
`;

const SearchIcon = styled.div`
	position: absolute;
	width: 56px;
	right: 18%;
	top: 2.5%;
`;

const UserLogo = styled.div`
	position: absolute;
	width: 56px;
	right: 10%;
	top: 3%;
`;
const Cart = styled.div`
	position: absolute;
	width: 56px;
	right: 2%;
	top: 3%;
`;

const CartCounter = styled.div`
	position: absolute;
	width: 20px;
	height: 20px;
	left: 60%;
	top: 60%;
	color: #4fbfa5;
	font-size: large;
	font-weight: 600;
	font-family: "Lato";
	background-color: white;
	border-radius: 50%;
	display: inline-block;
	text-align: center;
	border: solid;
	border-color: grey;
	border-width: 0.5px;
`;

const LogoContainer = styled.div`
	width: 102.95px;
	height: 31px;
	position: absolute;
	left: 5%;
	top: 5%;
`;

const StyledInput = styled.input`
	position: absolute;
	right: 30%;
	margin-top: 1em;
`;

interface Props {
	cartCounter: number;
	setNameFilter: Dispatch<SetStateAction<string>>;
}

export default function Header({ cartCounter, setNameFilter }: Props) {
	const [showInput, setShowInput] = useState(false);
	return (
		<StyledHeader>
			<LogoContainer>
				<Image alt="wine logo" width="102.95px" height="31px" src={wineLogo} />
			</LogoContainer>
			<StyledNav>
				<StylePages>Club</StylePages>
				<PageSelected>Loja</PageSelected>
				<StylePages>Produtores</StylePages>
				<StylePages>Ofertas</StylePages>
				<StylePages>Eventos</StylePages>
			</StyledNav>

			<SearchIcon onClick={() => setShowInput(true)}>
				{showInput ? (
					<StyledInput onChange={(e) => setNameFilter(e.target.value)} />
				) : (
					<Image
						alt="search logo"
						width="56px"
						height="56px"
						src={searchLogo}
					/>
				)}
			</SearchIcon>
			<UserLogo>
				<Image alt="user logo" width="56px" height="56px" src={countLogo} />
			</UserLogo>
			<Cart>
				<Image alt="cart logo" width="56px" height="56px" src={cartLogo} />
				<CartCounter data-testid="cart-counter">{cartCounter}</CartCounter>
			</Cart>
		</StyledHeader>
	);
}
