const notFound = (req, res, next) => {
    const error = new Error(`Not founded - ${req.originalUrl}`)
    res.status(404);
    next(error);
}

//Функции промежуточного обработчика для обработки ошибок определяются так же, как и другие функции промежуточной обработки, но с указанием для функции обработки ошибок не трех, а четырех аргументов.
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
        
    })
}

export {notFound, errorHandler};