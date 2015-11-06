Template.login.events({
	'submit form#login-form': function(event) {
		event.preventDefault();
		var email = $('#login-email').val();
		var pass = $('#login-pass').val();
		console.log('login submitted'); 
		Meteor.loginWithPassword(email, pass, function(err) {
			if (err) console.log(err); //login attempt failed
			else {
				Router.go('/');
			}
		});
	}
});