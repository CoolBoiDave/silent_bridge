import React from "react";
import styles from "./ModuleCard.module.css";
import { Link, useNavigate } from "react-router-dom";
function ModuleCard({ title, index }) {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/learn");
	};

	return (
		<Link to={`lesson/${index + 1}`}>
			<article className={styles.card}>
				<h2 className={styles.title}>{title}</h2>
				<button className={styles.actionButton} onClick={handleClick}>
					Belajar Sekarang!
				</button>
			</article>
		</Link>
	);
}

export default ModuleCard;
