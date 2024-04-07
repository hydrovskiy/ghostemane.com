import Image from 'next/image'

import Layout from '@/components/layout/Layout'

import { Releases } from '@/components/screens/Home/Releases/Releases'
import { Tours } from '@/components/screens/Home/Tours/Tours'
import { TicketButton } from '@/components/ui/Button/Button'
import styles from '@/components/screens/Home/Home.module.scss'

export default function Home() {
    return (
    <Layout>
        <div className = {styles.Home}>
            <div className = {styles.Container}>
                <Image className = {styles.Logo} src = '/GHOSTEMANE.svg' alt = 'Logo' width = { 0 } height = { 0 } />
                <Image className = {styles.Consert} src = '/Tourname image.png' alt = 'Tour' width = { 800 } height = { 550 } />
                <TicketButton />
            <Releases />
            <Tours />
            </div>
        </div>
    </Layout>
    )
}