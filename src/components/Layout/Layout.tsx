import { Outlet } from 'react-router-dom'

import { utils } from '../../utils'
import { Header } from '../index'

import styles from './Layout.module.css'

const Layout = () => {
	const { url } = utils

	const data = [
		{ url: `${url}/asteroids`, name: 'Asteroids' },
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
