// If no route is found
// If next is added, it is used for error handling, to go to the next error
// This error is specifically for a route not found
const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    // Go to the next error
    next(error);
}

// Error handler middleware, if there is an error, this function is called automatically when all previous code is
// not executed. This is the general error handler when no other errors from above handled the error.
// There have to be 4 parameters!
const errorHandler = (error, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode)
    res.json({
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? '' : error.stack
    })
}

module.exports = {
    notFound,
    errorHandler,
}