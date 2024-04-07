import Image from 'next/image'

import styles from './Tours.module.scss'
import { TourInfo } from '@/components/ui/TourInfo/TourInfo'

export function Tours() {
    return (
    <section className = {styles.Tours}>
    <Image className = {styles.Title} src = 'Tour.svg' alt = 'Tours Title' width = { 700 } height = { 100 } />
        <div className = {styles.Container}>
            <TourInfo />
        </div>
    </section>
    )
}