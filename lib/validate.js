import { get } from "./index.js";

const passResult = {
    get ok() { return true; },
    get throw() { },
    get error() { return null }
}

const validate = (values, ...validators) => {

    const errors = [];
    let hasError;

    validators = validators.flat()

    if (!Array.isArray(values)) {
        values = [values];
    }

    for (let i = 0, n = values.length; i < n; i++) {
        const validatorConfig = validators[i];
        const Validator = get(validatorConfig.type);
        const validator = new Validator(validatorConfig);
        const value = values[i];
        const bool = validator.validate(value);
        if (bool !== true) {
            hasError = true;
            errors.push({ index: i, value, ...bool, validator: validatorConfig.validator });
        }
    }

    // if (hasError) {
    //     return errors;
    // }

    return {
        get throw() {
            if (hasError) throw errors;
        },

        get ok() {
            return !hasError;
        },

        get error() {
            return hasError ? errors : null;
        }
    };


}

export { validate };