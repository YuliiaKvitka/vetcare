import styles from './Menu.module.css'

const Menu = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>Start</li>
        <li className={styles.item}>Services</li>
        <li className={styles.item}>About</li>
        <li className={styles.item}>News</li>
        <li className={styles.item}>Contact</li>
      </ul>
    </nav>
  )
}

export default Menu


