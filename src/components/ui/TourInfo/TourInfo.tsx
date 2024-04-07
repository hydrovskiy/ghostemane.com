'use client'

import { TestButton } from '../Button/Button'
import styles from './TourInfo.module.scss'

export function TourInfo() {
    return <div className = {styles.Container}>
    <h1 className = {styles.Subtitle}>Greyday Tour 2024</h1>
        <div className = {styles.Card}>
            <h2 className = {styles.Date}>April 10, 2024</h2>
            <h2 className = {styles.Location}>Silver Moll</h2>
            <h2 className = {styles.City}>Irkutsk</h2>
            <TestButton />
        </div>
        <div className = {styles.Card}>
            <h2 className = {styles.Date}>April 10, 2024</h2>
            <h2 className = {styles.Location}>Silver Moll</h2>
            <h2 className = {styles.City}>Irkutsk</h2>
            <TestButton />
        </div>
        <div className = {styles.Card}>
            <h2 className = {styles.Date}>April 10, 2024</h2>
            <h2 className = {styles.Location}>Silver Moll</h2>
            <h2 className = {styles.City}>Irkutsk</h2>
            <TestButton />
        </div>
        <div className = {styles.Card}>
            <h2 className = {styles.Date}>April 10, 2024</h2>
            <h2 className = {styles.Location}>Silver Moll</h2>
            <h2 className = {styles.City}>Irkutsk</h2>
            <TestButton />
        </div>
        <div className = {styles.Card}>
            <h2 className = {styles.Date}>April 10, 2024</h2>
            <h2 className = {styles.Location}>Silver Moll</h2>
            <h2 className = {styles.City}>Irkutsk</h2>
            <TestButton />
        </div>
    </div>
}