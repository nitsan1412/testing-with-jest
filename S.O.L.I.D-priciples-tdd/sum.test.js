import sum from './sum'
// const sum  =  require('./sum')

test('adds 1 + 2 expects to be 3', () =>{
    expect(sum(1,2)).toBe(3)
})