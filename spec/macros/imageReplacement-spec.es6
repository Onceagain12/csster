import {imageReplacement} from '../../src/macros/macros.js'


describe('imageReplacement', () => {

  it('should throw exception if not given enough parameters', () => {
    expect(
        () => {
          imageReplacement()
        }).toThrow("imageReplacement() requires width, height and img");
  })

});
