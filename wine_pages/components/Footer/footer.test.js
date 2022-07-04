import Footer from "./";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

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

describe("Test if Footer render as aspected", () => {
	it("Buttons are render correctly", () => {
		render(<Footer />);
		const nextButton = screen.getByText("... Próximo");
		const number1Button = screen.getByText("1");
		const number2Button = screen.getByText("2");
		const number3Button = screen.getByText("3");
		expect(nextButton).toBeInTheDocument();
		expect(number1Button).toBeInTheDocument();
		expect(number2Button).toBeInTheDocument();
		expect(number3Button).toBeInTheDocument();
	});
	it('Button "Anterior ..." are render only if the page is at lest greater than one', () => {
		render(<Footer />);
		const previosButton = screen.queryByText("Anterior ...");
		expect(previosButton).not.toBeInTheDocument();
	});
});
