import React, { useState } from "react";
import styles from "./styles/AnswerOptions.module.css";

const AnswerOptions = ({
	questions,
	currentQ,
	selected,
	setSelected,
	mode,
}) => {
	return (
		<section className={styles.optionsContainer}>
			{questions[currentQ].options.map((option) => (
				<label
					key={option}
					className={`${styles.optionButton} ${
						selected === option &&
						!mode &&
						styles.optionButtonChecked
					}  ${
						mode &&
						selected === option &&
						option !== questions[currentQ].correct &&
						styles.optionButtonWrong
					} ${
						mode &&
						option === questions[currentQ].correct &&
						styles.optionButtonCorrect
					}  ${mode && styles.optionButtonDisabled}`}
					htmlFor={option}
				>
					<div className={`${styles.optionText}`}>{option}</div>
					<input
						type='radio'
						id={option}
						name='mcq'
						value={option}
						checked={selected === option}
						onChange={() => setSelected(option)}
						className={styles.optionInput}
						disabled={mode}
					/>
				</label>
			))}
		</section>
	);
};

export default AnswerOptions;
