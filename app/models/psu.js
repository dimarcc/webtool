import DS from 'ember-data';

export default DS.Model.extend({
  name:DS.attr('string'),
  power:DS.attr('number'),
  voltage:DS.attr('number')
});
