import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import * as tf from "@tensorflow/tfjs";
import {
	drawConnectors,
	drawLandmarks,
	HAND_CONNECTIONS,
	POSE_CONNECTIONS,
} from "@mediapipe/drawing_utils";
import styles from "./SignLanguageRecognition.module.css";

const actions = [
	"akan",
	"belum",
	"harus",
	"makan",
	"terimakasih",
	"tidur",
	"sudah",
	"kamu",
	"maaf",
	"mau",
	"kita",
	"lapar",
	"monyet",
	"lagi",
	"buku",
	"sangat",
	"default",
	"pisang",
	"saya",
];

const sequenceLength = 30;

export default function SignLanguageCanvas() {
	const videoRef = useRef(null);
	const canvasRef = useRef(null);
	const sentenceBoxRef = useRef(null);
	const sequence = useRef([]);
	const model = useRef(null);
	const latestResults = useRef(null);
	const lastPredictionRef = useRef("");
	const predCountRef = useRef(0);

	const cameraRef = useRef(null);

	useEffect(() => {
		async function loadModel() {
			model.current = await tf.loadGraphModel("./legacy_2/model.json");
			console.log("✅ Model loaded");
		}

		function flattenLandmarks(
			landmarks,
			totalCount,
			dimensions = 3,
			includeVisibility = false
		) {
			const output = [];
			if (landmarks && landmarks.length === totalCount) {
				for (let i = 0; i < totalCount; i++) {
					const lm = landmarks[i];
					output.push(lm.x ?? 0, lm.y ?? 0, lm.z ?? 0);
					if (includeVisibility) output.push(lm.visibility ?? 0);
				}
			} else {
				const zerosPerLandmark = includeVisibility ? 4 : 3;
				return new Array(totalCount * zerosPerLandmark).fill(0);
			}
			return output;
		}

		function extractKeypoints(results) {
			const pose = flattenLandmarks(results.poseLandmarks, 33, 3, true);
			const face = flattenLandmarks(results.faceLandmarks, 468, 3);
			const lh = flattenLandmarks(results.leftHandLandmarks, 21, 3);
			const rh = flattenLandmarks(results.rightHandLandmarks, 21, 3);
			return [...pose, ...face, ...lh, ...rh];
		}

		const holistic = new Holistic({
			locateFile: (file) =>
				`https://cdn.jsdelivr.net/npm/@mediapipe/holistic/${file}`,
		});

		holistic.setOptions({
			modelComplexity: 1,
			smoothLandmarks: true,
			enableSegmentation: false,
			refineFaceLandmarks: false,
			minDetectionConfidence: 0.5,
			minTrackingConfidence: 0.5,
		});

		holistic.onResults(async (results) => {
			latestResults.current = results;

			const keypoints = extractKeypoints(results);
			sequence.current.push(keypoints);
			if (sequence.current.length > sequenceLength)
				sequence.current.shift();

			if (sequence.current.length === sequenceLength && model.current) {
				const input = tf.tensor([sequence.current]);
				const inputName = model.current.inputs[0].name;

				try {
					const output = await model.current.executeAsync({
						[inputName]: input,
					});
					const prediction = await output.data();
					const maxIndex = prediction.indexOf(
						Math.max(...prediction)
					);
					const predictedWord = actions[maxIndex];

					if (lastPredictionRef.current === predictedWord) {
						predCountRef.current += 1;
					} else {
						predCountRef.current = 0;
					}

					lastPredictionRef.current = predictedWord;

					const currentSentence = sentenceBoxRef.current.value.trim();
					const words = currentSentence.split(" ");
					const lastWord = words[words.length - 1] || "";

					if (
						predictedWord !== "default" &&
						lastWord !== predictedWord &&
						predCountRef.current >= 8
					) {
						sentenceBoxRef.current.value +=
							(sentenceBoxRef.current.value ? " " : "") +
							predictedWord;
					}

					output.dispose();
				} catch (err) {
					console.error("🚨 Prediction error:", err);
				}
				input.dispose();
			}
		});

		function drawLoop() {
			const canvas = canvasRef.current;
			let ctx;
			try {
				ctx = canvas.getContext("2d");
			} catch (error) {
				cameraRef.current.stop(); // Stop MediaPipe processing + camera
				cameraRef.current = null;
			}

			requestAnimationFrame(drawLoop);
			if (!latestResults.current) return;

			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.save();
			ctx.scale(-1, 1);
			ctx.translate(-canvas.width, 0);

			drawConnectors(
				ctx,
				latestResults.current.poseLandmarks,
				POSE_CONNECTIONS,
				{
					color: "white",
					lineWidth: 2,
				}
			);
			drawLandmarks(ctx, latestResults.current.poseLandmarks, {
				color: "white",
				lineWidth: 1,
			});

			drawConnectors(
				ctx,
				latestResults.current.leftHandLandmarks,
				HAND_CONNECTIONS,
				{
					color: "#00FF00",
					lineWidth: 2,
				}
			);
			drawLandmarks(ctx, latestResults.current.leftHandLandmarks, {
				color: "#00FF00",
				lineWidth: 1,
			});

			drawConnectors(
				ctx,
				latestResults.current.rightHandLandmarks,
				HAND_CONNECTIONS,
				{
					color: "#FF0000",
					lineWidth: 2,
				}
			);
			drawLandmarks(ctx, latestResults.current.rightHandLandmarks, {
				color: "#FF0000",
				lineWidth: 1,
			});

			ctx.restore();
		}

		async function setup() {
			await loadModel();
			const video = videoRef.current;
			const stream = await navigator.mediaDevices.getUserMedia({
				video: true,
			});
			video.srcObject = stream;

			await new Promise((resolve) => {
				video.onloadedmetadata = () => resolve();
			});

			cameraRef.current = new window.Camera(videoRef.current, {
				onFrame: async () => {
					await holistic.send({ image: videoRef.current });
				},
				width: 640,
				height: 480,
			});

			cameraRef.current.start();
			drawLoop();
		}

		setup();
	}, []);

	return (
		<div className={styles.relative}>
			<video ref={videoRef} width='640' height='480' autoPlay />
			<canvas
				className={styles.canvas}
				ref={canvasRef}
				width='640'
				height='480'
				style={{ border: "1px solid black" }}
			/>

			<canvas width='640' height='480' />
			<textarea
				ref={sentenceBoxRef}
				id='sentenceBox'
				rows='2'
				style={{
					marginTop: "10px",
					width: "100%",
					resize: "none",
					height: "200px",
					fontSize: "32px",
				}}
				placeholder='Sentence....'
			/>
		</div>
	);
}
