export class Controller {
    constructor(gameManager) {
        this.gameManager = gameManager;
        this.view = null;
        this.service = null;
        this.model = null;
    }

    delete() {
        this.view.delete();
    }

    hide(callback) {
        this.view.hide(callback);
    }
}