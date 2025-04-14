import React from "react";
import styles from "./styles/ContinueButton.module.css";

const ContinueButton = ({ onClick, disabled, mode }) => {
	return (
		<button
			className={styles.continueButton}
			disabled={disabled}
			onClick={onClick}
		>
			{" "}
			{mode ? "Next Question" : "Lock It In"}
		</button>
	);
};

export default ContinueButton;
