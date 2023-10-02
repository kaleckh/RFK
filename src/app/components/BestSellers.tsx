import Image from 'next/image'
import styles from '../styles/header.module.css'

export default function BestSellers() {
    return (
        <div className={styles.Flex}>
            <div className={styles.iconFlex}>
                <div>Best Sellers</div>
                <Image height={30} width={30} src={'/static/arrow-right.webp'} />
            </div>
        </div >
    )
}
