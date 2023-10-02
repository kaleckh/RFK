'use client'
// import Image from 'next/image'
import styles from './page.module.css'
import React, { useState, useRef } from "react";
import Header from './components/Header'
import BestSellers from './components/BestSellers'
import NewReleases from './components/NewReleases'
import Link from "next/link";

export default function Home() {
    const [items, setItems] = useState([
        { item: "yes" }, { item: "yes" }, { item: "yes" }, { item: "yes" }
    ])
    const [bestSellers, setBestSellers] = useState([
        { item: "yes" }, { item: "yes" }, { item: "yes" }, { item: "yes" }
    ])


    return (
        <div className={styles.main}>
            <Header />
            <div className={styles.line}></div>
            <BestSellers />
            <div className={styles.grid}>
                {items.map((item, index) => {
                    return (
                        <Link href={'/item'}>
                            <div key={index} className={styles.center}>kale</div>
                        </Link>
                    )
                })}
            </div>
            <div className={styles.space}>
                <div>
                    5 Dollars Donated Every Purchase
                </div>
            </div>
            <NewReleases />
            <div className={styles.grid}>
                {items.map((item, index) => {
                    return (
                        <Link href={'/item'}>
                            <div key={index} className={styles.center}>kale</div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
