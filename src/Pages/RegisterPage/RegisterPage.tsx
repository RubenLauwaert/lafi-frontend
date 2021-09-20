import React from 'react'
import { RegisterForm } from '../../Components/Forms/RegisterForm/RegisterForm'
import mainStyles from '../../Main.module.css'

export const RegisterPage = () => {
    return (
        <div className={mainStyles.Page}>
            <RegisterForm></RegisterForm>
        </div>
    )
}
