import Image from 'next/image'
import styles from './WhatWeDo.module.css'
import Icon11x from './../../../public/assets/whatWeDo/icon1@1x.png'
import Icon12x from './../../../public/assets/whatWeDo/icon1@2x.png'
import Icon21x from './../../../public/assets/whatWeDo/icon2@1x.png'
import Icon22x from './../../../public/assets/whatWeDo/icon2@2x.png'
import Icon31x from './../../../public/assets/whatWeDo/icon3@1x.png'
import Icon32x from './../../../public/assets/whatWeDo/icon3@2x.png'
import Icon41x from './../../../public/assets/whatWeDo/icon4@1x.png'
import Icon42x from './../../../public/assets/whatWeDo/icon4@2x.png'

const WhatWeDo = () => {
  return (
      <section className={styles.section}>
          <div className={styles.wrapper}>
              <div className={styles.span}><span>Care For Your Pet</span></div>
              <h2 className={styles.heading}>What We Do</h2>
              <ul className={styles.list}>
                  <li className={styles.item}>
                      <Image src={Icon11x} srcSet={Icon12x} alt='a' />
                      <h3>Pet Grooming</h3>
                      <p>There are many variatio of passage of Lorem for a Ipsum available</p>
                  </li>
                  <li className={styles.item}>
                      <Image src={Icon21x} srcSet={Icon22x} alt='a' />
                      <h3>Veterinary</h3>
                      <p>There are many variatio of passage of Lorem for a Ipsum available</p>
                </li>
                  <li className={styles.item}>
                      <Image src={Icon31x} srcSet={Icon32x} alt='a' />
                      <h3>Dog Setting</h3>
                      <p>There are many variatio of passage of Lorem for a Ipsum available</p>
                </li>
                  <li className={styles.item}>
                      <Image src={Icon41x} srcSet={Icon42x} alt='a' />
                      <h3>Healthy Meals</h3>
                      <p>There are many variatio of passage of Lorem for a Ipsum available</p>
                </li>
              </ul>
          </div>
      
    </section>
  )
}

export default WhatWeDo

