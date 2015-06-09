$(function() {

	var Friend = Backbone.Model.extend({
		name: 'default friend'
	}); 

	var Friends = Backbone.Collection.extend({
		initialize: function(models, options) {
			this.bind("add", options.view.addFriendLi); 
		}
	}); 

	var AppView = Backbone.View.extend({
		el: $('body'), 
		initialize: function() {
			this.friends = new Friends(null, {view: this}); 
		}, 
		events: {
			"click #add-friend": "showPrompt", 
		}, 

		showPrompt: function() {
			var friend_name = prompt("what is your friend's name?");
			var friend_model = new Friend({ name: friend_name}); 
			this.friends.add(friend_model); 
		}, 
		addFriendLi: function(model){
			$('#friends-list').append("<li>" + model.get('name') + "</li>"); 

		}
	});

	new AppView(); 
}); 