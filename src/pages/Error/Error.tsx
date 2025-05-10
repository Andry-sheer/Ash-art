
import { IoIosWarning } from "react-icons/io";
import { IconComponent } from "../../components/IconComponent/IconComponent";
import styles from '../../styles/Error.module.scss'

export const Error = () => {
  return (
    <div className={styles.error}>
      <div className={styles.container}>
        <IconComponent className={styles.warning} icon={IoIosWarning} />
        <h1 className={styles.title}>Error page is not found | 404</h1>
      </div>
    </div>
  )
}