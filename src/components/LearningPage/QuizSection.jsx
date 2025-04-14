import React from "react";
import QuizCard from "./QuizCard";
import styles from "./QuizSection.module.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function QuizSection() {
	return (
		<section className={styles.quizSection}>
			<div className={styles.quizContent}>
				<p className={styles.quizDescription}>
					<div className={styles.triangle}></div>
					Wow! Anda sudah menyelesaikan keenam bab tersebut? Ayo
					kerjakan QUIZ untuk melatih pemahaman Anda !
				</p>
				<DotLottieReact
					src='https://lottie.host/8c92442b-566d-4bcb-839f-d250aba84ec0/jNiYBSmlXO.lottie'
					loop
					autoplay
					className={styles.quizImage}
				/>
			</div>
			<div className={styles.quizGrid}>
				<QuizCard index={1} title='QUIZ 1 REVIEW' />
				<QuizCard index={2} title='QUIZ 2 REVIEW' />
			</div>
		</section>
	);
}

export default QuizSection;
