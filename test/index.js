import { validate, and, or, num, str, type, all } from "../lib/index.js";
import { ok } from "node:assert";

ok(all.validate("allow all type value"));
ok(str().validate("is str"));
ok(str().len(10).validate("1234567890"));
ok(str().max(5).validate("2222"));
ok(!str().max(5).validate("2222225"));
ok(str().regexp(/abc\dd/).validate("abc3d"));
ok(str().max(5).validator((v) => true).validate("2222"));

ok(num().min(10).validate(10))
ok(num().max(20).validate(10))
ok(!num().max(20).validate(21))
ok(num().max(20).validate(10.99))
ok(!num().isInteger().validate(10.99))
ok(!num().isSafeInteger().validate(10.99))
