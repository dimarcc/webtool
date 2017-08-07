import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  supplyVoltage: DS.attr('number'),
  psuPower: DS.attr('number')
});
