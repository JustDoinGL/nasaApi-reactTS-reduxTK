import { Header, Footer } from '../../components/index'

import { utils } from '../../utils'

import styles from './Notfound.module.css'

const NotFound = () => {
	const { url } = utils

	const data = [
		{ url: url, name: 'Asteroids' },
		{ url: '/', name: 'NotFound' }
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

export default NotFound
