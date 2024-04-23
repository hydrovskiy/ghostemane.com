'use client'

import styles from './Button.module.scss';

export function BuyButton() {
    return (
        <button className={styles.BuyButton}>Buy tickets</button>
    )
}

export function TicketsButton() {
    return (
        <button className = {styles.TicketsButton}>Tickets</button>
    )  
}