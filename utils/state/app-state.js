export const appState = {
    state: {},
    addEntry(key, value){
        this.state[key] = value;
    },
    getState(){
        return this.state;
    },
    resourseExistsInState(key){
        return !!state[key];
    }
}