import Image from 'next/image'
import styles from './Hero.module.css'
import Pet1x from './../../../public/assets/hero/pet@1x.png'
import Pet2x from './../../../public/assets/hero/pet@2x.png'
import Element11x from './../../../public/assets/hero/element1@1x.png'
import Element12x from './../../../public/assets/hero/element1@2x.png'
import Element21x from './../../../public/assets/hero/element2@1x.png'
import Element22x from './../../../public/assets/hero/element2@2x.png'
import Element31x from './../../../public/assets/hero/element3@1x.png'
import Element32x from './../../../public/assets/hero/element3@2x.png'
import Element41x from './../../../public/assets/hero/element4@1x.png'
import Element42x from './../../../public/assets/hero/element4@2x.png'
import Button from '../button/Button'


const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.contentLeft}>
          <h1 className={styles.heading}>For Your Pet’s Natural Life & Care</h1>
          <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt</p>
          <div className={styles.groupBtn}>
            <Button title='Our Services' width='188px' background='linear-gradient(180deg, rgb(255, 169, 146), rgb(255, 120, 82) 65%)' backgroundHover='linear-gradient(180deg, rgb(195, 228, 143),rgb(142, 198, 55) 65%)' boxShadow=' 0px 10px 25px 0px rgba(255, 124, 84, 0.3)' boxShadowHover='0px 10px 25px 0px rgba(125, 181, 35, 0.3)'/>
            
            <Button title='Make Appointment' background='linear-gradient(180deg, rgb(195, 228, 143),rgb(142, 198, 55) 65%)' backgroundHover='linear-gradient(180deg, rgb(255, 169, 146), rgb(255, 120, 82) 65%)' width='246px' boxShadow='0px 10px 25px 0px rgba(125, 181, 35, 0.3)' boxShadowHover=' 0px 10px 25px 0px rgba(255, 124, 84, 0.3)' />
          
          </div>
        </div>

        <div className={styles.contentRight}>
          
          <div className={styles.blurredBackground} />
          
            <div className={styles.foregroundImage}> 
              <Image src={Pet1x} srcSet={ Pet2x } alt='' /> 
          </div>
          <div className={styles.element1}><Image src={Element11x} srcSet={Element12x} alt=''/></div>
          <div className={styles.element2}><Image src={Element21x} srcSet={Element22x} alt=''/></div>
          <div className={styles.element3}><Image src={Element31x} srcSet={Element32x} alt=''/></div>
          <div className={styles.element4}><Image src={Element41x} srcSet={Element42x} alt=''/></div>
          
          </div> 

    </div>
      
    </section>
  )
}

export default Hero
