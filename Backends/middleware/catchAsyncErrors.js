// This is error handler for async function
module.exports = (theFunc) => (req, res, next) => {
    Promise.resolve(theFunc(req, res, next)).catch(next);
};

// mongo error also called unhandled promises rejection
//async error
//simple next error
//uncaught ecception
//mongoid error