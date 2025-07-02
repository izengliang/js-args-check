/**
 * array schema  {
 *  type:"array" ,
 *  items: [
 *      {type:"string" , ......},
 *      {type:"object" , ......}
 *  ]
 * 
 *  items: {type:"string"}
 * }
 */

import { get } from "./index.js";

export class ArrayValidator {

    #schema;

    static type = "array";

    constructor(schema) {
        this.#schema = schema;
    }

    validate(value) {

        const { items: schemas } = this.#schema;

        const result = [];
        let hasError;

        let oneValidator;

        const getValidator = (i) => {

            if (oneValidator) return oneValidator;
            const isArray = Array.isArray(schemas);
            const schema = isArray ? schemas[i] : schemas;
            const type = schema.type;
            const Validator = get(type);
            const validator = new Validator(schema);
            if (!isArray) {
                oneValidator = validator
            };

            return validator;

        }
        value.forEach((item, i) => {
            const r = getValidator(i).validate(item);
            if (r !== true) {
                hasError = true;
            }
            result.push(r);
        });


        return !hasError || result;

    }
}