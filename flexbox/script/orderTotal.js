// const fetch = require('node-fetch')



function processOrder(customerOrders){
    return customerOrders.orders.reduce((prev, cur) => prev + (cur.quantity || 1) * cur.cost, 0)
}


function processOrderExpectingPromise(customerOrders){
    return Promise.resolve(customerOrders.orders.reduce((prev, cur) => prev + (cur.quantity || 1) * cur.cost, 0))
}


// no need for "require('node-fetch')" cos fetch has been injected as a parameter
function processOrderDependencyInjection(fetch, process, customerOrders){
    if(customerOrders.country){
        return fetch('https://vatapi.com/v1/country-code-check?code=' + customerOrders.country, {
            headers: {apikey: process.env.VAT_API_KEY}
        })
        .then(response => response.json)
        .then(data => data.rates.standard.value)
        .then(vat => customerOrders.orders.reduce((prev, cur) => 
            prev + (cur.quantity || 1) * cur.cost, 0) * 1+(vat/100))
    }
    return Promise.resolve(customerOrders.orders.reduce((prev, cur) => prev + (cur.quantity || 1) * cur.cost, 0))
}



// const result = fetch('https://vatapi.com/v1/country-code-check?code=DE', 
                                        //{headers:{'api-key':process.env.VAT_API_KEY}})
    // .then(response => response.json)
    // .then(data => data.rates.standard.value)


module.exports = processOrder
module.exports = processOrderExpectingPromise