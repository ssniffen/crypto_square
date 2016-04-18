// it takes a string as an argument
var Crypto = function(text){
	// store the string for use elsewhere
	this.text = text;
};

Crypto.prototype.normalizePlaintext = function() {
	return this.text.replace(/[\W]/g, "").toLowerCase();
};

Crypto.prototype.size = function() {
	// body..
	var x = this.normalizePlaintext().length;
	return Math.ceil(Math.sqrt(x));
};

module.exports = Crypto;