import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import TranslatePage from "./components/TranslatePage/TranslatePage";
import LearningPlatform from "./components/LearningPage/LearningPlatform";
import Lesson1 from "./components/LearnBab1Page/Lesson1";
import Lesson2 from "./components/LearnBab2Page/Lesson2";
import RootLayout from "./components/RootLayout";
import Quiz from "./components/Quiz/Quiz";
import Questions from "./components/Quiz/Question/Questions";
import QuizSummary from "./components/Quiz/QuizSummary";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ index: true, element: <LandingPage /> },
			{ path: "translate", element: <TranslatePage /> },
			{
				path: "learn",

				children: [
					{ index: true, element: <LearningPlatform /> },
					{
						path: "lesson",
						children: [
							{ path: "1", element: <Lesson1 /> },
							{ path: "2", element: <Lesson2 /> },
						],
					},
					{
						path: "quiz",
						children: [
							{
								path: "1",

								children: [
									{
										index: true,
										element: <Quiz />,
									},
									{
										path: "question",
										element: <Questions />,
									},
									{
										path: "summary",
										element: <QuizSummary />,
									},
								],
							},
						],
					},
				],
			},
		],
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
