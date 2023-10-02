import Image from 'next/image'
import styles from '../styles/header.module.css'

export default function NewReleases() {
    return (
        <div className={styles.Flex}>
            <div style={{ width: "15%" }} className={styles.iconFlex}>
                <div>New Releases</div>
                <Image height={30} width={30} src={'/static/arrow-right.webp'} />
            </div>
        </div >
    )
}
