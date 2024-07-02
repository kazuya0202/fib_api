import { Fibbonacci } from "./index"

describe("Fibbonacci", () => {
  test("calc n=1", () => {
    const fib = new Fibbonacci(1)
    expect(fib.calc()).toBe(1n)
  })

  test("calc n=10", () => {
    const fib = new Fibbonacci(10)
    expect(fib.calc()).toBe(55n)
  })
  test("calc n=99", () => {
    const fib = new Fibbonacci(99)
    expect(fib.calc()).toBe(218922995834555169026n)
  })
})
