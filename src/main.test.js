"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("./main");
test('the data is peanut butter', function () {
    expect(1).toBe(1);
});
test('greeting', function () {
    expect(main_1.greet('Foo')).toBe('Hello Foo');
});
