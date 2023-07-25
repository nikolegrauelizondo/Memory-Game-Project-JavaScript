import { CREDITS_STATE, DIFFICULTY_STATE, LOGIN_STATE, PLAY_STATE, SCORES_STATE, THEMES_STATE } from "../../libs/constants.js";
import { div, p } from "../../libs/html.js";
import { View } from "../view.js";

export class HomeView extends View {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'homeView';

        var loginBtn = div({ innerHTML: 'Login', className: 'game-button', onclick: this.onButtonClick.bind(this, LOGIN_STATE) }, this.container);
        var playBtn = div({ innerHTML: 'Play', className: 'game-button', onclick: this.onButtonClick.bind(this, PLAY_STATE) }, this.container);
        var scoresBtn = div({ innerHTML: 'Scores', className: 'game-button', onclick: this.onButtonClick.bind(this, SCORES_STATE) }, this.container);
        var difficultyBtn = div({ innerHTML: 'Difficulty', className: 'game-button', onclick: this.onButtonClick.bind(this, DIFFICULTY_STATE) }, this.container);
        var themesBtn = div({ innerHTML: 'Themes', className: 'game-button', onclick: this.onButtonClick.bind(this, THEMES_STATE) }, this.container);
        var creditsBtn = div({ innerHTML: 'Credits', className: 'game-button', onclick: this.onButtonClick.bind(this, CREDITS_STATE) }, this.container);
    }

    onButtonClick(state) {
        var event = new CustomEvent('home-button-click', {
            detail: {
                state: state,
            },
            bubbles: true,
            cancelable: true,
            composed: false,
        });

        this.container.dispatchEvent(event);
    }
}