const express = require("express")
const server = express()

// configurar pasta publica
server.use(express.static("public"))

// Utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

server.get("/", (req, res) => {
    return res.render("index.html", { title: "Seu marketplace de coleta de resíduos" })
    // SendFile -> Envia um arquivo através de um caminho absoluto.
    // Render -> Processa o HTML para identificar o nunjucks
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
    // SendFile -> Envia um arquivo através de um caminho absoluto.
    // o nunjucks já passa pelas pastas src/view então nao precisa ser setado mais o caminho absoluto ;)
})

server.get("/search", (req, res) => {
    return res.render("search-results.html")
    // SendFile -> Envia um arquivo através de um caminho absoluto.
})

// ativar servidor
server.listen(3000)