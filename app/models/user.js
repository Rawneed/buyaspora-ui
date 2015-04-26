import DS from 'ember-data';

export default DS.Model.extend({
  password: 	DS.attr('string'),
  businessname: DS.attr('string'),
  email: 		DS.attr('string'),
  joinDate: 	DS.attr('date', {
  	defaultValue: function() { return new Date(); }
  }),
  business: 	DS.belongsTo('business'),
  referrals: 	DS.hasMany('user'),
  affiliates: 	DS.hasMany('user')
});