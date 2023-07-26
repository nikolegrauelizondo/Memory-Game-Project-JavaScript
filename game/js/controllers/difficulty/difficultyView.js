import { DIFFICULTY_LOW, DIFFICULTY_MEDIUM, DIFFICULTY_HIGH } from "../../libs/constants.js";
import { div, p } from "../../libs/html.js";
import { ControllerView } from "../controllerView.js";

export class DifficultyView extends ControllerView {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.id = 'difficultyView';
        this.elementsContainer.className = 'difficultyView-elementsContainer';

        div({ innerHTML: 'Low', className: 'game-button', onclick: this.onButtonClick.bind(this, DIFFICULTY_LOW) }, this.elementsContainer);

        div({ innerHTML: 'Medium', className: 'game-button', onclick: this.onButtonClick.bind(this, DIFFICULTY_MEDIUM) }, this.elementsContainer);

        div({ innerHTML: 'High', className: 'game-button', onclick: this.onButtonClick.bind(this, DIFFICULTY_HIGH) }, this.elementsContainer);
    }

    onButtonClick(difficulty) {
        var event = new CustomEvent('save-difficulty', {
            detail: {
                difficulty: difficulty,
            },
            bubbles: true,
            cancelable: true,
            composed: false,
        });

        this.container.dispatchEvent(event);
    }
}