import {
    num, NumberValidator,
    str, StringValidator,
    or, OrValidator,
    validate, obj, arr
} from "../lib/index.js"

import { strictEqual as eq, notStrictEqual as neq } from "node:assert";

// string validator
eq(validate(222, str())[0].cause, "type");
eq(validate("222", str()), true);
eq(validate("abc", str({ length: 5 }))[0].cause, "length")
eq(validate("abc", str({ length: 3 })), true)
eq(validate("abc", str({ minLength: 1, maxLength: 5 })), true)
eq(validate("abcdddd", str({ minLength: 1, maxLength: 5 }))[0].cause, "maxLength")
eq(validate("abc1d", str({ minLength: 3, regexp: /abc\dd/ })), true)


// number validator
eq(validate("nonum", num())[0].cause, "type");
eq(validate(12, num({ min: 10 })), true);
eq(validate(12, num({ min: 100 }))[0].cause, "min");
eq(validate(12, num({ max: 12 })), true);
eq(validate(12, num({ max: 9 }))[0].cause, "max");
// int
eq(validate(12.2, num({ int: true }))[0].cause, "int");
eq(validate(12, num({ int: true })), true);


// or validator
eq(validate(12, or(num(), str())), true);


// array validator
const items = [11, 22, 33];
eq(validate([items], arr({ type: "number" })), true)

// object validator
const o = { name: "leo", age: 12, items: [12, 15] }
eq(validate(o, obj({ name: str(), age: num({ min: 5 }) })), true)