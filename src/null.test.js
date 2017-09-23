it('should be null', () => {
  let n = 1;
  expect(n).toBeNull();
  expect(n).toBe(null);
});

it('should be called', () => {
  let mock = jest.fn();

  //[1].map(mock);

  expect(mock).toHaveBeenCalled()
});
