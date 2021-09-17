import React from 'react'
import { LoginForm } from '../../Components/Forms/LoginForm/LoginForm'
import mainStyles from '../../Main.module.css'

export const LoginPage = () => {
    return (
        <div className={mainStyles.Page}>
            <LoginForm></LoginForm>
        </div>
    )
}
