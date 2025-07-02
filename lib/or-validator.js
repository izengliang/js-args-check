import { validate } from "./index.js";


/**
 * or validator schema
 * {
 *   type: "or",
 *   validators: [validator1 , validator2 , validator3]
 * }
 * 
 * e.p.
 * 
 */

// var or_schema = {
//     type: "or",
//     validators: [
//         { type: "string" },
//         {
//             type: "object", body: {

//             }
//         }
//     ]
// }
export class OrValidator {

    static type = "or";

    #validators;
    constructor({ validators }) {
        this.#validators = validators;
    }

    validate(value) {
        if (this.#validators.length === 0) return true;

        for (let validator of this.#validators) {
            if (validate(value, validator) === true) {
                return true;
            }
        }

        return {
            cause: "or"
        }

    }

}

