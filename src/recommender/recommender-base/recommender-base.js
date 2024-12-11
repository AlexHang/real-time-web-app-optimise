import { AppState } from '../../utils/state/app-state.js'
export class RecommenderBaseClass{
    userHistory;
    pageResourcesMapping;
    appState;

    constructor(){
        this.appState = new AppState();
    }
}