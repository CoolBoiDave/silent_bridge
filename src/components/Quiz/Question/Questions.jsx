"use client";
import React, { useState } from "react";
import QuizHeader from "./QuizHeader";
import QuestionContent from "./QuestionContent";
import AnswerOptions from "./AnswerOptions";
import ContinueButton from "./ContinueButton";
import styles from "./styles/QuizQuestion.module.css";
import { useNavigate } from "react-router";

const Questions = () => {
	const QUESTIONS_LIST = [
		{
			title: "Tentukan a dan b!",
			options: [
				"a adalah M, b adalah N",
				"a adalah N, b adalah N",
				"a adalah A, b adalah Y",
			],
			correct: "a adalah M, b adalah N",
			image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ecac746fc5db30765fe8c4153a27b2859db3ee42?placeholderIfAbsent=true",
		},
		{
			title: "Tentukan a dan b!",
			options: [
				"a adalah H, b adalah I",
				"a adalah H, b adalah L",
				"a adalah L, b adalah I",
			],
			correct: "a adalah H, b adalah I",
			image: "/src/assets/sign2.png",
		},
		{
			title: "Tentukan a dan b!",
			options: [
				"a adalah P, b adalah L",
				"a adalah Q, b adalah R",
				"a adalah Q, b adalah L",
			],
			correct: "a adalah Q, b adalah R",
			image: "/src/assets/sign3.png",
		},
	];

	const [currentQ, setCurrentQ] = useState(0);
	const [selected, setSelected] = useState("");
	const [mode, setMode] = useState(false);
	const navigate = useNavigate();

	function nextQuestion() {
		if (!mode) {
			setMode(true);
		} else {
			setCurrentQ((curr) => curr + 1);
			setSelected("");
			setMode(false);
		}

		if (currentQ == QUESTIONS_LIST.length - 1 && mode == true) {
			navigate("../summary");
		}
	}

	return (
		<>
			<link
				href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Plus+Jakarta+Sans:wght@600;700&display=swap'
				rel='stylesheet'
			/>
			<main className={styles.container}>
				<QuizHeader questions={QUESTIONS_LIST} currentQ={currentQ} />
				<QuestionContent
					questions={QUESTIONS_LIST}
					currentQ={currentQ}
				/>
				<AnswerOptions
					questions={QUESTIONS_LIST}
					currentQ={currentQ}
					selected={selected}
					setSelected={setSelected}
					mode={mode}
				/>
				<ContinueButton
					disabled={selected ? false : true}
					onClick={nextQuestion}
					mode={mode}
				/>
			</main>
		</>
	);
};

export default Questions;
