
Router.configure({
	fastRender: true,
	notFoundTemplate: 'notFound',
	onBeforeAction: function() {
		this.next();
	},
});


Router.onBeforeAction(function () {
	//
	if (!Meteor.userId()) {
		//ceck to make sure logged in
		if (Router.current().route.path() === '/login-legal'){ // allow logged out users to see the legal page
			this.redirect('/login-legal');
			this.next();
		}
		else {
			this.redirect('/login');
		}

	} 
	else if (Meteor.user() && Meteor.user().username && Meteor.user().username === 'default') {
		this.redirect('/settings');
		this.next();
	}
	else {
		this.next();
	}
}, 
{
	except: ['login']
});

Router.route('/login', {
	name: 'login',
	action: function() {
		if (Meteor.userId()) {
			var currentDate = moment(new Date()).hour(0).minute(0).second(0).milliseconds(0).toDate(); // set date to current day
			Session.set('date', currentDate);
			Session.set('status', "");
			this.redirect('/');
		}
		this.layout('splashLayout');
		this.render('login')
	}
});

Router.route('/signup', {
	name: 'signup',
	action: function() {
		//create a user
		this.redirect('/'); // after done
	}

})