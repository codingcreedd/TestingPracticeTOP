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