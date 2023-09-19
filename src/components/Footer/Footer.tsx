import styles from './Footer.module.css'


const Footer = () => {
	return (
		<footer className={styles.footer}>
        <div className={styles.footer__container}>
          <div className={styles.footer__links}>
            <a href='https://github.com/JustDoinGL/nasaApi-reactTS-reduxTK' className='footer-link'>
              Repository
            </a>
          </div>
          <div className={styles.footer__year}>2023</div>
        </div>
      </footer>
	)
}

export default Footer
