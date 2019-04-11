const db = require('../data/dbConfig.js');

module.exports = {
    add,
    remove,
    getAll
}

async function add(body) {
    const [id] = await db('megamen').insert(body);

    return db('megamen')
    .where({ id })
    .first();
}

async function remove(id) {
    return db('megamen').where('megamen.id', id).del()

    
}

function getAll() {
    return db('megamen')
}