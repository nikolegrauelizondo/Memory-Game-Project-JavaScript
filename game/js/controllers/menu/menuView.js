import { View } from "../view.js";

export class MenuView extends View {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'menuView';

        var loginBtn = document.createElement('div');
        this.container.appendChild(loginBtn);
        loginBtn.innerHTML = 'Login';
        loginBtn.className = 'game-button';

        var playBtn = document.createElement('div');
        this.container.appendChild(playBtn);
        playBtn.innerHTML = 'Play';
        playBtn.className = 'game-button';
    }
}