import { View } from "../../views/view.js";
import { div, hr, p } from "../../libs/html.js";

export class ScoreView extends View {
    constructor(parent, score) {
        super(parent);
        this.score = score;
        this.container.className = 'scoreView';
        var nameContainer = div({ className: 'scoreView-nameContainer' }, this.container);
        // hr({}, this.container);
        var valuesContainer = div({ className: 'scoreView-valuesContainer' }, this.container);

        var scoreContainer = div({ className: 'scoreView-valueContainer' }, valuesContainer);
        var clicksContainer = div({ className: 'scoreView-valueContainer' }, valuesContainer);
        var timeContainer = div({ className: 'scoreView-valueContainer' }, valuesContainer);

        p({ innerHTML: this.score.username }, nameContainer);
        p({ innerHTML: 'SCORE', className: 'scoreView-valueTitle' }, scoreContainer);
        p({ innerHTML: this.score.score, className: 'scoreView-value-description' }, scoreContainer);
        p({ innerHTML: 'CLICKS', className: 'scoreView-valueTitle' }, clicksContainer);
        p({ innerHTML: this.score.clicks, className: 'scoreView-value-description' }, clicksContainer);
        p({ innerHTML: 'TIME', className: 'scoreView-valueTitle' }, timeContainer);
        p({ innerHTML: this.score.time, className: 'scoreView-value-description' }, timeContainer);
    }
}