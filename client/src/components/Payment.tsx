import * as React from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';
import Form from './Form';


class Payment extends React.Component<IAppProps, IAppState> {
    render() {
        return (
            <>
            <StripeProvider apiKey="pk_test_1Og57fuosuAAWBAbB9qML1sb00cVOsVoCM">
                <Elements>
                    <Form />
                </Elements>
            </StripeProvider>
            </>
        );
    }
}

interface IAppProps { }

interface IAppState { }
export default Payment;