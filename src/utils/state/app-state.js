export class AppState {
    state;
    
    constructor() {
        this.state = {};
    }

    addEntry(key, value) {
        this.state[key] = value;
    }

    getState() {
        return this.state;
    }

    resourceExistsInState(key) {
        return !!this.state[key];
    }

    getResource(key) {
        return this.state[key];
    }
}
