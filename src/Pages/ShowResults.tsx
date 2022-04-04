import { useQuiz } from "../Contexts/QuizContext";
import { v4 } from "uuid";
import "./ShowResults.css";

export const ShowResults = ({ category, score, userAnswer }: any) => {
	const { Questions } = useQuiz();

	let newColor: string;

	return (
		<div className="results__container">
			<h3>Your Score: {score}</h3>
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
										newColor =
											i._id === option._id && option.isRight
												? "#10b981"
												: i._id === option._id && !option.isRight
												? "#dc2626"
												: "";
									}
								}
								return (
									<div className="results__options" key={v4()}>
										<p
											style={{
												backgroundColor: `${
													option.isRight ? "#10b981" : newColor
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
