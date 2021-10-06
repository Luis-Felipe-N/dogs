import { Route, BrowserRouter , useHistory, Switch } from "react-router-dom"
// import { Navigate, Route, Routes } from "react-router-dom";

import LoginForm from "./LoginForm/LoginForm"

import CreateAccount from "./CreateAccount"

import loginImg from '../../Assets/login.jpg'
import styles from '../../styles/pages/login.module.scss'
import { useEffect } from "react"
import useUser from "../../hooks/useUser"

export default function Login() {
    const history = useHistory()

    const { logged } = useUser()

    useEffect(() => {
        if ( logged === true) {
            history.push('/')
        }
    })

    return (
        <main className={styles.loginContainer}>
            <img src={loginImg} alt="Icone de um cachorro" />
            <BrowserRouter>
                <Route path="/" component={LoginForm} />
                <Route path="criar" component={CreateAccount} />
            </BrowserRouter>
        </main>
    )
}
