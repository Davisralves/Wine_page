import Home from "../pages/index";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'

describe("Test if index page work as aspected", () => {
	it("Hello next é renderizado corretamente", () => {
		render(<Home />);
		const title = screen.getByRole("heading", { level: 1, name: "Hello Next" });
		expect(title).toBeInTheDocument();
	});
});
