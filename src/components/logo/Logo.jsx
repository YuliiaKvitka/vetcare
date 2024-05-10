import Link from 'next/link';
import styles from './Logo.module.css'

const Logo = ({ color1 = 'rgb(255, 120, 82)', color2 = 'rgb(143, 198, 56)', fontSize = '40px' }) => {
  const customStyles = {
    fontSize,
  };

  return (
    <Link href='/'>
      <div className={styles.logo} style={customStyles}>
        <span className={styles.logoLeft} style={{ color: color1 }}>Vet</span>
        <span className={styles.logoRight} style={{ color: color2 }}>care</span>
      </div>
    </Link>
  )
}

export default Logo




// const Logo = ({ width = 'auto', height = 'auto', color1 = '#000', color2 = '#000', fontSize = '16px' }) => {
//   const customStyles = {
//     width,
//     height,
//     fontSize,
//   };

//   return (
//     <div className={styles.logo} style={customStyles}>
//       <span className={styles.logoLeft} style={{ color: color1 }}>Vet</span>
//       <span className={styles.logoRight} style={{ color: color2 }}>care</span>
//     </div>
//   );
// };

// Logo.propTypes = {
//   width: PropTypes.string,
//   height: PropTypes.string,
//   color1: PropTypes.string,
//   color2: PropTypes.string,
//   fontSize: PropTypes.string,
// };