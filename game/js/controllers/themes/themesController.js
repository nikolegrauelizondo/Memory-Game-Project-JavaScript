import { Controller } from "../controller.js";
import { ThemesView } from "./themesView.js";

export class ThemesController extends Controller {
    constructor(gameManager, parent) {
        super(gameManager);
        this.view = new ThemesView(this, parent);
    }
}