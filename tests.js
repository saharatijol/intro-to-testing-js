// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});


describe('sayHello', function() {
    it ('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it ('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it ('should return a string "Hello, Jane!" when called', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it ('should return a string "Hello, Alex!" when called', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it ('should return a string "Hello, Pat!" when called', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it ('should return a string "Hello, World!" when called', function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it ('if input is true, return a string "Hello, World!"', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it ('if input is false, return a string "Hello, World!"', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});


describe('isFive', function() {
    it ('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it ('should return boolean no matter what input', function() {
        expect(isFive()).toBe('boolean');
    });
    it ('should return "true" when passed argument 5', function() {
        expect(isFive(5)).toBe('true');
    });
    it ('should return "true" when passed argument "5"', function() {
        expect(isFive("5")).toBe('true');
    });
});