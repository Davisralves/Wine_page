import Filter from "./index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Test if filter page is render as aspected", () => {
	it("title is render correctly", () => {
		render(<Filter />);
		const title = screen.getByText("Por Preço");
		expect(title).toBeInTheDocument();
	});
	it("checkboxs are render correctly", () => {
		render(<Filter />);
		const checkboxs = screen.getAllByRole("radio");
		expect(checkboxs).toHaveLength(5);
		checkboxs.forEach((checkbox) => {
			expect(checkbox).toHaveAttribute("value");
		});
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
});
