const { Triangle, Circle, Square } = require('./shapes');



// A testing suite for Arithmetic is created.

describe('Tringle', () => {

  describe('modulus', () => {
    it('should return SVG string with correct color', () => {
      const triangle = new Triangle("abc","red", "blue");
      const expectedtextColor = "blue";
      expect(triangle.textColor).toEqual(expectedtextColor);
    });

}
);

})