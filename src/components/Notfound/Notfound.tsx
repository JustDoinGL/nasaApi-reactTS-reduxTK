import styles from './Notfound.module.css'

const NotFound = () => {
  return (
    <div className={styles.not__found}>
      <h1 className={styles.header}>404 - Страница не найдена 😞</h1>
      <p className={styles.text}>Извините, мы не смогли найти запрошенную страницу.</p>
    </div>
  );
};

export default NotFound;