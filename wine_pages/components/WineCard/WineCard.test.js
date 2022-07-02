import WineCard from "./index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Test if product wine card is render as aspected", () => {
	it("Card are render correctly", () => {
		render(<WineCard />);
		const wineImage = screen.getByAltText("Wine");
		const wineName = screen.getByText("Wine Name");
		const price = screen.getByText("R$ 37,50");
		const priceDescount = screen.getByText("50% OFF");
		const wineMember = screen.getByText("Sócio Wine");
		const memberPrice = screen.getByText("R$ 30,00");
		const notMember = screen.getByText("Não sócio Wine 37,40");
		expect(wineImage).toBeInTheDocument();
		expect(wineName).toBeInTheDocument();
		expect(price).toBeInTheDocument();
		expect(priceDescount).toBeInTheDocument();
		expect(wineMember).toBeInTheDocument();
		expect(memberPrice).toBeInTheDocument();
		expect(notMember).toBeInTheDocument();
	});
});
