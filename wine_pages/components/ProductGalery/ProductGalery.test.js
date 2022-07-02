import ProductGalery from "./";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import wine from "../../mocks/winesjson";
describe("Test if product galery render as aspected", () => {
	it("Buttons are render correctly", () => {
		render(<ProductGalery data={{ items: wine }} filter={[0, 9999]} />);
		const [button1, button2] = screen.getAllByRole("button", {
			name: "Adicionar",
		});
		expect(button1).toBeInTheDocument();
		expect(button2).toBeInTheDocument();
	});
	it("Cards are render correctly", () => {
		render(<ProductGalery data={{ items: wine }} filter={[0, 9999]} />);
		const cardsAndButtons = screen.getAllByTestId("button-and-card");
		expect(cardsAndButtons).toHaveLength(2);
		expect(cardsAndButtons[0]).toBeInTheDocument();
		expect(cardsAndButtons[1]).toBeInTheDocument();
	});


});
