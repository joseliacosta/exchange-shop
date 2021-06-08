import exchange from './exchange'
describe('When consumes exchange service', () => {
  it('should return 4 when base rate is 4 and amount 1  ', () => {
    const result = exchange(4, 1)
    expect(result).toBe(4)
  })

  it('should return 10 when base rate is 5 and amount 2 ', () => {
    const result = exchange(4, 1)
    expect(result).toBe(4)
  })
})
