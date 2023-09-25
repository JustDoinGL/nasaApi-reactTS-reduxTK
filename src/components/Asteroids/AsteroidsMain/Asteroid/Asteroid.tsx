import { incrementAsteroids } from '../../../../store/asteroids/asteroidsSlice'
import {
	getActiveKilometers,
	getData,
	getDiameter,
	getImageSrc,
	getName
} from './Asteroid.actions'

import { AsteroidProps } from './Asteroid.type'

import { DoubleArrow } from '../../../../svg/index'
import Dangerous from '../../../../img/Dangerous.png'

import { Button } from '../../../../UI'

import styles from './Asteroid.module.css'

const Asteroid = ({
	asteroid,
	activeKilometers = false,
	needButton
}: AsteroidProps) => {
	return (
		<div className={styles.container}>
			<h3 className={styles.h3}>{getData(asteroid)}</h3>
			<div className={styles.container__main}>
				<div>
					<p className={styles.container__main_left}>
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
			<div className={styles.footer}>
				{needButton && (
					<Button
						text='choose'
						style='default'
						click={incrementAsteroids}
						asteroid={asteroid}
					/>
				)}
				{asteroid.is_potentially_hazardous_asteroid ? (
					<>
						<img className={styles.img} src={Dangerous} alt='Dangerous' />
						<p className={styles.danger}>Dangerous</p>
					</>
				) : null}
			</div>
		</div>
	)
}

export default Asteroid
