const convert = require('./convert.js');

test("Change ฿1.00 to $0.03", () => {
    expect(convert(1)).toEqual('$0.03');
});

test("Change ฿15.00 to $0.45", () => {
    expect(convert(15.0)).toEqual('$0.45');
});

test("Change ฿30.00 to $0.90", () => {
    expect(convert(30.00)).toEqual('$0.90');
});

test("Change ฿-99.0000000001 to $-2.97", () => {
    expect(convert(-99.0000000001)).toBe('$-2.97');
});

test("Change ฿0.00 to $0.00", () => {
    expect(convert(0.00)).toEqual('$0.00');
});

test("add test toprint Not Money Na~~!", () => {
    expect(convert("test")).toBe('Not Money Na~~!');
});