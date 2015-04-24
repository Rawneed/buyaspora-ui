import DS from 'ember-data';

export default DS.Model.extened({
  filename: DS.attr('string'),
  type: 	DS.attr('string'),
});