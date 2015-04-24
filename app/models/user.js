import DS from 'ember-data';

export default DS.Model.extend({
  businessname: DS.attr('string'),
  email: 		DS.attr('string'),
  joinDate: 	DS.attr('string', {
  	defaultValue: function { return new Date(); }
  }),
  business: 	DS.belongsTo('business'),
});