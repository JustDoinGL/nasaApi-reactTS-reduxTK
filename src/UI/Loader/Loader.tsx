import styles from './Loader.module.css'

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loader__circle}></div>
      <div className={styles.loader__text}>Load...</div>
    </div>
  )
}

export default Loader
