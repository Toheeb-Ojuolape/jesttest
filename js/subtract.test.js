const subtract = require("./subtract")

test("properly substract two numbers",()=>{
    expect(subtract(2,1)).toBe(1)
})