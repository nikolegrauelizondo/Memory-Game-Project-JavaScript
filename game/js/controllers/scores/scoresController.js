import { Controller } from "../controller.js";
import { ScoresView } from "./scoresView.js";

export class ScoresController extends Controller {
    constructor(gameManager, parent) {
        super(gameManager);
        this.view = new ScoresView(this, parent);
    }
}