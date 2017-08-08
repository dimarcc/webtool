import Ember from 'ember';

export default Ember.Controller.extend({
  inputText:null,

  init(){
    console.log('controller init function');
    this.set('inputText',null);
  },

  actions: {
      calculateValue(){
        // Both of these need to be selected. if the dropdown is null, execution will fail
        console.log(this.get('psuS').get('supplyVoltage'));
        console.log(this.get('inputText'));
      }
  }

});
