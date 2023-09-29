// import Image from 'next/image'
import styles from '../styles/header.module.css'

export default function Header() {
    return (
        <div className={styles.main}>
            <div className={styles.flex}>
                <div>T-shirts</div>
                <div>Hoodies</div>
                <div>Mugs</div>
                <div>Flags</div>
            </div>
            <div>Logo</div>
            <div>Cart Icon</div>
        </div>
    )
}
