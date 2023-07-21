import { HomeController } from "./controllers/home/homeController.js";
import { DifficultyController } from "./controllers/difficulty/difficultyController.js";
import { ThemesController } from "./controllers/themes/themesController.js"

export class GameManager {
    constructor() {
        var navigationContainer = document.getElementById('navigationContainer');
        this.backBtn = document.getElementById('navigationContainer-back-button');
        this.title = document.getElementById('navigationContainer-title');
        var contentContainer = document.getElementById('contentContainer');
        this.goto(1);
    }

    goto(controllerID) {
        switch (controllerID) {
            case 1:
                this.title.innerHTML = 'Home';
                this.controller = new HomeController(this, contentContainer);
                break;
            case 2:
                this.title.innerHTML = 'Difficulty';
                this.controller = new DifficultyController(this, contentContainer);
                break;
            case 3:
                this.title.innerHTML = 'Themes';
                this.controller = new ThemesController(this, contentContainer);
                break;
            default:
                break;
        }
    }
}