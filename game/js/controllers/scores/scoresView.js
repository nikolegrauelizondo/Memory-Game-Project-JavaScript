import { ControllerView } from "../controllerView.js";
import { ScoreView } from "./scoreView.js";

export class ScoresView extends ControllerView {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.id = 'scoresView';
        this.elementsContainer.className = 'scoresView-elementsContainer';
    }

    showScores(scores) {
        scores.forEach(score => {
            let scoreView = new ScoreView(this.elementsContainer, score);
        });
    }
}