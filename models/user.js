const users = [{
    id: 1,
    email: '1660392',
    password: 'kocopass',
}]

exports.findByEmail = (email) => {
    return users.find(user => user.email === email);
}

exports.findById = (id) => {
    return users.find(user => user.id === id);
}