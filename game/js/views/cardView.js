import { div } from "../libs/html.js";
import { View } from "./view.js";

export class CardView extends View {
    constructor(parent, card) {
        super(parent);
        this.card = card;
        this.container.className = 'cardView-container';
        this.iconContainer = div({ className: 'cardView cardView-hidden' }, this.container);
        this.container.onclick = this.onSelected.bind(this);

        window.addEventListener('show-card-on-selected', (event) => {
            this.showOnSelected();
        });
    }

    onSelected() {
        this.card.isSelected = true;
        console.log(this.card);

        var event = new CustomEvent('card-selected', {
            detail: {
                card: this.card,
            },
            bubbles: true,
            cancelable: true,
            composed: false,
        });
        this.container.dispatchEvent(event);
    }

    showOnSelected() {
        if (this.card.isSelected) {
            this.iconContainer.innerHTML = this.card.icon;
            this.iconContainer.classList.remove('cardView-hidden');
            this.iconContainer.classList.add('cardView-selected');
        }
    }
}