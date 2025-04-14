import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./chapterHeader.module.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const ChapterHeader = () => {
	const navigate = useNavigate();

	return (
		<main className={styles.mainContent}>
			<div className={styles.contentGrid}>
				<div className={styles.imageColumn}>
					<DotLottieReact
						src='https://lottie.host/ab4c4f93-063a-4990-9a2c-1b669e7f997f/uyq65hXzyF.lottie'
						loop
						autoplay
					/>
				</div>
				<div className={styles.textColumn}>
					<div className={styles.textContent}>
						<div className={styles.chapterTitle}>BAB 2</div>
						<div className={styles.sectionTitle}>
							MENGENAL ANGKA
						</div>
						<p className={styles.description}>
							Dalam bab ini, kita akan mempelajari angka-angka
							dalam bahasa isyarat!
						</p>
						<button
							className={styles.backButton}
							onClick={() => navigate(-1)}
						>
							BALIK
						</button>
					</div>
				</div>
			</div>
		</main>
	);
};

export default ChapterHeader;
