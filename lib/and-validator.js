export class AndValidator {

    #validators = [];

    constructor(validators) {
        this.validators = validators;
    }

    validate(value) {
        for (let validator of this.#validators) {
            if (!validator(value)) {
                return false;
            }
        }
        return true;
    }
}

export const and = (validators) => {
    return new AndValidator(validators);
}