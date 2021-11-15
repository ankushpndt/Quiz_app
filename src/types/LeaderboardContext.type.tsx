export type LeaderboardContextType = {
  leaderboard: Leaderboard[];
  setLeaderboard: Function;
  //   name: string;
};
export type Leaderboard = {
  id: string;
  name: string;
  score: number;
  category: string;
  __v: number;
};
