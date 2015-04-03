function CITPromise() {
	var async = require('async');

	this.cb = function(){};
	this.success_cb = function(){};
	this.error_cb = function(){};

	this.then = function(cb) {
		if(typeof cb != "function") return false;
		this.cb = cb;
	}

	this.success = function(cb) {
		if(typeof cb != "function") return false;
		this.success_cb = cb;
	}

	this.error = function(cb) {
		if(typeof cb != "function") return false;
		this.error_cb = cb;
	}



}


return new CITPromise();