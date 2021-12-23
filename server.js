
const express = require("express")
const next = require("next")
const { createProxyMiddleware } = require("http-proxy-middleware");
const port = parseInt(process.env.PORT, 10) || 8099
const dev = process.env.NODE_ENV !== "production"
// process.env.NODE_ENV = "production"

const app = next({ dev })
const handle = app.getRequestHandler()

const proxyTable = {
  "/blogPage": {
    target: "http://localhost:3002",
    level: "debug"
  }
}


app.prepare().then(() => {
  const server = express()
  Object.keys(proxyTable).forEach(key => {
    server.use(key, createProxyMiddleware(proxyTable[key]));
  });
  server.all('*', (req, res) => {
    return handle(req, res)
  })
  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})