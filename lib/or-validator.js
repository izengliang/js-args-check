export class OrValidator {

    #validators = [];

    constructor(validators) {
        this.#validators = validators;
    }

    validate(value) {
        if (!this.#validators.length) {
            return true;
        } else {
            for (let validator of this.#validators) {
                if (validator.validate(value)) {
                    return true;
                }
            }
            return false;
        }

    }

}

export const or = function (validators) {
    validators = [...arguments].flat();
    return new OrValidator(validators);
}