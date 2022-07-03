import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const StyledFooter = styled.footer`
	display: flex;
	margin-top: 1em;
	padding-bottom: 30px;
	width: 100%;
	height: 38px;
	align-items: center;
	justify-content: center;
`;

interface PageButtonProps {
	disabled?: boolean;
}

const PageButtons = styled.a<PageButtonProps>`
	margin: 0.2em;
	background: white;
	padding: 0.8em;
	color: #b6116e;
	pointer-events: ${(props) => (props.disabled ? "none" : "auto")};

	&:hover {
		background: #b6116e;
		color: white;
	}
`;
const DisabledPageButton = styled(PageButtons)`
	background: #b6116e;
	color: white;
`;
const PassPage = styled.a`
	font-family: "Lato";
	font-style: normal;
	font-weight: 700;
	font-size: 1em;
	line-height: 14px;
	display: flex;
	align-items: center;
	color: #b6116e;
	padding: 0.8em;
	&:hover {
		background: #b6116e;
		color: white;
	}
`;
export default function Footer() {
	const { query } = useRouter();
	let actualPage = (query.page as string) || 1;
	if (typeof actualPage == "string") actualPage = parseInt(actualPage);
	return (
		<StyledFooter>
			{actualPage > 1 ? (
				<Link href={`/?page=${actualPage - 1}`}>
					<PassPage>Anterior ...</PassPage>
				</Link>
			) : null}

			{[actualPage, actualPage + 1, actualPage + 2].map((page, index) => (
				<Link href={`/?page=${page}`} key={index}>
					{actualPage == page ? (
						<DisabledPageButton disabled>{page}</DisabledPageButton>
					) : (
						<PageButtons>{page}</PageButtons>
					)}
				</Link>
			))}
			<Link href={`/?page=${actualPage + 1}`}>
				<PassPage>... Próximo</PassPage>
			</Link>
		</StyledFooter>
	);
}
