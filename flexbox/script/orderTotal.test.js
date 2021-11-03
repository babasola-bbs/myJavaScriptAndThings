const processOrder = require('./orderTotal');
const processOrderExpectingPromise = require('./orderTotal');


it('can calculate orders with quantity', () => {
    expect(processOrder({orders: [{product: 'bread', cost: 350, quantity: 1},
                                  {product: 'sardine', cost: 150, quantity: 6}]})).toBe(1250) 
})

it.only('expects a promise, can calculate orders with quantity', () => {
(processOrderExpectingPromise({orders: [{product: 'bread', cost: 350, quantity: 1},
                        {product: 'sardine', cost: 150, quantity: 6}]})).then(result => expect(result).toBe(1250));
})
 

//passed this as fetch-parameter to the other test instances that did not need fetch(fakeFetch) to PASS
//or just pass the parameter as 'null'
const emptyFunction = () => {}

it('calls vatapi.com correctly', (done) => {
    let isFakeFetchCalled = false
    const fakeProcess = {
        env: {
            VAT_API_KEY: 'Key123'
        }
    }
    const fakeFetch = (url, opts) => {
        expect(opts.headers.apikey).toBe('Key123')
        expect(url).toBe('https://vatapi.com/v1/country-code-check?code=DE')
            isFakeFetchCalled = true;
            return Promise.resolve({
                json : () => {return Promise.resolve({
                    rates : {
                        standards : {
                            value : 19
                        }
                    }
                })}
                })
    }

    (processOrderDependencyInjection(fakeFetch, fakeProcess, {
                    country: 'DE',
                    orders: [{product: 'bread', cost: 350, quantity: 1},
                             {product: 'sardine', cost: 150, quantity: 6}]}))
                             .then(result => {
                                expect(result).toBe(1250 * 1.19)
                                expect(isFakeFetchCalled).toBe(true)});
                             done()
    })