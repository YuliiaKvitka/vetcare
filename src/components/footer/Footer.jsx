import Form from '../form/Form'
import Logo from '../logo/Logo'
import styles from './Footer.module.css'
import Image from 'next/image'
import Element21x from './../../../public/assets/care/element-4@1x.png'
import Element22x from './../../../public/assets/care/element-4@2x.png'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
       <div className={styles.element2}><Image src={Element21x} srcSet={Element22x} alt=''/></div> 
        <ul className={styles.list}>
          <li>
            <Logo color1='rgb(36, 40, 81)' color2='rgb(255, 120, 82)' fontSize='36px' />
            <p className={styles.text}>Quisque id leo non dolor tempor elementum quis ac urna. Nam pharetra, ligula eget finibus dignissim, turpis ipsum sollicitudin</p>
            <Form/>
          </li>
          <li>
            <h3 className={styles.title}>Address</h3>
            <h4 className={styles.info}>+23 384 485 29</h4>
            <h4 className={styles.info}>vet@shamim.com</h4>
            <h4 className={styles.info}>123 king street, Melbrown Victoria 3000, Australia</h4>
          </li>
          <li>
             <h3 className={styles.title}>Links</h3>
            <h4 className={styles.info}>About Us</h4>
            <h4 className={styles.info}>Groomers</h4>
            <h4 className={styles.info}>Contact Us</h4>
            <h4 className={styles.info}>Privacy Policy</h4>
            <h4 className={styles.info}>Tearms</h4>
          </li>
          <li>
            <h3 className={styles.title}>Opening Hours</h3>
            <h4 className={styles.info}>Monday-Tuesday 09:00-18:00</h4>
            <h4 className={styles.info}>Wednesday 09:00-18:00</h4>
            <h4 className={styles.info}>Thrusday-Friday 09:00-18:00</h4>
            <h4 className={styles.info}>Saturday 10:00-17:00</h4>
            <h4 className={styles.info}>Sunday 10:30-16:00</h4>
          </li>
        </ul>
        <p className={styles.text1}>&copy; Copyright 2021 - 2024 | Pet Theme by Md Shamim Hossain | All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer



