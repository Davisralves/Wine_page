import styled from "styled-components";

const Button = styled.button`
	/* Auto layout */
	padding: 11.6806px 23.3612px;
	gap: 9.73px;
	width: 256px;
	height: 39.36px;
	top: 348px;
	margin-top: 30px;
	/* functional / sucess-default */
	background: #7ebc43;
	box-shadow: 0px 0.973384px 1.94677px rgba(0, 0, 0, 0.2);
	border-radius: 3.89354px;
    border-color: #7ebc43;
    /* Button font*/
	font-family: "Lato";
	font-style: normal;
	font-weight: 700;
	font-size: 14px;
	line-height: 16px;
    color: white;
`;

export default function SmallButton() {
	return <Button>Adicionar</Button>;
}
