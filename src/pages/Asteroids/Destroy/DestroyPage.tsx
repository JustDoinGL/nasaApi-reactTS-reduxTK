import { useInView } from 'react-intersection-observer'
import { useAppSelector } from '../../../hooks/redux'

import { getAsteroidsSelector } from '../../../redux/asteroids/asteroidsSlice'

import { AsteroidsHeader } from '../../../components/Asteroids'
import Asteroid from '../../../components/Asteroids/AsteroidsMain/Asteroid/Asteroid'
import { BtnUpArrow } from '../../../UI'

import styles from './DestroysPage.module.css'

const DestroyPage = () => {
	const { ref, inView } = useInView()

	const { activeAsteroids } = useAppSelector(getAsteroidsSelector)

	return (
		<>
			<AsteroidsHeader title='Destroyed asteroids' refUseInViewPage={ref} />
			{activeAsteroids.map(asteroid => (
				<Asteroid key={asteroid.id} asteroid={asteroid} needButton={true} />
			))}
			{!inView && (
				<div className={`${styles.arrowTop} ${styles.arrowTopHelper}`}>
					<BtnUpArrow />
				</div>
			)}
		</>
	)
}

export { DestroyPage }
