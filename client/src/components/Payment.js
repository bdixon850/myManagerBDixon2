import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

class Payment extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_1Og57fuosuAAWBAbB9qML1sb00cVOsVoCM">
        <div className="example">
          <h1>Please submit your payment information below</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default Payment;