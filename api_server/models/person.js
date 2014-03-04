/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PersonSchema = new Schema({
    firstName: String,
    lastName: String,
    email : String,
    phoneNumbers : [],
    streetAddress : String,
    extraAddressLine : String,
    apartmentOrSuite : String
});

/**
 * Methods
 */
PersonSchema.methods = {
    /**
     * Authenticate - check if the passwords are the same
     *
     * @param {String} plainText
     * @return {Boolean}
     * @api public
     */
    authenticate: function (plainText) {
        return this.encryptPassword(plainText) === this.hashed_password;
    }
};

console.log('setting up person schema');
mongoose.model('Person', PersonSchema);