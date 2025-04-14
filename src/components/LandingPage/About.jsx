"use client";
import React from "react";
import styles from "./about.module.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const About = () => {
	return (
		<section className={styles.aboutSection}>
			<div className={styles.titleWrapper}>
				<h2 className={styles.title}>Apa itu Silent Bridge?</h2>
			</div>
			<div className={styles.content}>
				<DotLottieReact
					src='https://lottie.host/1f8570bd-cba2-4082-9ff2-6464a63ca7bc/dy5TUlO5Uz.lottie'
					loop
					autoplay
					className={styles.aboutImage}
				/>

				<p className={styles.description}>
					Silent Bridge adalah platform AI yang menerjemahkan bahasa
					isyarat ke teks untuk memudahkan komunikasi penyandang
					disabilitas serta menyediakan pembelajaran bahasa isyarat
					bagi non-disabilitas.
				</p>
			</div>
		</section>
	);
};
