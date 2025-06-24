export class TypeValidator {
    #type;
    constructor(type) {
        this.#type = type;
    }

    validator(value) {

        if (this.#type === Number) {
            return typeof value == "number";
        } else if (this.#type === String) {
            return typeof value == "string";
        } else if (this.#type === Boolean) {
            return typeof value == "boolean";
        } else if (this.#type === Array) {
            return Array.isArray(value);
        } else {
            return value instanceof this.#type;
        }

    }
}

export const type = (type) => {
    return new TypeValidator(type)
}