import DS from 'ember-data';

export default DS.Model.extend({
  title: 		DS.attr('string'),
  details: 		DS.attr('string'),
  business: 	DS.belongsTo('business'),
  offerring: 	DS.belongsTo('offerring'),
  promoDate: 	DS.attr('date'),
  createdAt: 	DS.attr('string', {
    defaultValue: function() { return new Date(); }
  }),
  startDate: 	DS.attr('date'),
  endDate: 		DS.attr('date')
});