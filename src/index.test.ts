import { fibApp } from "./fib"
import app from "./index"

describe("Fibbonacci API", () => {
  app.route("/fib", fibApp)

  test("GET /fib?n=1", async () => {
    const res = await app.request("/fib?n=1")
    expect(res.status).toBe(200)
    expect(await res.json()).toEqual({
      result: "1",
    })
  })

  test("GET /fib?n=99", async () => {
    const res = await app.request("/fib?n=99")
    expect(res.status).toBe(200)
    expect(await res.json()).toEqual({
      result: "218922995834555169026",
    })
  })

  test("GET /fib?n=-1", async () => {
    const res = await app.request("/fib?n=-1")
    expect(res.status).toBe(400)
    expect(await res.json()).toEqual({
      status: 400,
      message: "Bad request.",
    })
  })

  test("GET /fib?n=abc", async () => {
    const res = await app.request("/fib?n=abc")
    expect(res.status).toBe(400)
    expect(await res.json()).toEqual({
      status: 400,
      message: "Bad request.",
    })
  })

  test("GET /fib", async () => {
    const res = await app.request("/fib")
    expect(res.status).toBe(400)
    expect(await res.json()).toEqual({
      status: 400,
      message: "Bad request.",
    })
  })
})
