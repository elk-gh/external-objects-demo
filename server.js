const http = require('http')
const fs = require('fs').promises
const port = process.env.PORT || 3000

const server = http.createServer( async (req, res) => {
    if (req.url === '/')  {
        res.writeHead(301, { Location : '/api/publications'})
    } else if (req.url === '/api/publications'){
        res.writeHead(200, {'Content-Type' : 'application/json'})
        const file = await fs.readFile('./publications.json','utf8')
        res.write(file)
    }else{
        res.writeHead(404, {'Content-Type':'text/plain'})
        res.write(`404: ${req.url} not found`)
    }
    res.end()
})

server.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
})
