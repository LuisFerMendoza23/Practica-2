const logErrors = (error, _req, _res, next) => {
    console.log(error)

    next(error)
}

const errorHandler = (error, _req, res, _next) =>{
    res.status(500).json({
        message: error.message,
        stack: error.stack,
    })
}

const boomErrorHandler = (error, _req, res, next) =>{
    if(error.isBoom){
        const { output } = error
        res.status(output.statusCode).json(output.payload)
        return
    }

    next(error)
}

export { logErrors, errorHandler, boomErrorHandler};