import Header from "./index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Test if Header page is render as aspected", () => {
	it("Pages are render as aspected", () => {
		render(<Header />);
		const clubPage = screen.getByText("Club");
		const storePage = screen.getByText("Loja");
		const producersPage = screen.getByText("Produtores");
		const offerPage = screen.getByText("Ofertas");
		const eventPage = screen.getByText("Eventos");
		expect(clubPage).toBeInTheDocument();
		expect(storePage).toBeInTheDocument();
		expect(producersPage).toBeInTheDocument();
		expect(offerPage).toBeInTheDocument();
		expect(eventPage).toBeInTheDocument();
	});
	it("Logos are render as aspected", () => {
		render(<Header />);
		const wineLogo = screen.getByAltText("wine logo");
		const searchLogo = screen.getByAltText("search logo");
		const userLogo = screen.getByAltText("user logo");
		const cartLogo = screen.getByAltText("cart logo");
		expect(wineLogo).toBeInTheDocument();
		expect(searchLogo).toBeInTheDocument();
		expect(userLogo).toBeInTheDocument();
		expect(cartLogo).toBeInTheDocument();
	});
});
