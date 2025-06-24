
const validate = (values, validators) => {

    // @todo error messages
    const errors = [];

    let hasError;

    if (!Array.isArray(values)) {
        values = [values];
        validators = [validators];
    }

    for (let i = 0, n = values.length; i < n; i++) {
        const validator = validators[i];
        const value = values[i];
        const bool = validator.validate(value);
        if (bool) {
            errors.push({ value })
        } else {
            hasError = true;
            errors.push({ value, error: true })
        }
    }

    if (hasError) {

        throw new Error(errors);
    }

    return true;


}

export { validate };