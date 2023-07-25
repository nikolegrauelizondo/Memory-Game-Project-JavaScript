import { View } from "../view.js";

export class ScoresView extends View {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.id = 'scoresView';
        this.elementsContainer.className = 'scoresView-elementsContainer';
    }
}