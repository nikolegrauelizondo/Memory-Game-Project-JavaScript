import { Controller } from "../controller.js";
import { HomeView } from "./homeView.js";

export class HomeController extends Controller {
    constructor(gameManager, parent) {
        super(gameManager);
        this.view = new HomeView(this, parent);
    }
}