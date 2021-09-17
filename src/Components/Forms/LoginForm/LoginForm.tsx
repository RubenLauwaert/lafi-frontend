import React from 'react'
import styles from '../AuthForm.module.css'
import googleIcon from '../../../Assets/LoginPage/google_icon.png'

export const LoginForm = () => {
    return (
        <div className={styles.oauthWrapper}>
            <div className={styles.oauthContainer}>
                <h1>Log in</h1>
                <div className={styles.oauthForm}>
                    <div className={styles.oauthButton}>
                        <img src={googleIcon} alt="Google Icon"></img>
                        <p>Continue With Google</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
