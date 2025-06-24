import { validate, and, or, num, str, type, all } from "../lib/index.js";
import { ok, throws } from "node:assert";

ok(all.validate("allow all type value"));

// test string validator
ok(str().validate("is str"));
ok(str().len(10).validate("1234567890"));
ok(str().max(5).validate("2222"));
ok(!str().max(5).validate("2222225"));
ok(str().regexp(/abc\dd/).validate("abc3d"));
ok(str().max(5).validator((v) => true).validate("2222"));

// test number validtor
ok(num().min(10).validate(10))
ok(num().max(20).validate(10))
ok(!num().max(20).validate(21))
ok(num().max(20).validate(10.99))
ok(!num().isInteger().validate(10.99))
ok(!num().isSafeInteger().validate(10.99))


// test type validator
ok(type(Number).validate(1));
ok(type(String).validate("ddddd"));
ok(type(Boolean).validate(false));
ok(type(RegExp).validate(/./g));
class CustomType { }
class ExtendCustomType extends CustomType { }
ok(type(CustomType).validate(new CustomType()));
ok(type(CustomType).validate(new ExtendCustomType()));
ok(!type(CustomType, true).validate(new ExtendCustomType()));

// test or-validator 
ok(or(type(String), num().min(1)).validate("22"))
ok(or(type(String), num().min(10)).validate(20))

// test and-validator
ok(and(type(Number), num().min(1)).validate(22));
ok(!and(type(String), num().min(1)).validate(22));


// test validate(values, validators)
ok(
    validate("leo", type(String))
);

throws(
    () => validate("leo", type(Number))
);


ok(validate(["leo", 16], [str(), num()]))
