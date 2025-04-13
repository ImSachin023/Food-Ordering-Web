import { sum } from "../sum"


test('Sum of two number', () => {
    const result = sum(5,4);

    //assertion
    expect(result).toBe(9)
 });