import Image from 'next/image'
import Button from '../button/Button'
import styles from './Pricing.module.css'
import Element11x from './../../../public/assets/care/element-2@1x.png'
import Element12x from './../../../public/assets/care/element-2@2x.png'


const Pricing = () => {
    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
               <div className={styles.element1}><Image src={Element11x} srcSet={Element12x} alt=''/></div>
          
                <div className={styles.card}>
                    <h4>Regular Pack</h4>
                        <h3>3 Days</h3>
                        <h5>Pet Shower</h5>
                        <h5>Fitness Checkup</h5>
                        <h5>Hair and Nail Cut</h5>
                        <h5>Control Hair Falling</h5>
                        <h6>$150<span>Per Visit</span></h6>
                    <div className={styles.blockBtn}>
                        <Button title='Purchase Pack' width='214px' background='linear-gradient(180deg, rgb(255, 169, 146), rgb(255, 120, 82) 65%)' backgroundHover='linear-gradient(180deg, rgb(195, 228, 143),rgb(142, 198, 55) 65%)' boxShadow=' 0px 10px 25px 0px rgba(255, 124, 84, 0.3)' boxShadowHover='0px 10px 25px 0px rgba(125, 181, 35, 0.3)'/>
                        {/* <button className={styles.btn} type='button'>Purchase Pack</button> */}
                    </div>
                </div>
                <div className={styles.cardMiddle}>
                    <h4>Exclusive Pack</h4>
                        <h3>10 Days</h3>
                        <h5>Pet Shower</h5>
                        <h5>Fitness Checkup</h5>
                        <h5>Hair and Nail Cut</h5>
                        <h5>Control Hair Falling</h5>
                        <h5>Brush & Blow Dry</h5>
                        <h5>Pet Park And Games</h5>
                        <h6> $350<span>Per Visit</span></h6>
                    <div className={styles.blockBtn}>
                        <Button title='Purchase Pack' width='214px' background='rgb(255, 255, 255)' backgroundHover='linear-gradient(180deg, rgb(195, 228, 143),rgb(142, 198, 55) 65%)' boxShadow=' 0px 10px 25px 0px rgba(255, 124, 84, 0.3)' boxShadowHover='0px 10px 25px 0px rgba(125, 181, 35, 0.3)' color='rgb(255, 119, 81)'/>
                            {/* <button className={styles.btnMiddle} type='button'>Purchase Pack</button> */}
                        </div>
                </div>
                <div className={styles.card}>
                    <h4>Premium Pack</h4>
                        <h3>30 Days</h3>
                        <h5>Pet Shower</h5>
                        <h5>Fitness Checkup</h5>
                        <h5>Hair and Nail Cut</h5>
                        <h5>Control Hair Falling</h5>
                        <h6>$550<span>Per Visit</span></h6>
                    <div className={styles.blockBtn}>
                        <Button title='Purchase Pack' width='214px' background='linear-gradient(180deg, rgb(255, 169, 146), rgb(255, 120, 82) 65%)' backgroundHover='linear-gradient(180deg, rgb(195, 228, 143),rgb(142, 198, 55) 65%)' boxShadow=' 0px 10px 25px 0px rgba(255, 124, 84, 0.3)' boxShadowHover='0px 10px 25px 0px rgba(125, 181, 35, 0.3)'/>
                            {/* <button className={styles.btn} type='button'>Purchase Pack</button> */}
                        </div>
                </div>
            
            </div>
        </section>
    )
}

export default Pricing
