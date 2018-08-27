import React, { Component } from 'react';
import styles from './login.scss';
import { Link } from 'react-router-dom';
import { performLogin } from '../../actions/auth';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
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
        const {username, password} = this.state;
        this.props.performLogin(username, password);
    }

    render() {
        const { username, password } = this.state;
        return <div className="container">
            <span>You need to login to access this part of the site. Please provided your username and password
                Login to get access </span>
            <h3>Login to get access</h3>
            <div className={styles.loginForm}>
            <form name="form" onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                    </div>
                    <div>
                        <button className="btn btn-primary">Login</button>
                    </div>
              </form>
                <div>
                    <Link to="/register">Register</Link>
                </div>
            </div>
        </div>
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({performLogin: performLogin}, dispatch);
}

export default connect(null, mapDispatchToProps)(Login);
