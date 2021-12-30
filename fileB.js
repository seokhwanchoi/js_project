import { getFromObj, add } from "./fileA";

function foo(a, b) {
    console.log(add(a, b));
    var objZ = {
        'yo': 'mama',
        'jojo': 'dio'
    };
    console.log(getFromObj(objZ, 'jojo'));
}