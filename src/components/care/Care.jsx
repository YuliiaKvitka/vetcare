import Image from 'next/image'
import styles from './Care.module.css'
import Dog1x from './../../../public/assets/care/dog@1x.png'
import Dog2x from './../../../public/assets/care/dog@2x.png'
import Element11x from './../../../public/assets/care/element-1@1x.png'
import Element12x from './../../../public/assets/care/element-1@2x.png'
import Element21x from './../../../public/assets/care/element-2@1x.png'
import Element22x from './../../../public/assets/care/element-2@1x.png'
import Element31x from './../../../public/assets/care/element-3@1x.png'
import Element32x from './../../../public/assets/care/element-3@2x.png'
import Element41x from './../../../public/assets/care/element-4@1x.png'
import Element42x from './../../../public/assets/care/element-4@2x.png'
import Button from '../button/Button'

const Care = () => {
  return (
      <section className={styles.section}>
      <div className={styles.wrapper}>
        
        <div className={styles.columnLeft}>
          <h2 className={styles.heading}>Professional Pet Care</h2>
          <p className={styles.text}>Pet owners trust us to look after the needs of their beloved companions. We are specialists committed to delivering the very highest of veterinary care and affection.</p>
          {/* <button className={styles.btn} type='button'>Contact Us Now</button> */}
          <Button title='Contact Us Now' width='221px' background='linear-gradient(180deg, rgb(255, 169, 146), rgb(255, 120, 82) 65%)' backgroundHover='linear-gradient(180deg, rgb(195, 228, 143),rgb(142, 198, 55) 65%)' boxShadow=' 0px 10px 25px 0px rgba(255, 124, 84, 0.3)' boxShadowHover='0px 10px 25px 0px rgba(125, 181, 35, 0.3)'/>
          
</div>

        <div className={styles.contentRight}>
          
          <div className={styles.blurredBackground} />
          
            <div className={styles.foregroundImage}> 
              <Image src={Dog1x} srcSet={ Dog2x } alt='' /> 
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

export default Care
