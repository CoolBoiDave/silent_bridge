import styles from "./CompletionCard.module.css";
import { Link } from "react-router";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const CompletionCard = () => {
	return (
		<section className={styles.completion}>
			<DotLottieReact
				src='https://lottie.host/67ba5b6a-b97c-499d-b54c-2b23ece789b7/VU5wStZjIf.lottie'
				loop
				autoplay
			/>
			<p className={styles.message}>
				Anda telah menyelesaikan BAB 1 ! Tertarik untuk lanjut ke BAB 2
				?
			</p>
			<Link to='../2'>
				<button className={styles.continueButton}>LANJUTKAN</button>
			</Link>
		</section>
	);
};
