import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authActions';
import CSS from './Thanks.css'

const ThankStyle = {
    'textAlign': 'center',
    'backgroundColor': 'transparent'

}


class ThankYou extends Component {

    onSearch = e => {
        e.preventDefault();
        window.location.href = '/contractor'
    }

    onLogOutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    }

    render() {
        return (
            <div className="thanks">
                <div className="jumbotron" style={ThankStyle}>
                    <h1 class="display-4">Thank you for your payment!</h1>
                    <hr class="my-4"></hr>
                    <p>You will receive a confirmation email shortly </p>
                    <button className="btn btn-primary" type="button" onClick={this.onSearch}>Back to search</button>
                    <br></br>
                    <button className="btn btn-success" type="button" onClick={this.onLogOutClick}>Log Out</button>
                </div>
            </div>
        )
    }
};

ThankYou.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(ThankYou);
