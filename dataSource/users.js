const {DataSource} = require('apollo-datasource');

const users = require('../data.json');
class UserAPI extends DataSource {
    constructor () {
        super();
    }
    getUsers () {
        return users;
    } 
}
module.exports = UserAPI;