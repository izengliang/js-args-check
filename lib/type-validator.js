export class TypeValidator {

    #config;

    static type = "type";

    constructor(config) {
        this.#config = config;
    }

    validate(value) {
        const { type } = this.#config;

        if (value instanceof type) {
            return true;
        } else {
            return { cause: "type" }
        }
    }

}
