import Filter from "./index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Test if filter page is render as aspected", () => {
	it("title is render correctly", () => {
		render(<Filter />);
		const title = screen.getByText("Por Preço");
		expect(title).toBeInTheDocument();
	});
	it("labels are render correctly", () => {
		render(<Filter />);
		const firstLabel = screen.getByLabelText("Até 40");
		const secondLabel = screen.getByLabelText("R$40 A R$60");
		const thirdLabel = screen.getByLabelText("R$100 A R$200");
		const fourthLabel = screen.getByLabelText("R$200 A R$500");
		const fithLabel = screen.getByLabelText("Acima de R$500");
		expect(firstLabel).toBeInTheDocument();
		expect(secondLabel).toBeInTheDocument();
		expect(thirdLabel).toBeInTheDocument();
		expect(fourthLabel).toBeInTheDocument();
		expect(fithLabel).toBeInTheDocument();
	});
	it("radio buttons are render correctly", () => {
		render(<Filter />);
		const radioButtons = screen.getAllByRole("radio");
		expect(radioButtons).toHaveLength(5);
		radioButtons.forEach((radioButton) => {
			expect(radioButton).toBeInTheDocument();
		});
	});
});
