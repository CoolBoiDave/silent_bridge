import React from "react";
import styles from "./QuizCard.module.css";
import { Link } from "react-router";

function QuizCard({ title, index }) {
	return (
		<Link to={`quiz/${index}`}>
			<article className={styles.card}>
				<h2 className={styles.title}>{title}</h2>
				<button className={styles.actionButton}>
					Kerjakan Sekarang!
				</button>
			</article>
		</Link>
	);
}

export default QuizCard;
