import Asteroid from '../../../components/Asteroids/AsteroidsMain/Asteroid/Asteroid'

import { useAppSelector } from '../../../hooks/redux'

import styles from './DestroysPage.module.css'

const DestroyPage = () => {
	const { activeAsteroids } = useAppSelector(store => store.asteroids)
	return (
		<>
			<h1 className={styles.title}>Asteroids destroyed!</h1>
			{activeAsteroids.map(asteroid => (
				<Asteroid
					key={asteroid.id}
					asteroid={asteroid}
					needButton={false}
					activeKilometers={false}
				/>
			))}
		</>
	)
}

export default DestroyPage
