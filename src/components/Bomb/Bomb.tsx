import React from "react";

function Bomb({ shouldThrow }: { shouldThrow: boolean }): null {
	if (shouldThrow) {
		throw new Error("💥 CABOOM 💥");
	} else {
		return null;
	}
}

export default Bomb;
