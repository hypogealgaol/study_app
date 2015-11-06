
Router.configure({
	fastRender: true,
	onBeforeAction: function() {
		this.next();
	},
});

Router.onBeforeAction(function () {
	//
	if (!Meteor.userId()) {
		//ceck to make sure logged in
		this.redirect('/login');
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
	except: ['login', 'signup']
});

Router.route('/', function() {
	this.redirect('/home');
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
		this.render('login')
	}
});

Router.route('/signup', {
	name: 'signup',
	action: function () {
		this.render('signup');
	}
});
