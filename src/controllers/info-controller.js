const { StatusCodes } = require('http-status-codes');

const info = (req,res) => {
    return res.status(StatusCodes.OK).json({
        success:true,
        message:'API is live',
        error:{},
        data:{}
    })
}

// basically for all the apis have a ready made json message or a boiler-plate ready for it.
// 

module.exports = { info }