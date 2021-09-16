import React from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
    <div className={styles.navBarWrapper}>
        <div className={styles.navBarContainer}>
            <div className={styles.navBarLogoContainer}>
                <Link to="/" className={styles.logoNavigator}>
                    <li>LaFi</li>
                </Link>
            </div>
            <div className={styles.navBarSiteContainer}>
                <Link to="/" className={styles.siteNavigator}>
                    <li>Home</li>
                </Link>

                <Link to="/finance" className={styles.siteNavigator}>
                    <li>Finance</li>
                </Link> 
            </div>
            <div className={styles.navBarSignContainer}>
                <Link to="/login" className={styles.signNavigator}>
                    <li className={styles.loginNavigator}>Log in</li>
                </Link>

                <Link to="/register" className={styles.signNavigator}>
                    <li className={styles.signUpNavigator}>Sign up</li>
                </Link>
            </div>
        </div>
    </div>
    )
}
