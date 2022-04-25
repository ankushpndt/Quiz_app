import { NavLink } from "react-router-dom";

import Marvel from "../assets/marvel.jpg";
import DC from "../assets/dc.jpg";
import "./App.css";
import { useEffect } from "react";
import { useQuiz } from "../Contexts/QuizContext";
import { Loader } from "../Components/Loader";
import { useTheme } from "../Contexts/ThemeContext";
export const Home = () => {
	const { setQuesNo, setCurrentQues, setCurrentScore, loader } = useQuiz();
	useEffect(() => {
		setQuesNo(0);
		setCurrentQues(0);
		setCurrentScore(0);
	}, [setQuesNo, setCurrentQues, setCurrentScore]);
	const { theme } = useTheme();
	return (
		<>
			{!loader ? (
				<div className="home__container">
					<NavLink
						className={`${
							theme === "dark" ? "home__marvel" : "home__marvel__light"
						}`}
						to="/quiz/marvel"
					>
						<img src={Marvel} alt="marvel" className="marvel__image" />
						Marvel
						<p>5 questions</p>
					</NavLink>
					<NavLink
						className={`${theme === "dark" ? "home__dc" : "home__dc__light"}`}
						to="/quiz/dc"
					>
						<img src={DC} alt="dc" className="dc__image" />
						DC
						<p>5 questions</p>
					</NavLink>
				</div>
			) : (
				<Loader />
			)}
		</>
	);
};
