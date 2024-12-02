import React from "react";
import { render } from "../../../test-utils";
import { axe } from "jest-axe";
import FavoriteNumber from "../FavoriteNumber";

test("The FavoriteNumber component is accessible.", async () => {
	const { container } = render(<FavoriteNumber />);
	const results = await axe(container);
	// console.log(results);
	expect(results).toHaveNoViolations();
});
