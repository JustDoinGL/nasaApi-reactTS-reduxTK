import { Header, Footer } from '../../components/index'

import styles from './Notfound.module.css'

const NotFound = () => {

	const data = [
		{ url: '/', name: 'Search' },
		{ url: '/pictures', name: 'Pictures' },
		{ url: `asteroids`, name: 'Asteroids' },
	]

	return (
		<div className={styles.container}>
			<Header data={data} />
			<div className={styles.not__found}>
				<h1 className={styles.header}>404 - Page not found 😞</h1>
				<p className={styles.text}>
					Sorry, we were unable to find the requested page.
				</p>
			</div>
			<Footer />
		</div>
	)
}

export {NotFound}
