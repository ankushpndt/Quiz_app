import { NavLink } from "react-router-dom";

import Marvel from "../assets/marvel.jpg";
import DC from "../assets/dc.jpg";
import "./App.css";
import { useEffect } from "react";
import { useQuiz } from "../Contexts/QuizContext";
import { Loader } from "../Components/Loader";
export const Home = () => {
	const { setQuesNo, setCurrentQues, setCurrentScore, loader } = useQuiz();
	useEffect(() => {
		setQuesNo(0);
		setCurrentQues(0);
		setCurrentScore(0);
	}, [setQuesNo, setCurrentQues, setCurrentScore]);
	return (
		<>
			{!loader ? (
				<div className="home__container">
					<NavLink className="home__marvel" to="/quiz/marvel">
						<img src={Marvel} alt="marvel" className="marvel__image" />
						Marvel
						<p>5 questions</p>
					</NavLink>
					<NavLink className="home__dc" to="/quiz/dc">
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
