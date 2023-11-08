import { useAppSelector } from '../../../../../hooks/redux'

import {
	getActiveKilometers,
	getData,
	getDiameter,
	getImageSrc,
	getName
} from '.././Asteroid.actions'
import { getAsteroidsSelector } from '../../../../../redux/asteroids/asteroidsSlice'

import { AsteroidHeaderProps } from './AsteroidHeader.type'

import { DoubleArrow } from '../../../../../assets/svg/index'

import styles from './AsteroidHeader.module.css'

export const AsteroidHeader = ({ asteroid }: AsteroidHeaderProps) => {
	const { activeKilometers } = useAppSelector(getAsteroidsSelector)
	return (
		<>
			<h3 className={styles.h3}>{getData(asteroid)}</h3>
			<div className={styles.container}>
				<div>
					<p className={styles.main}>
						{getActiveKilometers(activeKilometers, asteroid)}
					</p>
					<DoubleArrow />
				</div>
				<img
					className={styles.asteroid}
					src={getImageSrc(asteroid)}
					alt={getImageSrc(asteroid)}
				/>
				<div>
					<h3 className={styles.year}>{getName(asteroid)}</h3>
					<p className={styles.pm}>Ø {getDiameter(asteroid)} м</p>
				</div>
			</div>
		</>
	)
}

