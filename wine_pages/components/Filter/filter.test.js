import Filter from "./index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Test if filter page is render as aspected", () => {
	it("Paginas são renderizadas corretamente", () => {
        expect(true)
		render(<Filter />);
	});
});
