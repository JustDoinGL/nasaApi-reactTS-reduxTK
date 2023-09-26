import { Outlet } from 'react-router-dom'

import { Footer, Header } from '../../index'

import styles from './PicturesLayout.module.css'

const PicturesLayout = () => {

	const data = [
		{ url: '/', name: ' Pictures' },
		{ url: `asteroids`, name: 'Asteroids' },
	]

	return (
		<div className={styles.container}>
			<Header data={data} />
			<main className={styles.main__content}>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}

export { PicturesLayout }
