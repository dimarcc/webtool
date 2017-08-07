import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return[{psuname:'WPX-PSU-40',voltage:48,power:40,ldrname:'WPX-LDR-8',jmpname:'WPX-JMP-1',wpxname:'WPX2-SO'},
    {psuname:'WPX-PSU-80',voltage:48,power:80,ldrname:'WPX-LDR-25',jmpname:'WPX-JMP-2',wpxname:'WPX2-HO'},
    {psuname:'WPX-PSU-120',voltage:48,power:120,jmpname:'WPX-JMP-4',wpxname:'WPX4-SO'},
    {psuname:'WPX-PSU-240',voltage:48,power:240,jmpname:'WPX-JMP-8',wpxname:'WPX4-HO'},
    {psuname:'WPX-PSU-320',voltage:48,power:320,jmpname:'WPX-JMP-12',wpxname:'WPX6-SO'},
    {psuname:'WPX-PSU-600',voltage:48,power:600,jmpname:'WPX-JMP-16',wpxname:'WPX6-HO'},
    {jmpname:'WPX-JMP-20',wpxname:'WPX8-SO'},
    {wpxname:'WPX8-HO'}];
  }
});
