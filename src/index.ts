import { Hono } from "hono"
import { fibApp } from "./fib"

const app = new Hono()

app.get("/", (c) => {
  return c.text("/fib?n=[number] is ready.")
})

app.route("/fib", fibApp)

export default app
