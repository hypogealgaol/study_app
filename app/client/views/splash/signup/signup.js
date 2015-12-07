Template.signup.events({
	'submit #signup-form': function(event) {
		event.preventDefault();

		var form = event.target;
		var email = form['signup-email'];
		var pass = form['signup-pass'];
		var passConf = form['signup-passconf'];

		if (passConf.value === pass.value) {
			Accounts.createUser(
				{
					username: email.value,
					mail: email.value,
					password: pass.value
				},
				function (err) {
					if (err) {
						// signup failed
						console.error(err);
					} else {
						Router.go('/');
					}
				}
			);
		} else {
			console.error('Password and password confirmation do not match.');
			pass.value = '';
			passConf.value = '';
		}
	}
});
