const jwt = require('jsonwebtoken');

// middleware
module.exports = function (req, res, next) {
    const token = req.header('auth-token');
    if (!token) return res.status(401).send('access denied');
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send('Invalid taken');
    }
}