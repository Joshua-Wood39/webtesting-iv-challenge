const db = require('../data/dbConfig.js');
const Megamen = require('./roster-model.js');


describe('megamen model', () => {
    beforeEach(async () => {
        await db('megamen').truncate();
    });

    describe('insert functionality', () => {
        it('should insert a megaman character', async () => {
            await Megamen.add({ name: 'Blast Man' });
            await Megamen.add({ name: 'Top Man' });
            await Megamen.add({ name: 'Sigma' });

            const megamen = await db('megamen');
            expect(megamen).toHaveLength(3);
        });

        it('should insert the specified character', async () => {
            let mega = await Megamen.add({ name: 'Junk Man' });
            expect(mega.name).toBe('Junk Man');

            mega = await Megamen.add({ name: 'Quick Man' });
            expect(mega.name).toBe('Quick Man');
        });
    });

    describe('delete functionality', () => {
        it('should remove a character', async () => {
            await Megamen.add({ name: 'Blast Man' });
            await Megamen.add({ name: 'Top Man' });
            await Megamen.add({ name: 'Sigma' });

            const megamen = await db('megamen');
            expect(megamen).toHaveLength(3);

            await Megamen.remove(2);
            expect(megamen).toHaveLength(2);

        
        })
    })
});