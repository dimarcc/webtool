import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  wpxInternalResistance: DS.attr('number'),
  wpxPower: DS.attr('number')
});
