import styles from '../../styles/SubHeader.module.scss'
import { AnimateLogo } from '../AnimateLogo/AnimateLogo'


const SubHeader = () => {
  return (
    <div className={styles.subHeader}>
      <p className={styles.paragraph}>Art & Ash</p>
        <AnimateLogo />
      <h1 className={styles.title}>Laser engraving</h1>
    </div>
  )
}

export default SubHeader