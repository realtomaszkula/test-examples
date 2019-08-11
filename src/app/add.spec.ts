function add(...args: number[]) {
  let sum: number = 0;
  for(const n of args){
    sum += n 
  }
  return sum
}

describe('add()', () => {
  it('should add two numbers', () => {
    const result = add(1, 2);
    expect(result).toBe(3);
  });

  it('shoud add mulitple numbers', () => {
    const result = add(1,2,3,1,1);
    expect(result).toBe(8)
  })
});
