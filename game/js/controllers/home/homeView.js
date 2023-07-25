import { CREDITS_STATE, DIFFICULTY_STATE, LOGIN_STATE, PLAY_STATE, SCORES_STATE, THEMES_STATE } from "../../libs/constants.js";
import { div, p } from "../../libs/html.js";
import { View } from "../view.js";

export class HomeView extends View {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.id = 'homeView';
        this.elementsContainer.className = 'homeView-elementsContainer';

        // img({ src: './src/images/logo.svg', className: 'homeView-logo' }, this.elementsContainer);
        // p({ innerHTML: 'Can You Beat This?', className: 'game-text' }, this.elementsContainer);
        // div({ innerHTML: 'Scores Data', className: 'homeView-scores-widget' }, this.elementsContainer);

        // p({ innerHTML: 'Are You Ready?', className: 'game-text homeView-game-text' }, this.elementsContainer);

        // var playBtn = div({ innerHTML: 'Play', className: 'game-button', onclick: this.onButtonClick.bind(this, PLAY_STATE) }, this.elementsContainer);

        // p({ innerHTML: 'Let's Check Other Things!', className: 'game-text homeView-game-text' }, this.elementsContainer);
        // var buttonsContainer = div({ className: 'homeView-buttonContainer' }, this.elementsContainer);
        var loginBtn = div({ innerHTML: 'Login', className: 'game-button', onclick: this.onButtonClick.bind(this, LOGIN_STATE) }, this.elementsContainer);
        var playBtn = div({ innerHTML: 'Play', className: 'game-button', onclick: this.onButtonClick.bind(this, PLAY_STATE) }, this.elementsContainer);
        var scoresBtn = div({ innerHTML: 'Scores', className: 'game-button', onclick: this.onButtonClick.bind(this, SCORES_STATE) }, this.elementsContainer); // Replace 'this.elementsContainer' to 'buttonsContainer'
        var difficultyBtn = div({ innerHTML: 'Difficulty', className: 'game-button', onclick: this.onButtonClick.bind(this, DIFFICULTY_STATE) }, this.elementsContainer); // Replace 'this.elementsContainer' to 'buttonsContainer'
        var themesBtn = div({ innerHTML: 'Themes', className: 'game-button', onclick: this.onButtonClick.bind(this, THEMES_STATE) }, this.elementsContainer); // Replace 'this.elementsContainer' to 'buttonsContainer'
        var creditsBtn = div({ innerHTML: 'Credits', className: 'game-button', onclick: this.onButtonClick.bind(this, CREDITS_STATE) }, this.elementsContainer); // Replace 'this.elementsContainer' to 'buttonsContainer'
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