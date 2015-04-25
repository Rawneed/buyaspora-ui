import DS from 'ember-data';

export default DS.Model.extend({
  title: 		DS.attr('string'),
  business: 	DS.belongsTo('business'),
  promoDate: 	DS.attr('date'),
  createdAt: 	DS.attr('string', {
    defaultValue: function() { return new Date(); }
  })
});