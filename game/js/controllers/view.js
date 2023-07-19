export class View {
    constructor(controller, parent) {
        this.controller = controller;
        this.parent = parent;
        this.container = document.createElement('div');
        this.parent.appendChild(this.container);
    }
}