import { View } from "../view.js";

export class CreditsView extends View {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.id = 'creditsView';
        this.elementsContainer.className = 'creditsView-elementsContainer';

        var text = document.createElement('p');
        this.elementsContainer.appendChild(text);
        text.innerHTML = 'Add credits here.';
    }
}