Template.signup.events({
	'submit #signup-form': function(event) {
		event.preventDefault();

		var form = event.target;
		var email = form.email.value;
		var pass = form.pass.value;
		var passConf = form.passconf.value;

		if (passConf === pass) {
			var userId = Accounts.createUser(
				{
					username: email,
					mail: email,
					password: pass
				},
				function (err) {
					if (err) {
						// signup failed
						console.error(err);
					}
				}
			);
			Accounts.sendVerificationEmail(userId);
		} else {
			console.error('Password and password confirmation do not match.');
			form.pass.value = '';
			form.passconf.value = '';
		}
	}
});
