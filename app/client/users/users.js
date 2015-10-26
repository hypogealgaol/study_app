if (Meteor.isServer) {
	Meteor.publish("users", function() {
		return Users.find({});
	});
}

if(Meteor.isClient) {
	Meteor.subscribe("users"); 
}