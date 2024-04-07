import Image from 'next/image'

import styles from './Releases.module.scss'

export function Releases() {
    return (
    <section className = {styles.Releases} id = 'releases'>
        <Image className = {styles.Title} src = '/Releases.svg' alt = 'Release Title' width = { 700 } height = { 100 } />
            <div className = {styles.Container}>
                <div className = {styles.Card}>
                    <Image className = {styles.Album} src = '/Cover.jpeg' alt = 'Album name' width = { 750 } height = { 750 } />
                </div>
                <div className = {styles.Card}>
                    <Image className = {styles.Album} src = '/Cover.jpeg' alt = 'Album name' width = { 750 } height = { 750 } />
                </div>
            </div>
    </section>
    )
}