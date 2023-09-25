import { Outlet } from 'react-router-dom'

import { Header } from '../index'

import styles from './Layout.module.css'

const Layout = () => {

	const data = [
		{ url: `asteroids`, name: 'Asteroids' },
		{ url: '/11', name: 'NotFound' }
	]

	return (
		<div className={styles.container}>
			<Header data={data} />
			<main className={styles.main__content}>
				<Outlet />
			</main>
		</div>
	)
}

export { Layout }
