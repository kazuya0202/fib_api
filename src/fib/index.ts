import { Hono } from "hono"
import superjson from "superjson"

const fibApp = new Hono()

class Fibbonacci {
  n: number
  memo: bigint[]

  constructor(n: number) {
    this.n = n
    this.memo = Array.from<bigint>({ length: n + 1 }).fill(-1n)
  }

  /**
   * フィボナッチ数列を計算する
   * @returns 計算結果
   */
  calc(): bigint {
    return this.recursive(this.n)
  }

  /**
   * フィボナッチ数列を再帰的に計算する
   * @param n 番号
   * @returns 計算結果
   */
  private recursive(n: number): bigint {
    if (n <= 1) {
      return BigInt(n)
    }

    // メモ化
    if (this.memo[n] === -1n) {
      const result = this.recursive(n - 1) + this.recursive(n - 2)
      this.memo[n] = result
    }

    return this.memo[n]
  }
}

fibApp.get("/", (c) => {
  const n = c.req.query("n")

  // n が指定されていない場合
  if (n === undefined) {
    return c.json(
      {
        status: 400,
        message: "Bad request.",
      },
      400,
    )
  }

  // n が数値ではない場合
  if (!Number.isInteger(Number.parseInt(n))) {
    return c.json(
      {
        status: 400,
        message: "Bad request.",
      },
      400,
    )
  }

  const nInt = Number.parseInt(n)
  // n が0以下の場合
  if (nInt <= 0) {
    return c.json(
      {
        status: 400,
        message: "Bad request.",
      },
      400,
    )
  }

  // メモ化
  const fib = new Fibbonacci(nInt)
  const fibResult = fib.calc()
  return c.json(
    {
      result: fibResult.toString(),
    },
    200,
  )
})

export { fibApp, Fibbonacci }
