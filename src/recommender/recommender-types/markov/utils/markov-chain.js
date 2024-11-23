export class MarkovChain {
    constructor(history) {
      this.setUserHistory(history);
    }

    setUserHistory(history){
        this.transitions = {};

        // Build the Markov Chain transitions
        for (let i = 0; i < history.length - 1; i++) {
          const currentState = history[i];
          const nextState = history[i + 1];
  
          if (!this.transitions[currentState]) {
            this.transitions[currentState] = {};
          }
  
          if (!this.transitions[currentState][nextState]) {
            this.transitions[currentState][nextState] = 1;
          } else {
            this.transitions[currentState][nextState]++;
          }
        }
  
        // Normalize transition probabilities
        this.normalizeTransitions();
    }

    normalizeTransitions() {
      for (const state in this.transitions) {
        const totalTransitions = Object.values(
          this.transitions[state]
        ).reduce((acc, count) => acc + count, 0);

        for (const nextState in this.transitions[state]) {
          this.transitions[state][nextState] /= totalTransitions;
        }
      }
    }

    predictNextPage(...pages) {
      const currentState = pages.slice(-1)[0];
      const prevState = pages.length > 1 ? pages[pages.length - 2] : null;

      const possibleNextPages = this.transitions[prevState || currentState];

      if (!possibleNextPages) {
        console.log(`No prediction for ${currentState}`);
        return;
      }

      const nextPageOptions = Object.entries(possibleNextPages);
      const nextPage = this.selectNextPage(nextPageOptions);

      console.log(
        "Possible next pages:",
        nextPageOptions
      );
      console.log(`Predicted next page: ${nextPage}`);
      return {
        topPrediction: nextPage,
        allPredictions: nextPageOptions.map(([page, probability]) => ({ page, probability })),
      }
    }

    selectNextPage(nextPageOptions) {
      const threeshold = 0.3;
      // Fallback to the last option (should not reach here, just in case)
      return  nextPageOptions.sort((a, b) => b[1] - a[1])[0][0];
    }

    printChain() {
      console.log("Markov Chain Transition Probabilities:\n");

      for (const state in this.transitions) {
        console.log(`From ${state}:`);
        for (const nextState in this.transitions[state]) {
          const probability = this.transitions[state][nextState];
          console.log(
            `  - To ${nextState} with probability ${probability}`
          );
        }
        console.log("\n");
      }
    }
  }
