
export class NumberValidator {

    #min;
    #max;
    #validateFn;
    #isInteger;
    #isSafeInteger;


    min(n) {
        this.#min = n;
        return this;
    }

    max(n) {
        this.#max = n;
        return this;
    }

    isInteger(isSafe) {
        this.#isInteger = true;
        this.#isSafeInteger = !!isSafe;
        return this;
    }

    isSafeInteger() {
        this.#isInteger = true;
        this.#isSafeInteger = true;
        return this;
    }

    validator(validateFn) {
        this.#validateFn = validateFn;
        return this;
    }

    validate(value) {

        if (typeof value !== "number") {
            return false;
        }

        if (typeof this.#min === "number") {
            if (this.#min > value) {
                return false;
            }
        }

        if (typeof this.#max === "number") {
            if (this.#max < value) {
                return false;
            }
        }

        if (this.#isInteger && this.#isSafeInteger) {
            if (!Number.isSafeInteger(value)) {
                return false;
            }
        } else if (this.#isInteger) {
            if (!Number.isInteger(value)) {
                return false;
            }
        }

        if (this.#validateFn) {
            if (!this.#validateFn(value)) {
                return false;
            }
        }

        return true;
    }

}



export function num() {
    return new NumberValidator();
}

