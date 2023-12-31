import { incrementAsteroids } from '../../../../redux/asteroids/asteroidsSlice'

import { Link } from 'react-router-dom'

import { AsteroidProps } from './Asteroid.type'

import Dangerous from '../../../../assets/img/Dangerous.png'

import { Button } from '../../../../UI'

import styles from './Asteroid.module.css'
import { AsteroidHeader } from './AsteroidHeader/AsteroidHeader'

export const Asteroid = ({ asteroid, needButton, isLink = true }: AsteroidProps) => {
	const renderAsteroidHeader = () => (
		<AsteroidHeader key={asteroid.id} asteroid={asteroid} />
	)

	const renderLink = () => (
		<Link to={`/asteroids/${asteroid.id}`} className={styles.link}>
			{renderAsteroidHeader()}
		</Link>
	)

	const renderDangerousInfo = () => (
		<>
			<img className={styles.img} src={Dangerous} alt='Dangerous' />
			<p className={styles.danger}>Dangerous</p>
		</>
	)

	return (
		<div className={styles.container}>
			{isLink ? renderLink() : renderAsteroidHeader()}
			<div className={styles.footer}>
				{needButton && (
					<Button
						text='choose'
						styleProps='default'
						click={incrementAsteroids}
						asteroid={asteroid}
					/>
				)}
				{asteroid.is_potentially_hazardous_asteroid && renderDangerousInfo()}
			</div>
		</div>
	)
}

