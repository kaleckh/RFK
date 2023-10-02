import Image from 'next/image'
import styles from '../styles/header.module.css'

export default function Header() {
    return (
        <div className={styles.main}>
            <div style={{ width: "300px" }}>
                <div className={styles.flex}>
                    <div>T-shirts</div>
                    <div>Hoodies</div>
                    <div>Mugs</div>
                    <div>Flags</div>
                </div>
            </div>
            <div style={{ width: "50%", display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                <Image height={40} width={180} src={'/static/download.webp'} />
                <div>Cart Icon</div>
            </div>
        </div >
    )
}
