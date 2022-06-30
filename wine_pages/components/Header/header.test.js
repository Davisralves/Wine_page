import Header from "./index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Test if Header page is render as aspected", () => {
	it("Paginas são renderizadas corretamente", () => {
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
});
