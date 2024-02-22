import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PowerSelectController extends Controller {
  @tracked model: any;

  @action
  myAction() {
    console.log('From Controller: myAction called');
  }

  @action
  callRouteAction() {
    console.log('From Controller: callRouteAction called');
    this.send('myRouteAction');
    console.log('From Controller: this.send("myRouteAction") called');
  }
}
