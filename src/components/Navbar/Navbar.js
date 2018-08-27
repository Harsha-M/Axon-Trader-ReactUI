import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { performLogin, performLogout } from '../../actions/auth';

class Header extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { username, password } = this.state;
        this.props.performLogin(username, password);
    }

    render() {
        const { username, password } = this.state;
        const { user, performLogout } = this.props;
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Axon Trader</Link>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">HOME</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">DASHBOARD</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/companies">COMPANIES</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/portfolios">PORTFOLIO</Link>
                    </li>
                </ul>
                {!this.props.isAuthenticated ?
                    <form name="form" onSubmit={this.handleSubmit} className="form-inline my-2 my-lg-0">
                        <input type="text" className="form-control mr-sm-2" placeholder="Username" name="username" value={username} onChange={this.handleChange} />
                        <input type="password" className="form-control mr-sm-2" name="password" placeholder="Password" value={password} onChange={this.handleChange} />
                        <button type="submit" value="Login" className="btn btn-outline-success my-2 my-sm-0">Login</button>
                    </form> : <div>
                    <span className="nav-item">{user.firstName} {user.lastName}&nbsp; </span>
                    <button 
                        onClick={performLogout}
                        className="btn btn btn-outline-danger my-2 my-sm-0">Logout</button>
                    </div>
                }
            </nav>
        )
    }
}

function matchStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        user: state.auth.user
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ performLogin: performLogin, performLogout: performLogout }, dispatch);
}

export default connect(matchStateToProps, mapDispatchToProps)(Header);
