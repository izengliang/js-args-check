
export class StringValidator {

    static type = "string";

    #config;
    constructor(config) {
        this.#config = config;
    }

    validate(value) {

        if (typeof value !== "string") {
            return { cause: "type" };
        }

        const { length, minLength, maxLength, regexp } = this.#config;

        if (Number.isInteger(length)) {
            if (value.length !== length) {
                return { cause: "length" };
            }
        }

        if (Number.isInteger(minLength)) {
            if (value.length < minLength) {
                return { cause: "minLength" };
            }
        }

        if (Number.isInteger(maxLength)) {
            if (value.length > maxLength) {
                return { cause: "maxLength" };
            }
        }

        if (regexp instanceof RegExp) {
            if (!regexp.test(value)) {
                return { cause: "regexp" };
            }
        }


        return true;
    }



}
