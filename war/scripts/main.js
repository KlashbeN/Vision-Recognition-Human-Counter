/**
 * Javascript for Firebase
 */

'use strict';

var inputImage = document.getElementById('image');

function HumanCounter () {
	this.inputImage = document.getElementById('image');
	this.signInButton = document.getElementById('sign-in');
	this.signOutButton = document.getElementById('sign-out');
	
	this.signInButton.addEventListener('click', this.signIn.bind(this));
	this.signOutButton.addEventListener('click', this.signOut.bind(this));
	
	this.initFirebase();
}

HumanCounter.prototype.initFirebase = function() {
	this.auth = firebase.auth();
	this.database = firebase.database();
	this.storage = firebase.storage();
	
	this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));
}

HumanCounter.prototype.loadImageData = function() {
	
}

HumanCounter.prototype.signIn = function() {
	var provider = new firebase.auth.GoogleAuthProvider();
	this.auth.signInWithPopup(provider);
}

HumanCounter.prototype.signOut = function() {
	this.auth.signOut();
}

HumanCounter.prototype.onAuthStateChanged = function(user) {
	if(user) {
		
	this.signOutButton.removeAttribute('hidden');
	this.signInButton.setAttribute('hidden', 'true');
	
	} else {
		this.signOutButton.setAttribute('hidden','true');
		this.signInButton.removeAttribute('hidden');
	}
};

HumanCounter.prototype.checkSignedIn = function() {
	if (this.auth.currentUser) {
		return true;
	} 
}

HumanCounter.prototype.loadImages = function() {
	this.imageRef = this.database.ref('imageDatas');
	this.imageRef.off();
	
}

window.onload = function() {
	window.friendlyChat = new FriendlyChat();
}
