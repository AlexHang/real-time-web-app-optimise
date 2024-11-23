import { MarkovRecommender } from "../src/recommender/recommender-types/markov/markov-recommender.js";

const userHistory = [
    "A",
    "B",
    "A",
    "C",
    "D",
    "A",
    "B",
    "A",
    "D",
    "A",
    "B",
    "D",
    "E",
    "A",
    "C",
    "B",
    "C",
    "A",
  ];

  const recommender = new MarkovRecommender({}, userHistory);
  const result = recommender.predictNextAction();
  console.log(recommender);
  console.log(result);