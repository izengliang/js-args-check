export class OrValidator {

    #validators = [];

    constructor(validators) {
        this.validators = validators;
    }

    validate(value) {
        for (let validator of this.#validators) {
            if (validator(value)) {
                return true;
            }
        }
        return false;
    }
}

export const or = (validators) => {
    return new OrValidator(validators);
}