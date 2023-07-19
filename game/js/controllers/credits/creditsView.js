import { View } from "../view.js";

export class CreditsView extends View {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'creditsView';

        var text = document.createElement('p');
        this.container.appendChild(text);
        loginBtn.text = 'Add credits here.';
    }
}