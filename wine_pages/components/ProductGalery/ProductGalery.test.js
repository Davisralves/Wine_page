import ProductGalery from "./";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import wine from "../../mocks/winesjson";

// ref: https://github.com/vercel/next.js/discussions/23034
// By aeksco on 20 Sep 2019
jest.mock("next/router", () => ({
	useRouter() {
		return {
			route: "/",
			pathname: "",
			query: { page: 1 },
			asPath: "",
		};
	},
}));

jest.spyOn(require("next/router"), "useRouter");

describe("Test if product galery render as aspected", () => {
	it("Buttons are render correctly", () => {
		render(
			<ProductGalery data={{ items: wine }} filter={[0, 9999]} nameFilter="" />
		);
		const [button1, button2] = screen.getAllByRole("button", {
			name: "Adicionar",
		});
		expect(button1).toBeInTheDocument();
		expect(button2).toBeInTheDocument();
	});
	it("Cards are render correctly", () => {
		render(
			<ProductGalery data={{ items: wine }} filter={[0, 9999]} nameFilter="" />
		);
		const cardsAndButtons = screen.getAllByTestId("button-and-card");
		expect(cardsAndButtons).toHaveLength(2);
		expect(cardsAndButtons[0]).toBeInTheDocument();
		expect(cardsAndButtons[1]).toBeInTheDocument();
	});
});
