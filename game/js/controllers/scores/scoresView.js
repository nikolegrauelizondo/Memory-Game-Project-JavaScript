import { ControllerView } from "../controllerView.js";

export class ScoresView extends ControllerView {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.id = 'scoresView';
        this.elementsContainer.className = 'scoresView-elementsContainer';
    }
}