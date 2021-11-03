const functions = require('./functions');

afterEach(() => closeDatabase());
// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

describe('checking name', () => {
    beforeEach(() => initDatabase());
})

const initDatabase = () => console.log('initialised database...');
const closeDatabase = () => console.log('database closed...');


test('adds 2 + 2 will not equal 5', () => {
    expect(functions.add(2,2)).not.toBe(5);
});

test('objects do not pass with toBe', () => {
    expect(functions.createUser()).toEqual({
        firstname: 'Babasola',
        lastname: 'Oso'
    });
});

test('no case-sensitive I in team', () => {
    expect('team').not.toMatch(/I/i);
});

test('fetch data from a site', () => {
    expect.assertions(1);
    return functions.fetchUser()
    .then(data => expect(data.username).toEqual('Bret'));
});

test('async fetch data', async() => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.address.street).toEqual("Kulas Light");
});