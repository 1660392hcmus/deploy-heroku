const User = require('../models/user');

module.exports = auth = (req, res, next) => {
    const { userId } = req.session;
    if (userId) {
        const user = User.findById(userId);
        if(user){
            req.currentUser = user;
            res.locals.currentUser = user;
        }
    }
    next();
}