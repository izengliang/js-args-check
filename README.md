JavaScript only needs function parameter checking and unit testing.
Less is more.

Demo
```js
import { validate, obj, str, num } from "../lib/index.js";

function fn(name, info) {
    const schemas = [
        str(), // name 
        obj({ age: num({ min: 16 }), des: str({ maxLength: 20 }) }) // info
    ];
    validate([name, info], schemas).throw;

}


fn("leo", { age: 18, des: "info1" }).ok; // true
fn("leo", { age: 12, des: "info2" }).throw; // throw error.
```

development & production mode 
```js

function fn(){
    globalThis.dev && validate(arguments, [str(),num()]);
    ......
}



globalThis.dev = true; // call validate
globalThis.dev = false; // no call validate

```