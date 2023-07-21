import { div } from "../libs/html.js";

export class View {
    constructor(controller, parent) {
        this.controller = controller;
        this.parent = parent;
        this.container = div({}, this.parent);
    }
}