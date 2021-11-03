
const customerOrders = {
    items:[
        {product: 'cornflakes', cost: 200, quantity: 5},
        {product: 'milk',       cost: 50,  quantity: 7},
        {product: 'shipping',   cost: 100, shipping: 1}
    ]
}

const processOrder = orders => {
    const totalOrder = orders.items
        .filter(x => !x.shipping)
        .reduce((prev, cur) => prev + (cur.cost * cur.quantity), 0)
    const shipping = orders.items
        .find(x => !!x.shipping)
    const shippingCharge =
        totalOrder > 1000 ? 0 : shipping.cost
    return totalOrder + shippingCharge
}

result = processOrder(customerOrders)
console.log(result) 



// TESTS
        // if(processOrder({orders: [{product: 'cornflakes', cost: 200, quantity: 2},
        //                         {product: 'milk', cost: 50, quantity: 4}]}) ==! 600){
        //     throw new Error('Happy Path (err1)')
        // }
        // if(processOrder({orders: [{product: 'bread', cost: 350, quantity: 1},
        //                         {product: 'sardine', cost: 150, quantity: 6}]}) ==! 900){
        //     throw new Error('Happy Path (err2)')
        // }
        // if(processOrder({orders: [{product: 'bread', cost: 330, quantity: 3}]}) ==! 990){
        //     throw new Error('Check Fail : Quantity')
        // }
        // if(processOrder({orders: [{product: 'bread', cost: 350},
        //                         {product: 'sardine', cost: 150}]}) ==! 500){
        //     throw new Error('Happy Path (err3)')
        // }
        // if(processOrder({orders: [{product: 'bread', cost: 795}]}) ==! 795){
        //     throw new Error('Check Fail : No Quantity Specified')
        // }

        
        // function processOrder(customerOrders){
        //     return customerOrders.orders.reduce((prev, cur) => prev + (cur.quantity || 1) * cur.cost, 0)
        // }
