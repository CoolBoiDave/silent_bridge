import React, { useEffect, useState, useRef } from "react";
import styles from "./styles/QuizHeader.module.css";

const Timer = ({ duration = 30, onTimeUp }) => {
	const [secondsLeft, setSecondsLeft] = useState(duration);
	const endTimeRef = useRef(Date.now() + duration * 1000);

	useEffect(() => {
		const tick = () => {
			const timeLeft = Math.max(
				0,
				Math.round((endTimeRef.current - Date.now()) / 1000)
			);
			setSecondsLeft(timeLeft);
			if (timeLeft === 0 && onTimeUp) {
				onTimeUp();
				clearInterval(interval);
			}
		};

		const interval = setInterval(tick, 250); // more frequent, smoother
		tick(); // run immediately

		return () => clearInterval(interval);
	}, [onTimeUp]);

	return <div className={styles.timer}>{secondsLeft}</div>;
};

export default Timer;
