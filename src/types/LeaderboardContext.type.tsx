export type LeaderboardContextType = {
	leaderboard: Leaderboard[];
	setLeaderboard: Function;
};
export type Leaderboard = {
	id: string;
	name: string;
	score: number;
	category: string;
	__v: number;
};
