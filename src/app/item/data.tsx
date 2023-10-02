'use client'
// import Image from 'next/image'
import styles from '../styles/item.module.css'
import React, { useState, useRef } from "react";
import Header from '../components/Header'
import Link from "next/link";

export default function Home() {

    return (
        <div className={styles.main}>
            <Header />
            <div className={styles.line}></div>
        </div>
    )
}
