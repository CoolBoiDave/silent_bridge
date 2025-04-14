import React from "react";
import styles from "./Start.module.css";

function QuizWelcome({ mode }) {
	return (
		<section className={styles.welcome}>
			<div className={styles.illustration}>
				<img
					src={
						!mode
							? "https://cdn.builder.io/api/v1/image/assets/TEMP/bc7c4e341dba66c78ecd941be5dd30034c2151b8?placeholderIfAbsent=true&apiKey=1c0d8504a46d4cf6a4e6bf294f3e1f52"
							: "/src/assets/happy.png"
					}
					alt='Quiz illustration'
					className={styles.illustrationImage}
				/>
			</div>
			<div className={styles.textContent}>
				<h1 className={styles.title}>
					{!mode
						? "Siap untuk menguji kemampuanmu ?"
						: "Quiz kamu telah selesai !"}
				</h1>
				<p className={styles.description}>
					<span className={styles.timerText}>
						{!mode
							? "Setiap pertanyaan memiliki timer selama 30 detik! Mari kita uji kemampuanmu!"
							: "Kerja bagus! Ayo tingkatkan pengetahuanmu lagi dengan mengerjakan QUIZ 2!"}
					</span>
					{!mode && (
						<span className={styles.goodluckText}>Goodluck!</span>
					)}
				</p>
			</div>
		</section>
	);
}

export default QuizWelcome;
