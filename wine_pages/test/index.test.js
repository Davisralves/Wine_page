import Home from "../pages/index";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import wine from "../mocks/winesjson";
describe("Test if index page work as aspected", () => {
	it("Test if first page render as aspected", () => {
		render(<Home data={{ items: wine }} />);
		const redefineSearch = screen.getByRole("heading", {
			level: 4,
			name: "Redefine sua busca",
		});
		const wineCount = screen.getByText(/Produtos encontrados/);
		expect(redefineSearch).toBeInTheDocument();
		expect(wineCount).toBeInTheDocument();
	});
	it("Test if cart Counter work as aspected", () => {
		render(<Home data={{ items: wine }} />);
		const cartCounter = screen.getByTestId("cart-counter");
		expect(cartCounter).toBeInTheDocument();
		expect(cartCounter.textContent).toBe("0");
		fireEvent.click(screen.getAllByRole("button")[0]);
		expect(cartCounter.textContent).toBe("1");
	});
});
