import { Controller } from "../controller.js";
import { PlayView } from "./playView.js";

export class PlayController extends Controller {
    constructor(gameManager, parent) {
        super(gameManager);
        this.view = new PlayView(this, parent);
    }
}