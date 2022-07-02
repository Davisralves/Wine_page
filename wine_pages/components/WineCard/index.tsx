import styled from "styled-components";
import Image from "next/image";
import IWine from "../../interfaces/WineInterface";

const CardDiv = styled.div`
	left: 0%;
	right: 0%;
	top: -0.26%;
	bottom: 14.21%;
	background: #ffffff;
	box-shadow: 0px 9.73384px 14.6008px rgba(0, 0, 0, 0.1);
`;

const ImageContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
`;

const CentralizeDiv = styled.div`
	display: flex;
	align-items: center;
	margin-right: 50px;
	margin-left: 50px;
	justify-content: space-evenly;
`;

const WineName = styled.div`
	left: 9.73px;
	right: 13.63px;
	top: 50.3%;
	bottom: 38.63%;
	font-family: "Lato";
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 19px;
	text-align: center;
	letter-spacing: -0.222488px;

	color: #1d1d1b;
`;

const MemberWine = styled.div`
	height: 9.73px;
	left: 0%;
	right: 50%;
	top: calc(50% - 9.73px / 2 + 3.89px);

	font-family: "Lato";
	font-style: normal;
	font-weight: 700;
	font-size: 11px;
	line-height: 10px;
	text-align: right;
	text-transform: uppercase;
	color: #1d1d1b;
`;

const Price = styled.div`
	height: 15.57px;
	left: 0.48%;
	right: 53.36%;
	top: calc(50% - 15.57px / 2 + 0px);
	font-family: "Lato";
	font-style: normal;
	font-weight: 700;
	font-size: 11px;
	line-height: 16px;
	text-align: center;
	text-decoration-line: line-through;
	color: #888888;
`;

const Discount = styled.div`
	height: 13.63px;
	max-width: fit-content;
	left: 0%;
	right: 0%;
	top: calc(50% - 13.63px / 2);
	font-family: "Lato";
	font-style: normal;
	font-weight: 700;
	font-size: 10px;
	line-height: 12px;
	display: flex;
	align-items: center;
	text-align: center;
	color: #ffffff;
	background: #f79552;
	border-radius: 1.94677px;
`;

const MemberPrice = styled.div`
	height: 27.25px;
	left: 54.79%;
	right: 0.68%;
	top: calc(50% - 27.25px / 2);
	font-family: "Lato";
	font-style: normal;
	font-weight: 700;
	font-size: 11px;
	line-height: 27px;
	color: #b6116e;
`;

const NotMemberPrice = styled.div`
	text-align: center;
	width: 256px;
	font-family: "Lato";
	font-style: normal;
	font-weight: 700;
	font-size: 12px;
	line-height: 14px;
	text-transform: uppercase;
	color: #888888;
`;
const myLoader = ({ src }: { src: string }) => {
	const [init_url, final_url] = src.split("f=png,");
	const image_url = `${init_url}f=png,w=198.57,${final_url}`;
	return image_url;
};

const renderPrice = (priceNumber: number) => {
	const priceString = priceNumber.toString();
	const [price, priceCents] = priceString.split(".") as [string, string];
	if (priceCents == undefined) return `R$ ${price},00`;
	if (priceCents.length == 2) return `R$ ${price},${priceCents}`;
	if (priceCents.length == 1) return `R$ ${price},${priceCents}0`;
};

interface Props {
	wine: IWine;
}

export default function WineCard({
	wine: { image, name, price, priceMember, priceNonMember, discount },
}: Props) {
	return (
		<CardDiv>
			<ImageContainer>
				<Image
					alt="Wine"
					loader={myLoader}
					src={image}
					width="198.57px"
					height="178.13px"
				/>
			</ImageContainer>
			<WineName>{name}</WineName>
			<CentralizeDiv>
				<Price>{renderPrice(price)}</Price>
				<Discount>{`${discount}%OFF`}</Discount>
			</CentralizeDiv>
			<CentralizeDiv>
				<MemberWine>Sócio Wine</MemberWine>
				<MemberPrice>{renderPrice(priceMember)}</MemberPrice>
			</CentralizeDiv>
			<NotMemberPrice>
				Não sócio Wine {renderPrice(priceNonMember)}
			</NotMemberPrice>
		</CardDiv>
	);
}
