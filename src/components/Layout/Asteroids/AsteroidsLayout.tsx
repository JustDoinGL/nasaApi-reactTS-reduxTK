import { Outlet } from 'react-router-dom'

import HeaderAsteroids from '../../Asteroids/Header/HeaderAsteroids'

import styles from './AsteroidsLayout.module.css'

const AsteroidsLayout = () => {
	return (
		<div className={styles.container}>
			<HeaderAsteroids />
			<main className={styles.main__content}>
				<div className={styles.container__main}>
					<div className={styles.bg}></div>
					<Outlet />
				</div>
			</main>
		</div>
	)
}

export { AsteroidsLayout }
