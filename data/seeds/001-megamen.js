
exports.seed = function(knex, Promise) {
  
      return knex('megamen').insert([
        {name: 'Mega Man'},
        {name: 'Roll'},
        {name: 'Metal Man'}
      ]);
};
