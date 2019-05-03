import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import contractors from '../contractors.json';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        complete: false,
        contractors
    };
    this.submit = this.submit.bind(this);
  }

  handleSubmit = (e) => {
      e.preventDefault();
  }

  async submit(ev) {
    // User clicked submit
    let {token} = await this.props.stripe.createToken({name: "Name"});
    let response = await fetch("/charge", {
        method: "POST",
        headers: {"Content-Type": "text/plain"},
        body: token.id
    });

    if (response.ok) console.log("Purchase Complete!");
    window.location.href = '/thankyou'
  }

  render() {
      if (this.state.complete) return <h1>Purchase Complete</h1>
    return (
        <div className="checkout">
            <p>Would you like to complete the purchase?</p>
            <form 
                className="form-group mt-3 border border-primary rounded shadow-lg p-3"
                onSubmit={this.handleSubmit}
            >
                <label>Name</label>
                <input 
                    type="text"
                    className="input-group my-1 p-1 border border-dark"
                    required
                    // value={this.state.name}
                />
                <label>Amount</label>
                {/* {this.state.contractors.map(contractor => ( */}
                    <input 
                        type="text"
                        className="input-group my-1 p-1 border border-dark"
                        // value={contractor.Price}
                    />
                {/* ))} */}
        
                <label>CC Number -- Exp. Date - CVC</label>
                <CardElement className="p-2 border border-dark" />
                <button className="btn btn-primary border border-dark shadow mt-3" onClick={this.submit}>Send</button>
            </form>
        </div>

    );
  }
}

export default injectStripe(CheckoutForm);