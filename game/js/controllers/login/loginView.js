import { View } from "../view.js";

export class LoginView extends View {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.id = 'loginView';
        this.elementsContainer.className = 'loginView-elementsContainer';

        var okBtn = document.createElement('div');
        this.elementsContainer.appendChild(okBtn);
        okBtn.innerHTML = 'OK';
        okBtn.className = 'game-button';
    }
}