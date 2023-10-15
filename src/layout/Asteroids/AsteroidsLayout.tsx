import { Outlet } from 'react-router-dom'

import HeaderAsteroids from '../../components/Asteroids/HeaderAsteroids/HeaderAsteroids'

import styles from './AsteroidsLayout.module.css'

const AsteroidsLayout = () => {
	return (
		<div className={styles.container}>
			<HeaderAsteroids />
			<main className={styles.content}>
				<div className={styles.main}>
					<div className={styles.bg}></div>
					<Outlet />
				</div>
			</main>
		</div>
	)
}

export { AsteroidsLayout }
