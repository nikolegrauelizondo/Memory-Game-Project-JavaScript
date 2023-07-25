import { CreditsController } from "./controllers/credits/creditsController.js";
import { DifficultyController } from "./controllers/difficulty/difficultyController.js";
import { HomeController } from "./controllers/home/homeController.js";
import { LoginController } from "./controllers/login/loginController.js";
import { PlayController } from "./controllers/play/playController.js"
import { ScoresController } from "./controllers/scores/scoresController.js"
import { ThemesController } from "./controllers/themes/themesController.js"
import { CREDITS_STATE, DIFFICULTY_STATE, HOME_STATE, LOGIN_STATE, PLAY_STATE, SCORES_STATE, THEMES_STATE } from "./libs/constants.js";

export class GameManager {
    constructor() {
        this.controller = null;
        this.contentContainer = document.getElementById('contentContainer');
        this.navigationContainer = document.getElementById('navigationContainer');
        this.backBtn = document.getElementById('navigationContainer-back-button');
        this.title = document.getElementById('navigationContainer-title');
        this.backBtn.onclick = this.goto.bind(this, HOME_STATE);

        this.homeController = new HomeController(this, this.contentContainer);
        this.presenting(HOME_STATE);

        console.dir(this.contentContainer);

        this.contentContainer.addEventListener('home-button-click', (event) => {
            this.presenting(event.detail.state);
        });

        this.contentContainer.addEventListener('hide-complete', (event) => {
            this.presenting(event.detail.state);
        });
    }

    presenting(state) {

        if (this.controller !== null) {
            this.controller.delete();
            this.controller = null;
        }

        this.backBtn.classList.remove('hidden');
        switch (state) {
            case CREDITS_STATE:
                this.title.innerHTML = 'Credits';
                this.controller = new CreditsController(this, this.contentContainer);
                break;
            case DIFFICULTY_STATE:
                this.title.innerHTML = 'Difficulty';
                this.controller = new DifficultyController(this, this.contentContainer);
                break;
            case HOME_STATE:
                this.backBtn.classList.add('hidden');
                this.title.innerHTML = 'Home';
                break;
            case LOGIN_STATE:
                this.title.innerHTML = 'Login';
                this.controller = new LoginController(this, this.contentContainer);
                break;
            case PLAY_STATE:
                this.title.innerHTML = 'Play';
                this.controller = new PlayController(this, this.contentContainer);
                break;
            case SCORES_STATE:
                this.title.innerHTML = 'Scores';
                this.controller = new ScoresController(this, this.contentContainer);
                break;
            case THEMES_STATE:
                this.title.innerHTML = 'Themes';
                this.controller = new ThemesController(this, this.contentContainer);
                break;
        }
    }

    goto(state) {

        if (this.controller !== null) {
            this.controller.hide(state);
        } else {
            this.presenting(state);
        }
    }
}