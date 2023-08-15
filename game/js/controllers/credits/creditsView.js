import { p } from "../../libs/html.js";
import { ControllerView } from "../controllerView.js";

export class CreditsView extends ControllerView {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.id = 'creditsView';
        this.elementsContainer.className = 'creditsView-elementsContainer';

        // this.creditsText = p({ innerHTML: 'Add credits here.', className: 'creditsView-text' }, this.elementsContainer);

        this.creditsFirstTitle = p({ innerHTML: 'Team Lead:', className: 'creditsView-first-title' }, this.elementsContainer);

        this.creditsFirstText = p({ innerHTML: 'Esteban Padilla Sánchez', className: 'creditsView-first-text' }, this.elementsContainer);

        this.creditsSecondTitle = p({ innerHTML: 'Programmer:', className: 'creditsView-second-title' }, this.elementsContainer);

        this.creditsSecondText = p({ innerHTML: 'Nikole Grau Elizondo', className: 'creditsView-second-text' }, this.elementsContainer);

        this.creditsThirdTitle = p({ innerHTML: 'Universidad Cenfotec <br> 2023', className: 'creditsView-third-title' }, this.elementsContainer);
    }
}