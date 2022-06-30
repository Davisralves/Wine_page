import styled from "styled-components";
import CheckBox from "./CheckBox";

const StyledFilter = styled.aside`
	position: absolute;
	width: 256px;
	height: 242px;
	left: 160px;
	top: 183px;
`;

const StyledPrice = styled.div`
	position: absolute;
	left: 0.39%;
	right: 2.34%;
	top: 0%;
	bottom: -2.07%;
`;

const PriceWord = styled.span`
	position: absolute;
	height: 19px;
	left: 0%;
	right: 38.96%;
	top: calc(50% - 19px / 2 - 114px);
	font-family: "Lato";
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	line-height: 22px;
	display: flex;
	align-items: center;

	color: #333333;
`;

const StyledForm = styled.form`
	position: absolute;
	left: 0%;
	right: 0%;
	top: 14.17%;
	bottom: 0%;
`;

export default function Filter() {
	return (
		<StyledFilter>
			<StyledPrice>
				<PriceWord>Por Preço</PriceWord>
			</StyledPrice>
			<StyledForm>
				<CheckBox text="Até 40" id="ate_40" value={40} />
				<CheckBox text="R$40 A R$60" id="de_40_60" value={60} />
				<CheckBox text="R$100 A R$200" id="de_100_200" value={100} />
				<CheckBox text="R$200 A R$500" id="de_200_500" value={200} />
				<CheckBox text="Acima de R$500" id="acima_500" value={500} />
			</StyledForm>
		</StyledFilter>
	);
}
