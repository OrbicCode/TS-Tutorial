import { Link } from 'react-router-dom'
import styles from "./NavBar.module.css"

export default function NavBar({className}) {
    return (
        <nav className={className}>
            <Link className={styles.link} to="/Introduction">Introduction</Link>
            <Link className={styles.link} to="/Types-and-Annotations">Types and Annotations</Link>
            <Link className={styles.link} to="/Unions-and-Literals">Unions and Literals</Link>
            <Link className={styles.link} to="https://www.typescriptlang.org/play/?#code/DYUwLgBAlgzgEgVwHYHMBOBPAXBARge31AEMkIBeCMNBEAbgCgHRICiRSBBNNYjCiAG0AHAF0mLPIRJIAot17YIMalFSDxDAMb4kKiAAsQwYPgEAiIyfzmmbGfJ58Bgq6c0AzZFrBRdEYgATQIAKJAQAWwBGHHCI3BA0ABoIOIAmWMiEtABKTPjEiABvBggyiDRwBDQyOKiIAGpUyLTGAF8JcADggCUQGARgSEog0IA2FLGc7V0YdgA6UxQQ0b6BoenmLvxcACsQHxwS8oCI-GQwfOyk0vLkKABHWgBJQJwVNDUUG5PYADViMAoG8pOxSD9yqNKjAYAAZNT9d6qdTiDoMHb7HwCY6Qs4XHAAFgADBCyvcniBXjhLMZTOZSdAYACgSDqLQGVD+nCETAcIIadZ6RBzLgMCBzKimDo9AsliEMQcwJswBgAA4gCAAYSI5zQFgAQrCAKqycwQAA+woAmrJYbCAPIAdVsW0gICgYCMaBw2tM1QNxtNQA">TypeScript Playground</Link>
        </nav>
    )
}