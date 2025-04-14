import React from "react";
import styles from "./HeroSection.module.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function HeroSection() {
	return (
		<section className={styles.hero}>
			<h1 className={styles.title}>Mari kita belajar!</h1>
			<div className={styles.container}>
				<DotLottieReact
					src='https://lottie.host/5b06e4ca-47b5-4c96-8680-01a5de76248b/bdtP0Q4KsF.lottie'
					loop
					autoplay
					className={styles.heroImage}
				/>

				<p className={styles.description}>
					<span className={styles.triangle}></span>
					Belajar bahasa isyarat berarti memahami tanpa suara. Jadilah
					jembatan komunikasi yang membawa suara hati bagi{" "}
					<span className={styles.cool}>SEMUA ORANG</span>
				</p>
			</div>
		</section>
	);
}

export default HeroSection;
