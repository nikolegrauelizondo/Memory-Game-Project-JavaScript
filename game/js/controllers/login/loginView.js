import { View } from "../view.js";

export class LoginView extends View {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'loginView';

        var okBtn = document.createElement('div');
        this.container.appendChild(okBtn);
        okBtn.innerHTML = 'OK';
        okBtn.className = 'game-button';
    }
}