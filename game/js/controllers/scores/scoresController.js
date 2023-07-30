import { Controller } from "../controller.js";
import { ScoresService } from "./scoresService.js";
import { ScoresView } from "./scoresView.js";

export class ScoresController extends Controller {
    constructor(gameManager, parent) {
        super(gameManager);
        this.view = new ScoresView(this, parent);
        this.service = new ScoresService(this);
        this.service.getScores();
        this.scores = [];
    }

    showScores(scores) {
        this.scores = scores;
        this.view.showScores(this.scores);
    }
}