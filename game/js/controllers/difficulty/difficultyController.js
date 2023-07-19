import { Controller } from "../controller.js";
import { DifficultyView } from "./difficultyView.js";

export class DifficultyController extends Controller {
    constructor(gameManager, parent) {
        super(gameManager);
        this.view = new DifficultyView(this, parent);
    }
}