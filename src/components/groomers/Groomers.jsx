import Image from 'next/image'
import styles from './Groomers.module.css'
import Image11x from './../../../public/assets/groomers/image1@1x.png'
import Image12x from './../../../public/assets/groomers/image1@2x.png'
import Image21x from './../../../public/assets/groomers/image2@1x.png'
import Image22x from './../../../public/assets/groomers/image2@2x.png'
import Image31x from './../../../public/assets/groomers/image3@1x.png'
import Image32x from './../../../public/assets/groomers/image3@2x.png'
import Image41x from './../../../public/assets/groomers/image4@1x.png'
import Image42x from './../../../public/assets/groomers/image4@2x.png'

const Groomers = () => {
  return (
      <section className={styles.section}>
          <div className={styles.wrapper}>
              <span >Our Team</span>
              <h2 className={styles.heading}>Meet Our Groomers</h2>
              <ul className={styles.list}>
                  <li >
                      <div className={styles.img}><Image src={Image11x} srcSet={Image12x} alt='' /></div>
                      <h3>Rosalina Wiliam</h3>
                      <span className={styles.job}>CEO & Founder</span>
                </li>
                  <li>
                      <div className={styles.img}><Image src={Image21x} srcSet={Image22x} alt='' /></div>
                      <h3>Rosalina Wiliam</h3>
                      <span className={styles.job}>CEO & Founder</span>
                </li>
                  <li>
                       <div className={styles.img}><Image src={Image31x} srcSet={Image32x} alt='' /></div>
                      <h3>Rosalina Wiliam</h3>
                      <span className={styles.job}>CEO & Founder</span>
                </li>
                  <li>
                      <div className={styles.img}><Image src={Image41x} srcSet={Image42x} alt='' /></div>
                      <h3>Rosalina Wiliam</h3>
                      <span className={styles.job}>CEO & Founder</span>
                </li>
              </ul>
          </div>
      
    </section>
  )
}

export default Groomers
