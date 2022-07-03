import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const StyledFooter = styled.footer`
	display: flex;
	margin-top: 100px;
	width: 100%;
	height: 38px;
	align-items: center;
	justify-content: center;
`;

const PageButtons = styled.a`
	margin: 0.1em;
	background: #b6116e;
	padding: 0.8em;
	color: white;
`;
export default function Footer() {
	const { query } = useRouter();
	let actualPage = (query.page as string) || 1;
	if (typeof actualPage == "string") actualPage = parseInt(actualPage);
	return (
		<StyledFooter>
			{[actualPage, actualPage + 1, actualPage + 2].map((page, index) => (
				<Link href={`/?page=${page}`} key={index}>
					<PageButtons>{page}</PageButtons>
				</Link>
			))}
		</StyledFooter>
	);
}
