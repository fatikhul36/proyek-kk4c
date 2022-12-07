const { json } = require('express')
const User = require('../model/user')

module.exports = {
    //show all user
    index : async(req, res) => {
        try {
            const users = await User.find()
            if(users.length > 0){
                res.status(200).json({
                    status : true,
                    data: users,
                    method: req.method,
                    url: req.url})
            }else{
                res.json({
                status: false,
                message:"data masih kosong"
                })
            }
        
        } catch (error) {
            res.status(400).json({sucess: false})
        }
    },
        //make new user
        store : async (req, res) => {
            try {
                const user = await User.create(req.body)
                res.status(200).json({
                    status : true,
                    data: user,
                    method: req.method,
                    url: req.url,
                    message:"data berhasil ditambahkan"
                })
            } catch (error) {
                res.status(400).json({sucess: false})
            }
          },
          //update specific user
        update : async (req, res) => {
            try {
                const user = await User.findByIdAndUpdate(req.params.id, req.body,{
                    new : true,
                    runValidators : true
                })
                res.status(200).json({
                    status : true,
                    data: user,
                    method: req.method,
                    url: req.url,
                    message:"data berhasil diubah"
                })
            } catch (error) {
                res.status(400).json({sucess: false})
            }    
          },
          //delete one specific user
          delete : async (req, res) => {
           try {
            const user = await User.findByIdAndDelete(req.params.id)
            res.status(200).json({
                status : true,
                data: user,
                method: req.method,
                url: req.url,
                message:"data berhasil dihapus"
            })
           } catch (error) {
                res.status(400).json({sucess: false})
           }
        },
        //show one user
        show : async (req, res) => {
            try {
                const user = await User.findById(req.params.id)
                res.status(200).json({
                    status : true,
                    data: user,
                    method: req.method,
                    url: req.url,
                    message:"data berhasil didapat"
                })
            } catch (error) {
                res.status(400).json({sucess: false})
            }    
          }

    }