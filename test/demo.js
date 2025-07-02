import { validate, obj, str, num } from "../lib/index.js";

function fn(name, info) {
    const schemas = [
        str(), // name 
        obj({ age: num({ min: 16 }), des: str({ maxLength: 20 }) }) // info
    ];
    validate([name, info], schemas).throw;

}


fn("leo", { age: 18, des: "info1" }); // ok
fn("leo", { age: 12, des: "info2" }); // error .info.age is error.