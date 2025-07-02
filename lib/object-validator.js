/**
 * object schema {
 *  type: "object",
 *  body: {
 *     perperty_name: {
 *        required: boolean (Optional)
 *        type: "number"
 *     }
 *  }
 * }
 */

import { get } from "./index.js";

export class ObjectValidator {

    static type = "object";

    #schema;

    constructor(schema) {
        this.#schema = schema;
    }

    validate(value) {

        const body = this.#schema.body || {};

        const result = {};
        let hasError = false;

        for (let key in body) {

            const propertySchema = body[key];
            const type = propertySchema.type;
            const Validator = get(type);
            const validator = new Validator(propertySchema);
            const validateResult = validator.validate(value[key]);
            result[key] = validateResult;

            if (validateResult !== true) {
                hasError = true;
            }
        }

        if (hasError) return result;

        return true;
    }

}