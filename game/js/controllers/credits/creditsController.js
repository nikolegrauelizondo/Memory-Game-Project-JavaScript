import { Controller } from "../controller.js";
import { CreditsView } from "./creditsView.js";

export class CreditsController extends Controller {
    constructor(gameManager, parent) {
        super(gameManager);
        this.view = new CreditsView(this, parent);
    }
}