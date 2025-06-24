
export class StringValidator {

    #length;
    #minLength;
    #maxLength;
    #regexp;
    #validateFn;

    len(n) {
        this.#length = n;
        return this;
    }

    min(n) {
        this.#minLength = n;
        return this;
    }

    max(n) {
        this.#maxLength = n;
        return this;
    }

    regexp(exp) {
        this.#regexp = exp;
        return this;
    }

    validator(validateFn) {
        this.#validateFn = validateFn;
        return this;
    }

    validate(value) {
        if (typeof value !== "string") {
            return false;
        }
        if (Number.isInteger(this.#length)) {
            if (value.length !== this.#length) {
                return false;
            }
        }

        if (Number.isInteger(this.#minLength)) {
            if (value.length < this.#minLength) {
                return false;
            }
        }

        if (Number.isInteger(this.#maxLength)) {
            if (value.length > this.#maxLength) {
                return false;
            }
        }

        if (this.#regexp) {
            if (!this.#regexp.test(value)) {
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



export function str() {
    return new StringValidator();
}

