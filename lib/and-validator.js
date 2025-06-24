export class AndValidator {

    #validators = [];

    constructor(validators) {
        this.#validators = validators;
    }

    validate(value) {
        for (let validator of this.#validators) {
            if (!validator.validate(value)) {
                return false;
            }
        }
        return true;
    }
}

export const and = function (validators) {
    validators = [...arguments].flat();

    return new AndValidator(validators);
}