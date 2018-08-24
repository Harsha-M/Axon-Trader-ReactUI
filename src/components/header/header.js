import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './header.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { performLogin, logOutAction } from '../../actions/action_login';

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
        return (
            <div className={styles.navbar}>
                <div>
                    <Link className={styles.appTitle} to={'/Landing'}>Axon Trader</Link>
                </div>
                <div className={styles.headerItems}>
                    <Link className={styles.navbarItem} to={'/Landing'}>HOME</Link>
                    <Link className={styles.navbarItem} to={'/Dashboard'}>DASHBOARD</Link>
                    <Link className={styles.navbarItem} to={'/companies'}>COMPANIES</Link>
                    <Link className={styles.navbarItem} to={'/Portfolio'}>PORTFOLIO</Link>
                </div>
                <div>
                    {!this.props.successfullLogin ?
                        <form name="form" onSubmit={this.handleSubmit}>
                            <div>
                                <div className="pull-left">
                                    <input type="text" className="form-control" placeholder="USERNAME" name="username" value={username} onChange={this.handleChange} />
                                </div>
                                <div className={styles.passwordInput}>
                                    <input type="password" className="form-control" name="password" placeholder="PASSWORD" value={password} onChange={this.handleChange} />
                                </div>
                                <div className="pull-left">
                                    <button type="submit" value="Login">Login</button>
                                </div>
                            </div>
                        </form> : <div className={styles.logout} onClick={this.props.performLogOut}><span>{this.props.loggedInUser.portfolioName}</span> LogOut </div>
                    }
                </div>
            </div>
        )
    }
}

function matchStateToProps(state) {
    return {
        loggedInUser: state.profile.user,
        successfullLogin: state.profile.successfullLogin
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ performLogin: performLogin, performLogOut: logOutAction }, dispatch);
}


export default connect(matchStateToProps, mapDispatchToProps)(Header);