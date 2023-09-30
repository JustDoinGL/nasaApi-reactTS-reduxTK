import { AsteroidsHeader } from '../../../components/Asteroids'
import Asteroid from '../../../components/Asteroids/AsteroidsMain/Asteroid/Asteroid'

import { useAppSelector } from '../../../hooks/redux'

const DestroyPage = () => {
	const { activeAsteroids } = useAppSelector(store => store.asteroids)
	return (
		<>
			<AsteroidsHeader title='Destroyed asteroids' />
			{activeAsteroids.map(asteroid => (
				<Asteroid
					key={asteroid.id}
					asteroid={asteroid}
					needButton={true}
				/>
			))}
		</>
	)
}

export default DestroyPage
