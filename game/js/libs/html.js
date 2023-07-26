export const div = function (attributes, parent) {
    return createElement('div', attributes, parent);
}

export const p = function (attributes, parent) {
    return createElement('p', attributes, parent);
}

// export const img = function (attributes, parent) {
//     return createElement('img', attributes, parent);
// }

export const input = function (attributes, parent) {
    return createElement('input', attributes, parent);
}

const createElement = function (type, attributes, parent) {
    var element = document.createElement(type);
    parent.appendChild(element);

    for (const attribute in attributes) {
        element[attribute] = attributes[attribute];
    }

    return element;
}