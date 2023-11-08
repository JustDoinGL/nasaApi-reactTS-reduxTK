import { Outlet } from 'react-router-dom'

import { HeaderAsteroids } from '../../components/Asteroids/HeaderAsteroids/HeaderAsteroids'

import styles from './AsteroidsLayout.module.css'
import { Suspense } from 'react'
import { Loader } from '../../UI'

const AsteroidsLayout = () => {
	return (
		<div className={styles.container}>
			<HeaderAsteroids />
			<main className={styles.content}>
				<div className={styles.main}>
					<div className={styles.bg}></div>
					<Suspense fallback={<Loader />}>
					<Outlet />
				</Suspense>
				</div>
			</main>
		</div>
	)
}

export default AsteroidsLayout
