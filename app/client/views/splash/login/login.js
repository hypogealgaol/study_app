Template.login.events({
	'submit form#login-form, click #login-enter': function(event) {
		event.preventDefault();
		var user = $('#login-user').val();
		var pass = $('#login-pass').val();
		Meteor.loginWithPassword(user, pass, function(err) {
			if (err) console.log(err); //login attempt failed
			else {
				Router.go('/');
			}
		});
	}
});