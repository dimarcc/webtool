import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash (
      {
        PSUs: this.store.findAll('PSUs'),
        LDRs: this.store.findAll('LDRs'),
        JMPs: this.store.findAll('JMPs'),
        WPXs: this.store.findAll('WPXs')
      }
    )
  }
});
