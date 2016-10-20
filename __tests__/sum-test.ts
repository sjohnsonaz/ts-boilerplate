jest.unmock('../src/scripts/sum');
import sum from '../src/scripts/sum';

describe('sum', () => {
    it('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
});
