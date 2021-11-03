const axios = require('axios');

const functions = {
    add: (num1, num2) => num1 + num2,
    createUser: () => {
        const user = {firstname: 'Babasola'};
        user['lastname']= 'Oso';
        return user;
    },
    fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(error => 'error')

};

module.exports = functions;