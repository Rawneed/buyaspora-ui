import Ember from 'ember';

export default Ember.ArrayController.extend({
  softProperties: 	['category', 'name'],
  sortAscending: 	true //,
  //getProfile: function() {
  	//return this.get('name')
 // }.property('name')	
});