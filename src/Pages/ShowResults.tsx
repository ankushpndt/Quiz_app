import { useQuiz } from "../Contexts/QuizContext";
import { v4 } from "uuid";
import "./ShowResults.css";
import { useState } from "react";

export const ShowResults = ({ category, score, userAnswer }: any) => {
	const { Questions } = useQuiz();
	console.log(userAnswer);

	let test: string;

	return (
		<div className="results__container">
			<h5>Your Score: {score}</h5>
			{Questions?.map((ques) => {
				return (
					<div className="results__questions" key={v4()}>
						{ques?.category?.toLowerCase() === category && (
							<p>{ques?.question}</p>
						)}

						{ques.category?.toLowerCase() === category &&
							ques?.options?.map((option) => {
								for (let i of userAnswer) {
									if (i.quesId === ques._id) {
										test =
											i._id === option._id && option.isRight
												? "#10b981"
												: i._id === option._id && !option.isRight
												? "#dc2626"
												: "";
										console.log(test);
									}
								}
								return (
									<div className="results__options" key={v4()}>
										<p
											style={{
												backgroundColor: `${option.isRight ? "#10b981" : test}`,
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
