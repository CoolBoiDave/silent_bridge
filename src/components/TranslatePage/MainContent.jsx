import React from "react";
import styles from "./MainContent.module.css";
import SignLanguageCanvas from "./SignLanguageRecognition";

const MainContent = () => {
	return (
		<main className={styles.mainContent}>
			<h1 className={styles.title}>Try Our BEST Feature!</h1>
			<SignLanguageCanvas />
		</main>
	);
};

export default MainContent;
