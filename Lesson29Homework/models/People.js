const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	name:{
		type:String,
		required:[true, 'Username is required']
	},
	email:{
		type:String,
		lowercase:true
	},
	tel:{
		type:String,
		
	}

})
	


const People = mongoose.model('people', userSchema );

module.exports = { People };