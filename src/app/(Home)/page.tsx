import Image from 'next/image';

import Layout from '@/components/layout/Layout';
import Releases from '@/screens/Home/Releases/Releases';
import Tours from '@/screens/Home/Tours/Tours';
import { BuyButton } from '@/ui/Button/Button';
import style from '@/screens/Home/Home.module.scss';

function Home() {
    return (
        <Layout>
            <div className={style.Home}>
                <div className={style.Container}>
                    <Image 
                        className={style.Logo} 
                        src='/GHOSTEMANE.svg' 
                        alt='Logo' 
                        width={0} 
                        height={0} 
                    />
                    <Image
                        className={style.Consert}
                        src='/Tourname image.png'
                        alt='Tour image'
                        width={800}
                        height={550}
                    />
                    
                    <BuyButton />

                    <Releases />
                    
                    <Tours />
                </div>
            </div>
        </Layout>
    );
}

export default Home;