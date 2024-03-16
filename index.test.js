const string = require('./index');

test('capitilize 1', () => {
    expect(string.capitilize('marwan')).toBe('Marwan');
});

test('capitilize with Numbers', () => {
    expect(string.capitilize('123')).toBe('123');
})

test('capitilize with special characters', () => {
    expect(string.capitilize('@Mdf')).toBe('@Mdf');
})

test('capitilize with capital letter as the first character', () => {
    expect(string.capitilize('Marwan')).toBe('Marwan');
})

//REVERSE STRING TESTS
test('reverse string', () => {
    expect(string.reverse('marwan')).toBe('nawram');
})

test('reverse with numbers', () => {
    expect(string.reverse('mar123wan')).toBe('naw321ram');
})

test('reverse same letter', () => {
    expect(string.reverse('mmmm')).toBe('mmmm');
})

test('reverse one letter', () => {
    expect(string.reverse('m')).toBe('m');
})

//CACULATOR TEST

test('addition test positives', () => {
    expect(string.calculator.add(1, 2)).toBe(3);
})

test('addition test negatives', () => {
    expect(string.calculator.add(-1,-2)).toBe(-3);
})

test('addition test positive and negative', () => {
    expect(string.calculator.add(-1, 2)).toBe(1);
})

test('Subtraction test positives', () => {
    expect(string.calculator.subtract(1, 2)).toBe(-1);
})

test('Subtraction test negatives', () => {
    expect(string.calculator.subtract(-1,-2)).toBe(1);
})

test('Subtraction test positive and negative', () => {
    expect(string.calculator.subtract(-1, 2)).toBe(-3);
})

test('Multiplication test positives', () => {
    expect(string.calculator.multiply(1, 2)).toBe(2);
})

test('Multiplication test negatives', () => {
    expect(string.calculator.multiply(-1,-2)).toBe(2);
})

test('Multiplication test positive and negative', () => {
    expect(string.calculator.multiply(-1, 2)).toBe(-2);
})

test('Multiplication test with 0', () => {
    expect(string.calculator.multiply(0,1)).toBe(0);
})

test('Division test positives', () => {
    expect(string.calculator.divide(2, 1)).toBe(2);
})

test('Division test negatives', () => {
    expect(string.calculator.divide(-2,-1)).toBe(2);
})

test('Division test positive and negative', () => {
    expect(string.calculator.divide(-2, 1)).toBe(-2);
})

test('Division test with 0 as numerator', () => {
    expect(string.calculator.divide(0, 1)).toBe(0);
})

test('Division test 0 as denominator', () => {
    expect(string.calculator.divide(1, 0)).toBe('Math Error');
})


