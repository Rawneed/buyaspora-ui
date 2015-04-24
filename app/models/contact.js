import DS from 'ember-data';

export default DS.Model.extend({
  location: 	DS.belongsTo('location'),
  phone: 		DS.attr('string'),
  fax: 			DS.attr('string'),
  email: 		DS.attr('string'),
  website: 		DS.attr('string'),
  socialMedia: 	DS.attr('string')
});