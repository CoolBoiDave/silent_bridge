import React from "react";
import styles from "./Start.module.css";
import { useNavigate, Link } from "react-router";

function ActionButtons({ mode }) {
	const navigate = useNavigate();
	return (
		<div className={styles.buttonContainer}>
			<Link
				to={mode ? "../../.." : "question"}
				className={styles.startButton}
			>
				{!mode ? "KERJAKAN QUIZ ! ✏️" : "Start Over"}
			</Link>

			{!mode && (
				<button
					className={styles.reviewButton}
					onClick={() => navigate(-1)}
				>
					Review dulu deh !
				</button>
			)}
		</div>
	);
}

export default ActionButtons;
