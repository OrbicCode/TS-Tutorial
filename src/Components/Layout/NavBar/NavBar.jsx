import { Link } from 'react-router-dom'
import styles from "./NavBar.module.css"

export default function NavBar({className}) {
    return (
        <nav className={className}>
            <Link className={styles.link} to="/Introduction">Introduction</Link>
            <Link className={styles.link} to="/Types-and-Annotations">Types and Annotations</Link>
            <Link className={styles.link} to="/Unions-and-Literals">Unions and Literals</Link>
        </nav>
    )
}