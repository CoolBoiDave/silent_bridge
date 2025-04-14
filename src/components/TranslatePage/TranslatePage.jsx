import React from "react";
import styles from "./TranslatePage.module.css";
import Header from "../Header";
import MainContent from "./MainContent";

const TranslatePage = () => {
	return (
		<>
			<link
				href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap'
				rel='stylesheet'
			/>
			<div className={styles.container}>
				<MainContent />
			</div>
		</>
	);
};

export default TranslatePage;
