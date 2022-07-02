import Home from "../pages/index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Test if index page work as aspected", () => {
	it("Test if first page render as aspected", () => {
		render(<Home />);
		const redefineSearch = screen.getByRole("heading", {
			level: 4,
			name: "Redefine sua busca",
		});
		const wineCount = screen.getByText(/Produtos encontrados/);
		expect(redefineSearch).toBeInTheDocument();
		expect(wineCount).toBeInTheDocument();
	});
});
