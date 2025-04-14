import React from "react";
import styles from "./Lesson2.module.css";
import ChapterHeader from "./ChapterHeader/ChapterHeader";
import NumbersGrid from "./NumbersGrid/NumbersGrid";

const Lesson2 = () => {
	return (
		<div className={styles.container}>
			<ChapterHeader />
			<NumbersGrid />
		</div>
	);
};

export default Lesson2;
