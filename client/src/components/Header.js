import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Payments from './Payments';
class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Login with google</a></li>;
            default:
                return [
                    <li key="1" style={{margin: '0 10px'}}><Payments/></li>,
                    <li key="2" style={{margin: '0 10px'}}>Credits { this.props.auth.credits}</li>,
                    <li key="3" style={{margin: '0 10px'}}><a href="/api/logout">Logout</a></li>
                ];

        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to={this.props.user ? '/surveys' : '/'} className="brand-logo left">Emaily</Link>
                    <ul id="nav-mobile" className="right">

                        {this.renderContent()}

                    </ul>
                </div>
            </nav>
        )
    }
}
function mapStateToProps(state) {
    return {auth: state.auth}
}
export default connect(mapStateToProps)(Header);