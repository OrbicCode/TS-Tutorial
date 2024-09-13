import NavBar from "./NavBar/NavBar";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
    return (
        <div className="layout"> 
            <Header />
            <Hero />
            <div className={styles.NavMain}>
                <NavBar className={styles.navBar} />
                <main>{children}</main>
            </div>
            <Footer />
        </div>
    )

}