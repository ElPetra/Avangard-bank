import { capitalize } from './capitalize';

describe('capitalize function test', () => {
    test('should capitalize the first letter of a world', () => {
        expect(capitalize('hello')).toBe('Hello');
    });

    test('should return the same word in the first leter is capitalized', () => {
        expect(capitalize('World')).toBe('World');
    });

    test('should handle an empty string', () => {
        expect(capitalize('')).toBe('');
    });

    test('should handle signle-characters string', () => {
        expect(capitalize('a')).toBe('A');
        expect(capitalize('A')).toBe('A');
    });

    test('should handle string not to be the same after capitalization', () => {
        expect(capitalize('a')).not.toBe('a');
    });
});
