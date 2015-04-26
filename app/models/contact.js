import DS from 'ember-data';

export default DS.Model.extend({
  location: 	DS.belongsTo('location'),
  phones: 		DS.hasMany('phone'),
  fax: 			DS.attr('string'),
  email: 		DS.attr('string'),
  url: 		DS.attr('string'),
  socialMedia: 	DS.hasMany('socialMedia')
});