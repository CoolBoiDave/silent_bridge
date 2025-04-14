import React, { useEffect, useState } from "react";
import styles from "./styles/QuizHeader.module.css";
import { useNavigate } from "react-router";
import Timer from "./Timer";

const QuizHeader = ({ questions, currentQ }) => {
	const navigate = useNavigate();

	function onTimeUp() {}

	return (
		<header className={styles.header}>
			<button
				className={styles.backButton}
				onClick={() => {
					navigate(-1);
				}}
			>
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M13.4529 12.0001L17.9487 16.4961C17.9487 16.4961 17.9487 16.4961 17.9487 16.4961C18.3504 16.8977 18.3504 17.5474 17.9487 17.949L13.4529 12.0001ZM13.4529 12.0001L17.9487 7.50411C17.9487 7.50409 17.9487 7.50408 17.9487 7.50406C18.3504 7.10249 18.3504 6.45276 17.9487 6.05118C17.5471 5.64961 16.8974 5.64961 16.4959 6.05118L11.9999 10.5472L7.50415 6.05119L7.50411 6.05114C7.10244 5.64966 6.45292 5.64958 6.05132 6.05114L13.4529 12.0001ZM11.9999 13.453L16.4959 17.949C16.6961 18.1493 16.9595 18.25 17.2223 18.25C17.485 18.25 17.7484 18.1493 17.9487 17.949L11.9999 13.453ZM11.9999 13.453L7.50415 17.949L7.32737 17.7722L7.50415 17.949C7.30387 18.1493 7.04047 18.25 6.77772 18.25C6.51503 18.25 6.25142 18.1493 6.0512 17.9489C5.64957 17.5473 5.6496 16.8977 6.05128 16.4961C6.0513 16.4961 6.05131 16.4961 6.05132 16.4961L10.5471 12.0001L6.05132 7.50411C6.05131 7.50409 6.0513 7.50408 6.05128 7.50406C5.64957 7.10249 5.64957 6.45276 6.05128 6.05118L11.9999 13.453Z'
						fill='#340505'
						stroke='#340505'
						strokeWidth='0.5'
					/>
				</svg>
			</button>
			<Timer onTimeUp={onTimeUp} />
			<div className={styles.progressWrapper}>
				<div className={styles.infoIcon}>i</div>
				<div className={styles.progress}>
					<span className={styles.current}>{currentQ + 1}</span>
					<span className={styles.separator}>/</span>
					<span className={styles.total}>{questions.length}</span>
				</div>
			</div>
		</header>
	);
};

export default QuizHeader;
