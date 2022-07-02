import WineCard from "./index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import wine from "../../mocks/winesjson";

describe("Test if product wine card is render as aspected", () => {
	it("Card are render correctly", () => {
		render(<WineCard wine={wine[0]} />);
		const wineImage = screen.getByAltText("Wine");
		const wineName = screen.getByText(
			"Bacalhôa Quinta da Garrida Colheita Selecionada 2015"
		);
		const price = screen.getByText("R$ 175,90");
		const priceDescount = screen.getByText("45%OFF");
		const wineMember = screen.getByText("Sócio Wine");
		const memberPrice = screen.getByText("R$ 96,90");
		const notMember = screen.getByText("Não sócio Wine R$ 114,00");
		expect(wineImage).toBeInTheDocument();
		expect(wineName).toBeInTheDocument();
		expect(price).toBeInTheDocument();
		expect(priceDescount).toBeInTheDocument();
		expect(wineMember).toBeInTheDocument();
		expect(memberPrice).toBeInTheDocument();
		expect(notMember).toBeInTheDocument();
	});
});
