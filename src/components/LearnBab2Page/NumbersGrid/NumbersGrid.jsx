import React from "react";
import styles from "./numbersGrid.module.css";

const NumbersGrid = () => {
	return (
		<>
			<section className={styles.chapterSection}>1 to 10</section>
			<section className={styles.numbersContainer}>
				<div className={styles.numberGrid}>
					<div className={styles.contentGrid}>
						<div className={styles.imageColumn}>
							<div className={styles.imageRow}>
								<img
									src='/src/assets/hand1.png'
									alt='Number 6'
									className={styles.numberImage}
								/>
								<img
									src='/src/assets/hand2.png'
									alt='Number 7'
									className={styles.numberImage}
								/>
								<img
									src='/src/assets/hand3.png'
									alt='Number 8'
									className={styles.numberImage}
								/>
							</div>
						</div>
						<div className={styles.textColumn}>
							<div className={styles.imageRow}>
								<img
									src='/src/assets/hand4.png'
									alt='Number 9'
									className={styles.numberImage}
								/>
								<img
									src='/src/assets/hand5.png'
									alt='Number 10'
									className={styles.numberImage}
								/>
							</div>
						</div>
					</div>
					<div className={styles.numberRow}>
						<div>1</div>
						<div>2</div>
						<div>3</div>
						<div>4</div>
						<div>5</div>
					</div>

					<div
						className={styles.contentGrid}
						style={{ marginTop: "100px" }}
					>
						<div className={styles.imageColumn}>
							<div className={styles.imageRow}>
								<img
									src='https://cdn.builder.io/api/v1/image/assets/TEMP/4882e3474025dd8bc97d4bbf46bd108ae91097f0?placeholderIfAbsent=true'
									alt='Number 6'
									className={styles.numberImage}
								/>
								<img
									src='https://cdn.builder.io/api/v1/image/assets/TEMP/c1c41f74a8eb354d14ff7942c9d9cd1efd0c8359?placeholderIfAbsent=true'
									alt='Number 7'
									className={styles.numberImage}
								/>
								<img
									src='https://cdn.builder.io/api/v1/image/assets/TEMP/a874f7292c4410640e64b011ef255a0464a00eef?placeholderIfAbsent=true'
									alt='Number 8'
									className={styles.numberImage}
								/>
							</div>
						</div>
						<div className={styles.textColumn}>
							<div className={styles.imageRow}>
								<img
									src='https://cdn.builder.io/api/v1/image/assets/TEMP/2788a65711239748e9b4555755b654978a588bce?placeholderIfAbsent=true'
									alt='Number 9'
									className={styles.numberImage}
								/>
								<img
									src='https://cdn.builder.io/api/v1/image/assets/TEMP/c38981f3ef1bdacf35bb26bb38620f71abbe8556?placeholderIfAbsent=true'
									alt='Number 10'
									className={styles.numberImage}
								/>
							</div>
						</div>
					</div>
					<div className={styles.numberRow}>
						<div>6</div>
						<div>7</div>
						<div>8</div>
						<div>9</div>
						<div>10</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default NumbersGrid;
