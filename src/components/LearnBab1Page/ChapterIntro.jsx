import styles from "./ChapterIntro.module.css";
import { Link } from "react-router";

export const ChapterIntro = () => {
	return (
		<section className={styles.intro}>
			<h1 className={styles.chapterTitle}>BAB 1</h1>
			<h2 className={styles.chapterSubtitle}>MENGENAL ALFABET</h2>
			<p className={styles.description}>
				Selamat datang di pembelajaran alfabet dalam Bahasa Isyarat
				Indonesia (BISINDO)! Dalam bab ini, kita akan mengenal huruf A
				sampai Z dalam bentuk isyarat tangan.
			</p>
			<Link to='../..'>
				<button className={styles.backButton}>BALIK</button>
			</Link>
		</section>
	);
};
