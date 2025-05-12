import styles from '../../styles/SubHeader.module.scss'

export const SubHeader = () => {
  return (
    <div className={styles.subHeader}>
      <h2 className={styles.subTitle}>Art & Ash</h2>
      <h1 className={styles.title}>Laser engraving</h1>
      <h3 className={styles.solution}>Engineering solutions...</h3>
    </div>
  )
}