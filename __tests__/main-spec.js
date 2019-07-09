const main = require('../main');
const isStartLessThanEnd = main.isStartLessThanEnd;
const isRangeValid=main.isRangeValid;
const createMultiplicationTable=main.createMultiplicationTable

it ('create MultiplicationTable when input 2 and 1', () => {
    expect(createMultiplicationTable(2, 1,isStartLessThanEnd(2,1),isRangeValid(2,1))).toBe(null);
});

it ('create MultiplicationTable ', () => {
    expect(createMultiplicationTable(2, 4,isStartLessThanEnd(2,4),isRangeValid(2,4))).toBe('2*2=4 \n2*3=6 3*3=9 \n2*4=8 3*4=12 4*4=16 ');
});

it ('the start number should less than end number', () => {
    expect(isStartLessThanEnd(1, 2)).toBe(true);
});
it ('the start number should less than end number', () => {
    expect(isStartLessThanEnd(2, 1)).toBe(false);
});
it ('the start number should less than end number', () => {
    expect(isStartLessThanEnd(2, 2)).toBe(false);
});


it ('the start number and the end number should in a range of 1 to 1000 (inclusive).', () => {
    expect(isRangeValid(1, 2)).toBe(true);
});
it ('the start number and the end number should in a range of 1 to 1000 (inclusive).', () => {
    expect(isRangeValid(0, 2)).toBe(false);
});
it ('the start number and the end number should in a range of 1 to 1000 (inclusive).', () => {
    expect(isRangeValid(1, 0)).toBe(false);
});
it ('the start number and the end number should in a range of 1 to 1000 (inclusive).', () => {
    expect(isRangeValid(0, 0)).toBe(false);
});
