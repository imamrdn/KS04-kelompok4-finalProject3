// import Helpers
const {hash, compare}= require('../Helpers/Hash')
const {sign} = require('../Helpers/Jwt')
// import Model
const Models = require('../models/index')
class UserControllers {

    static async Register(req, res){
        try {
            let {email, full_name, password, gender} = req.body
            const verifyemailUser = await Models.User.findOne({where : {email : req.body.email}})
            if(verifyemailUser) return res.status(400).json({
                message : "Email Already Registered"
            })
            req.body.password = hash(req.body.password)
            const createUser = await Models.User.create({email, full_name, password : hash(password), gender, role : 'customer', balance : 0})
            let User = await Models.User.findOne({where : {id : createUser.id}, attributes : ['id', 'full_name', 'email', 'gender', 'balance', 'createdAt']})
            User.balance = `Rp.${User.balance}`
            return res.status(201).json({
                User : User
            })
        } catch (err){
            return res.status(500).json({
                message : "try again",
                errorMessage : err.message 
            })
        }
    }

    static async Login(req, res) {
        try {
            const verifyemailUser = await Models.User.findOne({where : {email : req.body.email}, attributes: ["id", "email", "password", "role"]})
            if(!verifyemailUser || !compare(req.body.password, verifyemailUser.password)) return res.status(400).json({
                message : "Email Not Registered Or Password Wrong!"
            })
            const Token = await sign({id : verifyemailUser.id, email : verifyemailUser.email, role : verifyemailUser.role})
            return res.status(200).json({
                Token : Token
            })
        } catch (err){
            return res.status(500).json({
                message : "try again",
                errorMessage : err.message 
            })
        }
    }

    static async Update(req, res) {
        const {id} = req.user
        try {
            const {userId} = req.params
            if(id != userId) return res.status(400).json({message :  "Tidak Punya Akses"})
            await Models.User.update(req.body, {where : {id : id}})
            const User = await Models.User.findOne({where : {id :id}, exclude: ['password', 'balance', 'role'] })
            return res.status(201).json({
                User : User
            })
        } catch (err){
            return res.status(500).json({
                message : "try again",
                errorMessage : err.message 
            })
        }
    }

    static async Delete(req, res) {
        const {id} = req.user
        try{
            const {userId} = req.params
            if(id != userId) return res.status(400).json({message :  "Tidak Punya Akses"})
            await Models.User.destroy({where : {id : id}})
            return res.status(200).json({
                message : "Your account has been successfully deleted"
            })
        } catch (err){
            return res.status(500).json({
                message : "try again",
                errorMessage : err.message 
            })
        }
    }

    static async topUp(req, res) {
        const id = 11
        try {
            let {balance} = req.body
            const getBalanceAfterUpdate = await Models.User.findByPk(id)
            const totalBalanceUser = balance + getBalanceAfterUpdate.balance
            await Models.User.update({balance : totalBalanceUser}, {where : {id : id}})
            const getBalanceBeforeUpdate = await Models.User.findByPk(id)
            return res.status(201).json({
                message : `Your balance has been successfully updated tp Rp ${getBalanceBeforeUpdate.balance}`
            })
        } catch (err){
            return res.status(500).json({
                message : "try again",
                errorMessage : err.message 
            })
        }
    }
}
module.exports = UserControllers