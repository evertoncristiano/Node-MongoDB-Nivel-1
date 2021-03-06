const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: 'O titulo é obrigatório'
    },
    slug:String,
    body:{
        type:String,
        trim:true
    },
    tags:[String]
});

module.exports = mongoose.model('Post', postSchema);

