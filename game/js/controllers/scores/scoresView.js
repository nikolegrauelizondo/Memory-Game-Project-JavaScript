import { View } from "../view.js";

export class ScoresView extends View {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'scoresView';
    }
}