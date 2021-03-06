import { useQuiz } from "../Contexts/QuizContext";
import { v4 } from "uuid";
import "./ShowResults.css";
import { useTheme } from "../Contexts/ThemeContext";

export const ShowResults = ({ category, score, userAnswer }: any) => {
	const { Questions } = useQuiz();
	const { theme } = useTheme();
	const filteredQuestions = Questions?.filter(
		(question) => question?.category?.toLowerCase() === category?.toLowerCase()
	);

	return (
		<div className="results__container">
			<h3>Your Score: {score}</h3>
			{filteredQuestions?.map((ques) => {
				return (
					<div
						className={`${
							theme === "dark"
								? "results__questions"
								: "results__questions__light"
						}`}
						key={v4()}
					>
						{ques?.category?.toLowerCase() === category && (
							<p>{ques?.question}</p>
						)}

						{ques.category?.toLowerCase() === category &&
							ques?.options?.map((option) => {
								let newColor = "";
								for (let i of userAnswer) {
									if (i.quesId === ques._id) {
										if (i._id === option._id) {
											newColor = option.isRight
												? "#10b981"
												: !option.isRight
												? "#dc2626"
												: "";
										}
									}
								}
								return (
									<div className="results__options" key={v4()}>
										<p
											style={{
												backgroundColor: `${
													newColor === "" && option.isRight
														? "#10b981"
														: newColor
												}`,
											}}
										>
											{option.option}
										</p>
									</div>
								);
							})}
					</div>
				);
			})}
		</div>
	);
};
