
import { TypeValidator } from "./type-validator.js";
import { NumberValidator } from "./number-validator.js";
import { StringValidator } from "./string-validator.js";
import { OrValidator } from "./or-validator.js"
import { validate } from "./validate.js"
import { ObjectValidator } from "./object-validator.js";
import { ArrayValidator } from "./array-validator.js";

export const ValidatorMap = new Map();

export const register = (ValidatorType) => { ValidatorMap.set(ValidatorType.type, ValidatorType) };

export const get = validator => ValidatorMap.get(validator);

register(StringValidator);
register(NumberValidator);
register(TypeValidator);
register(OrValidator);
register(ObjectValidator);
register(ArrayValidator);

// @return validator_schema
export const num = (config) => ({
    type: NumberValidator.type, ...config
})

export const str = (config) => ({
    type: StringValidator.type, ...config
})

export const type = (config) => ({
    type: TypeValidator.type, ...config
})

export const obj = (body) => ({
    type: ObjectValidator.type, body
})

export const arr = items => ({
    type: ArrayValidator.type, items

})

export const or = config => ({
    type: OrValidator.type, ...config
})

export { validate, TypeValidator, StringValidator, NumberValidator, OrValidator };