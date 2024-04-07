'use client'

import styles from './Button.module.scss'

export function TicketButton() {
    return <button className = {styles.Ticket}>Buy tickets</button>
}

export function TestButton() {
    return <button className = {styles.Test}>Tickets</button>
}