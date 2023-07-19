import { View } from "../view.js";

export class ThemesView extends View {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'themesView';

        var foodBtn = document.createElement('div');
        this.container.appendChild(foodBtn);
        foodBtn.innerHTML = 'Food';
        foodBtn.className = 'game-button';

        var facesBtn = document.createElement('div');
        this.container.appendChild(facesBtn);
        facesBtn.innerHTML = 'Faces';
        facesBtn.className = 'game-button';

        var flagsBtn = document.createElement('div');
        this.container.appendChild(flagsBtn);
        flagsBtn.innerHTML = 'Flags';
        flagsBtn.className = 'game-button';
    }
}