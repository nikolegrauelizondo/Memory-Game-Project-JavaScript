import { Controller } from "../controller.js";
import { LoginView } from "./loginView.js";

export class LoginController extends Controller {
    constructor(gameManager, parent) {
        super(gameManager);
        this.view = new LoginView(this, parent);
    }
}