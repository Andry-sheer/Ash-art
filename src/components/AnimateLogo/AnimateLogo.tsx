import styles from '../../styles/AnimateLogo.module.scss'
import { GiBeveledStar } from "react-icons/gi";
import { IconComponent } from '../IconComponent/IconComponent';

export const AnimateLogo = () => {
  return (
    <div className={styles.logoContainer}>
      <div className={styles.line}></div>
      <div className={styles.starContainer}>
        <div className={styles.star}>
          <IconComponent className={styles.icon} icon={GiBeveledStar} />
        </div>
      </div>
    </div>
  )
}