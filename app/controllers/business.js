import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createBusiness: function() {
      var name = this.get('newName');
      var categoy = setCategory;
      var contact = addContact;
      //var location = addLocation;
      var offerring = addOfferring;
      //var promotion = addPromotion;

      var business = this.store.createRecord('business', {
      	name: name,
      	category: category,
      	contact: contact,
      	offerring: offerring
      });

      business.save();

    },
    setCategory: function() {

    },
    addContact: function() {

    },
    addOffferring: function() {
 
    },
    addPromotion: function() {
    	
    }
  }
});