import DS from 'ember-data';

export default DS.Model.extend({
  business: 	DS.belongsTo('business'),
  contact: 		DS.belongsTo('cotact'),
  street: 		DS.attr('string'),
  street2:  	DS.attr('string'),
  suiteNumber: 	DS.attr('string'),
  City: 		DS.attr('string'),
  State: 		DS.attr('string'),
  Zip: 			DS.attr('string'),
});