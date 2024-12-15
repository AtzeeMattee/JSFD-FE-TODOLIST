import styles from "./AuthLayout.module.css"
import { Outlet } from "react-router"

const AuthLayout = () => {
    return <main className= {StyleSheet.auth__container}>
        <Outlet/>
    </main>
}

export default AuthLayout