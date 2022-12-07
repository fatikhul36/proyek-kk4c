const mongoose = require('mongoose')

const user_scheme = new mongoose.Schema({
    nama : {
        type: String,
        required: [true, 'silahakan isi nama'],
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match:[ /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'silahkan isikan email valid']
    }
})

module.exports = mongoose.model('User',user_scheme)