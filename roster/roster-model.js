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
    await db('megamen').where('megamen.id', id).del()

    return db('megamen')
}

function getAll() {
    return db('megamen')
}