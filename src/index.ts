import { Hono } from "hono"
import { fibApp } from "./fib"

const app = new Hono()

app.get("/", (c) => {
  return c.text("Hello Hono!")
})

app.route("/fib", fibApp)

export default app
