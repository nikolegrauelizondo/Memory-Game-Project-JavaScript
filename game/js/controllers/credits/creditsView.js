import { p } from "../../libs/html.js";
import { ControllerView } from "../controllerView.js";

export class CreditsView extends ControllerView {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.id = 'creditsView';
        this.elementsContainer.className = 'creditsView-elementsContainer';

        this.creditsText = p({ innerHTML: 'Add credits here.', className: 'creditsView-text' }, this.elementsContainer);
    }
}