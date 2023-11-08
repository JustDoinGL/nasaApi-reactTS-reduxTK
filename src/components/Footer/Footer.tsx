import styles from './Footer.module.css'

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.items}>
					<a
						href='https://github.com/JustDoinGL/nasaApi-reactTS-reduxTK'
						className={styles.link}
					>
						Repository
					</a>
				</div>
				<div className={styles.year}>2023</div>
			</div>
		</footer>
	)
}

