import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './header.scss';

class Header extends Component {

    render() {
        return (
            <div className={styles.navbar}>
                <Link className={styles.navbarItem} to={'/Landing'}>Axon Trader</Link>
                <Link className={styles.navbarItem} to={'/Landing'}>Home</Link>
                <Link className={styles.navbarItem} to={'/Dashboard'}>Dashboard</Link>
                <Link className={styles.navbarItem} to={'/Companies'}>Companies</Link>
                <Link className={styles.navbarItem} to={'/Data'}>Data</Link>
                <Link className={styles.navbarItem} to={'/Portfolio'}>Portfolio</Link>
                <form>
                    <input type="text" name="Username" placeholder="Username"/>
                    <input type="password" name="Password" placeholder="Password "/>
                    <button type="submit" value="Login">Login</button>
                </form>
            </div>
        )
    }
}

export default Header;