import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
      calculateValue(){
        console.log(this.get('psuS').get('supplyVoltage'));
      }
  }

});
