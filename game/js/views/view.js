import { div } from "../libs/html.js";

export class View {
    constructor(parent) {
        this.parent = parent;
        this.container = div({}, this.parent);
    }
}