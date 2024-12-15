import { Outlet } from "react-router"
import Header from "../Header/Header"
import styles from "./MainLayout.module.css"

const MainLayout = () => {
    return <>
    <Header/>
    <main className={StyleSheet.main__container}>
        <Outlet/>
    </main>
    </>
}

export default MainLayout