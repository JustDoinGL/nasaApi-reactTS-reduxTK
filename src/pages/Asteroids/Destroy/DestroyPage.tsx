import { useInView } from 'react-intersection-observer'
import { useAppSelector } from '../../../hooks/redux'

import { AsteroidsHeader } from '../../../components/Asteroids'
import Asteroid from '../../../components/Asteroids/AsteroidsMain/Asteroid/Asteroid'
import { BtnUpArrow } from '../../../UI'

import styles from './DestroysPage.module.css'

const DestroyPage = () => {
	const { ref, inView } = useInView()

	const { activeAsteroids } = useAppSelector(store => store.asteroids)

	return (
		<>
			<AsteroidsHeader title='Destroyed asteroids' refUseInViewPage={ref}/>
			{activeAsteroids.map(asteroid => (
				<Asteroid
					key={asteroid.id}
					asteroid={asteroid}
					needButton={true}
				/>
			))}
			{!inView && (
				<div className={`${styles.arrowTop} ${styles.arrowTopHelper}` }>
					<BtnUpArrow />
				</div>
			)}
		</>
	)
}

export default DestroyPage
