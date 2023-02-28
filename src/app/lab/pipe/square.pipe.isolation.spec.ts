
import {SquarePipe} from'./square.pipe'

describe("transform fun",()=>{
    
  it("should return 16 when path in 4",()=>{
    let pipe =new SquarePipe()
    expect(pipe.transform(4)).toBe(16);
  })
  it("should return Not a number when path in any thing not number",()=>{
    let pipe =new SquarePipe()
    expect(pipe.transform('a')).toContain("Not a number");
  })
  it("should return Not a number when path in null",()=>{
    let pipe =new SquarePipe()
    expect(pipe.transform(null)).toContain("Not a number");
  })
})