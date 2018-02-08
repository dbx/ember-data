import Ember from 'ember';

export default function isEnabled() {
  if (arguments[0] === 'ds-improved-ajax' || arguments[0] === 'ds-pushpayload-return') {
    return true;
  }
  return Ember.FEATURES.isEnabled(...arguments);
}
