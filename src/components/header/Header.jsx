import Button from '../button/Button'
import Logo from '../logo/Logo'
import Menu from '../menu/Menu'
import styles from './Header.module.css'


const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Menu />
      <Button title='+380 00 000 00 00' width='228px' background='linear-gradient(180deg, rgb(255, 169, 146), rgb(255, 120, 82) 65%)' backgroundHover='linear-gradient(180deg, rgb(195, 228, 143),rgb(142, 198, 55) 65%)' boxShadow=' 0px 10px 25px 0px rgba(255, 124, 84, 0.3)' boxShadowHover='0px 10px 25px 0px rgba(125, 181, 35, 0.3)'/>
    </header>
  )
}

export default Header
