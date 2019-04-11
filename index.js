const server = require('./api/server.js');

const port = 5000;
server.listen(port, () => {
    console.log(`\n** API is working it on http://localhost:${port} **\n`)
})