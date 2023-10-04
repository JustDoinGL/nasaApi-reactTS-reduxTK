import { Outlet } from 'react-router-dom'

import { Footer, Header } from '../../index'

import styles from './SearchPicturesLayout.module.css'

const SearchPicturesLayout = () => {

	const data = [
		{ url: '/', name: 'Search' },
		{ url: '/pictures', name: 'Pictures' },
		{ url: `/asteroids`, name: 'Asteroids' },
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

export { SearchPicturesLayout }
