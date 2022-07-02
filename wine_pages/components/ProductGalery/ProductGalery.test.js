import ProductGalery from "./";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import wine from "../../mocks/winesjson";
describe("Test if product galery render as aspected", () => {
	it("Buttons are render correctly", () => {
		render(<ProductGalery data={{ items: wine }} />);
		const [button1, button2] = screen.getAllByRole("button", {
			name: "Adicionar",
		});
		expect(button1).toBeInTheDocument();
		expect(button2).toBeInTheDocument();
	});
});
