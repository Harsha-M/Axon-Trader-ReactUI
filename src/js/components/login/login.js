import React, { Component } from 'react';
import styles from './login.scss';
class Login extends Component {

    render() {
        return <div className={styles.loginContainer}>
            <span>You need to login to access this part of the site. Please provided your username and password
                Login to get access </span>
            <h3>Login to get access</h3>
            <div>
                <label>Username:
                <input type="text" name="Username" placeholder="Username" />
                </label><br/><br/>
                <label>Password:
                <input type="password" name="Password" placeholder="Password " />
                </label><br/><br/>
                <label>
                    <input type="radio" value="remember" checked={false} />
                     Don't ask for my password for two weeks
                </label><br /><br />
                <button value="Login">Submit</button>
                <button value="Reset">Reset</button>
            </div>
        </div>
    }
}

export default Login;