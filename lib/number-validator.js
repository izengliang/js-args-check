export class NumberValidator {

    #config = {};

    static type = "number";

    constructor(config) {
        this.#config = config;
    }

    /**
     * 
     * @param {*} value 
     * @returns  ?
     */
    validate(value) {

        if (typeof value !== "number") {
            return { cause: "type" };
        }

        const { min, max, int, safe } = this.#config;

        if (typeof min === "number") {
            if (min > value) {
                return { cause: "min" };
            }
        }

        if (typeof max === "number") {
            if (max < value) {
                return { cause: "max" };
            }
        }

        if (int && safe) {
            if (!Number.isSafeInteger(value)) {
                return { cause: "safe" };
            }
        } else if (int) {
            if (!Number.isInteger(value)) {
                return { cause: "int" };
            }
        }

        return true;
    }


}
