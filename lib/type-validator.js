export class TypeValidator {
    #type;
    #strict;

    constructor(type, strict) {
        this.#type = type;
        this.#strict = strict;
    }

    validate(value) {

        if (this.#type === Number) {
            return typeof value == "number";
        } else if (this.#type === String) {
            return typeof value == "string";
        } else if (this.#type === Boolean) {
            return typeof value == "boolean";
        } else if (this.#type === Array) {
            return Array.isArray(value);
        } else {
            return (value instanceof this.#type) &&
                (this.#strict ? (value.constructor ? value.constructor === this.#type : false) : true);
        }

    }
}

export const type = (type, strict) => {
    return new TypeValidator(type, strict)
}