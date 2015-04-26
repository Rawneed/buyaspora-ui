import DS from 'ember-data';

export default DS.Model.extend({
  user:  		DS.belongsTo('user'),
  category: 	DS.belongsTo('category'),
  name:     	DS.attr('string'),
  contact: 		DS.belongsTo('contact'),
  offerings:  	DS.hasMany('offerrings'),
  promotions: 	DS.hasMany('promotions')
});