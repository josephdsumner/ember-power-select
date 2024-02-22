import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class PowerSelectRoute extends Route {
  model() {
    // these are used only for presentation purposes in the test-app
    const OPTIONS = [
      'Oregon (us-west-2)',
      'N. Virginia (us-east-1)',
      'Ireland (eu-west-1)',
      'London (eu-west-2)',
      'Frankfurt (eu-central-1)',
    ];
    const SELECTED = ['Oregon (us-west-2)'];
    const SELECTEDMULTIPLE = [
      'Oregon (us-west-2)',
      'N. Virginia (us-east-1)',
      'Ireland (eu-west-1)',
    ];
    return { OPTIONS, SELECTED, SELECTEDMULTIPLE };
  }

  @action
  myRouteAction() {
    console.log('From Route: myRouteAction called');
  }
}
