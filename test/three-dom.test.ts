import DummyClass from '../src/three-dom';

/**
 * Dummy test
 */
describe('Dummy test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy();
  });

  it('DummyClass is instantiable', () => {
    expect(new DummyClass()).toBeInstanceOf(DummyClass);
  });

  it('log hello world', () => {
    expect(DummyClass.main()).toBeUndefined();
  });
});
