import Image from 'next/image'

import { TourInfo } from '@/ui/TourInfo/TourInfo'
import styles from './Tours.module.scss'

export function Tours() {
    return (
    <section className = {styles.Tours} id = 'tours'>
    <Image className = {styles.Title} src = 'Tour.svg' alt = 'Tours Title' width = { 700 } height = { 100 } />
        <div className = {styles.Container}>
            <TourInfo />
        </div>
    </section>
    )
}