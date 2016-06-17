/**
 * Javascript for Firebase
 */

'use strict';

//You must set the GOOGLE_APPLICATION_CREDENTIALS and GCLOUD_PROJECT
//environment variables to run this sample. See:
//https://github.com/GoogleCloudPlatform/gcloud-node/blob/master/docs/authentication.md
var projectId = process.env.GCLOUD_PROJECT;

//Initialize gcloud
var gcloud = require('gcloud')({
projectId: projectId
});

//Get a reference to the vision component
var vision = gcloud.vision();

var inputImage = document.getElementById('image');

function main (){
	HumanCounter();
}


function HumanCounter () {
	this.inputImage = document.getElementById('image');
	this.signInButton = document.getElementById('sign-in');
	this.signOutButton = document.getElementById('sign-out');
	
	this.signInButton.addEventListener('click', this.signIn.bind(this));
	this.signOutButton.addEventListener('click', this.signOut.bind(this));
	
	this.initFirebase();
}

//Google Cloud Vision Methods
function detectFaces(inputFile, callback) {
	  // Make a call to the Vision API to detect the faces
	  vision.detectFaces(inputFile, function (err, faces) {
	    if (err) {
	      return callback(err);
	    }
	    var numFaces = faces.length;
	    console.log('Found ' + numFaces + (numFaces === 1 ? ' face' : ' faces'));
	    callback(null, faces);
	  });
	}

//Firebase Methods
HumanCounter.prototype.initFirebase = function() {
	this.auth = firebase.auth();
	this.database = firebase.database();
	this.storage = firebase.storage();
	this.storageRef = storage.ref();
	
	this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));
}
// Methods for Google authentication
HumanCounter.prototype.signIn = function() {
	var provider = new firebase.auth.GoogleAuthProvider();
	this.auth.signInWithPopup(provider);
};

HumanCounter.prototype.signOut = function() {
	this.auth.signOut();
};

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
};

/**
 * Writing image data into the database.
 * Parameters: numberOfPeople, imageName, imageData
 */
HumanCounter.prototype.writeNewImageData(numberOfPeople, imageName, imageDate) {
	var imageData = {
			numberOfPeople: numOfPeople,
			imageName: imageName
			imageDate: imageDate;
	};


var newDatabasePostKey = firebase.database().ref().child('imageData').push().key;
var updates = {};
updates['/imageData/' + newDatabasePostKey] = newDatabasePostKey;

return firebase.database().ref().update(updates);
}

/**
 * Firebase load image data from database.
 */
HumanCounter.prototype.loadImageData = function() {
	this.imageRef = this.database.ref('imageDatas');
	this.imageRef.off();
	
	var setMessage = function(data) {
		var value = data.value();
		this.displayMessage
	}
	
};

HumanCounter.prototype.setImageUrl = function(imageUri, imgElement) {
	if (imageUri.startsWith('gs://')) {
		this.storage.refFromURL(imageUri).getMetadata().then(function(metadata) {
			imgElement.src = metadata.downloadURLS[0];
		});
		} else {
			imgElement.src = imageUri;
		}
	};
/**
 * Firebase Image URL Load from storage.
 */
HumanCounter.prototype.loadImage = function () {
	var imageObj = storageRef.snapshot.metadata.downloadURLs[0];
	console.log('File available to download at', url);
};

HumanCounter.prototype.displayData = function() { 
	
};

window.onload = function() {
	window.friendlyChat = new FriendlyChat();
};
