import DS from 'ember-data';

export default DS.Model.extend({
  contact: 	DS.belongsTo('contact'),
  digits: 	DS.attr('string'),
  ext: 		DS.attr('string')
});