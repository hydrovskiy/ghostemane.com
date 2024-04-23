import Image from 'next/image';

import { TourInfo } from '@/ui/TourInfo/TourInfo';
import style from './Tours.module.scss';

function Tours() {
    return (
    <section className={style.Tours} id='tours'>
        <Image className = {style.Title} src = 'Tour.svg' alt = 'Tours Title' width = { 700 } height = { 100 } />
            <div className = {style.Container}>
                <TourInfo />
            </div>
    </section>
    );
}

export default Tours;