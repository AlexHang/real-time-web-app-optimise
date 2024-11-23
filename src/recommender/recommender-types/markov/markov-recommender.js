import { RecommenderBaseClass } from "../../recommender-base/recommender-base.js";
import { MarkovChain } from "./utils/markov-chain.js";

export class MarkovRecommender extends RecommenderBaseClass{
    markovChain;

    constructor(pageResourceMapping = {}, userHistory = []){
        super();
        this.pageResourcesMapping = pageResourceMapping;
        this.userHistory = userHistory;
        this.markovChain = new MarkovChain(this.userHistory);
    }

    addNewEntryToHistory(entry){
        this.userHistory.push(entry);
    }

    predictNextAction(){
        this.markovChain = new MarkovChain(this.userHistory);
        return this.markovChain.predictNextPage(this.userHistory.slice(-1))
    }

    
}