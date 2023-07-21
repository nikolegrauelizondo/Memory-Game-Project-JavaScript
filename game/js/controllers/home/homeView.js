import { div, p } from "../../libs/html.js";
import { View } from "../view.js";

export class HomeView extends View {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'homeView';

        var text = p({ innerHTML: '¡Hello!', className: 'homeView_text', }, this.container);
        console.dir(text);
        var loginBtn = div({ innerHTML: 'Login', className: 'game-button' }, this.container);
        var playBtn = div({ innerHTML: 'Play', className: 'game-button' }, this.container);
    }
}