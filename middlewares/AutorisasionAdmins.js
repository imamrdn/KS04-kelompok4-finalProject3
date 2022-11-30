const Models = require('../models/index')

async function autorisasionAdmin(req, res, next) {
    const {id, email, role} = req.user
    const validateAdmin  = await Models.User.findOne({where : {id : id, email : email, role : 'admin'}})
    if(!validateAdmin) return res.status(401).Json({
        message : "Anda tidak punya hak akses ke sini"
    })
    next()
}
module.exports = autorisasionAdmin