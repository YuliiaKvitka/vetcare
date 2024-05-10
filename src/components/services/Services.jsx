import styles from './Sevices.module.css'
import Pet1x from './../../../public/assets/services/pet@1x.png'
import Pet2x from './../../../public/assets/services/pet@2x.png'
import Image from 'next/image'
import Element11x from './../../../public/assets/services/element-1@1x.png'
import Element12x from './../../../public/assets/services/element-1@2x.png'
import Element21x from './../../../public/assets/services/element-2@1x.png'
import Element22x from './../../../public/assets/services/element-2@2x.png'
import Element31x from './../../../public/assets/services/element-3@1x.png'
import Element32x from './../../../public/assets/services/element-3@2x.png'
import Element41x from './../../../public/assets/services/element-4@1x.png'
import Element42x from './../../../public/assets/services/element-4@2x.png'
import Button from '../button/Button'

const Services = () => {
  return (
      <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.contentLeft}>
          <span>Our Success Story</span>
          <h2 className={styles.heading}>Experience Vet Clinic And Services</h2>
                  <p className={styles.text}>Aliquam erat volutpat In id fermentum augue, ut pellentesque  Maecenas at arcu risus. Donec commodo sodales ex, scelerisque laoreet nibh hakso hendrerit id. In aliquet magna nec lobortis maximus.</p>
                  <ul className={styles.customList}>
                    <li>Donec commodo scelerisque laoreet nibh hendrerit</li>
                    <li>In aliquet magna nec lobortis maximus. Etiam a dolor placerat</li>
                    <li>Etiam dolor nec elementum ipsum convall Maecenas</li>
                  </ul>

          <div className={styles.groupBtn}>
            {/* <button className={styles.btn} type='button'>Know More About Us</button> */}
            <Button title='Know More About Us' width='268px' background='linear-gradient(180deg, rgb(255, 169, 146), rgb(255, 120, 82) 65%)' backgroundHover='linear-gradient(180deg, rgb(195, 228, 143),rgb(142, 198, 55) 65%)' boxShadow=' 0px 10px 25px 0px rgba(255, 124, 84, 0.3)' boxShadowHover='0px 10px 25px 0px rgba(125, 181, 35, 0.3)'/>
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

export default Services
