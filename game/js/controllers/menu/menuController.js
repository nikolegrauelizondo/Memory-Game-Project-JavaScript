import { Controller } from "../controller.js";
import { MenuView } from "./menuView.js";

export class MenuController extends Controller {
    constructor(gameManager, parent) {
        super(gameManager);
        this.view = new MenuView(this, parent);
    }
}