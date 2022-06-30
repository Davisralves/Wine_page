import styled from "styled-components";

interface Props {
	text: string;
	id: string;
	value: number;
}

const StyledDiv = styled.div`
	display: flex;
	margin: 5px;
`;

const StyledLabel = styled.label`
	font-family: "Lato";
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	align-items: center;
	color: #1d1d1b;
`;

export default function CheckBox({ text, id, value }: Props) {
	return (
		<StyledDiv>
			<input id={id} type="radio" value={value} />
			<StyledLabel htmlFor={id}>{text}</StyledLabel>
		</StyledDiv>
	);
}
