import { View } from "../view.js";

export class DifficultyView extends View {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'difficultyView';

        var lowBtn = document.createElement('div');
        this.container.appendChild(lowBtn);
        lowBtn.innerHTML = 'Low';
        lowBtn.className = 'game-button';

        var mediumBtn = document.createElement('div');
        this.container.appendChild(mediumBtn);
        mediumBtn.innerHTML = 'Medium';
        mediumBtn.className = 'game-button';

        var highBtn = document.createElement('div');
        this.container.appendChild(highBtn);
        highBtn.innerHTML = 'High';
        highBtn.className = 'game-button';
    }
}