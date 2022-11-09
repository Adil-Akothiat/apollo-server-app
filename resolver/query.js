module.exports = {
    users: (parent, args, {dataSources}, info) => {
        return dataSources.userAPI.getUsers();
    }
}