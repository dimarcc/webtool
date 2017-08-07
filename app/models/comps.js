import DS from 'ember-data';

export default DS.Model.extend({
  PSUs: DS.attr('string'),
  LDRs: DS.attr('string'),
  JMPs: DS.attr('string'),
  WPXs: DS.attr('string')
});
