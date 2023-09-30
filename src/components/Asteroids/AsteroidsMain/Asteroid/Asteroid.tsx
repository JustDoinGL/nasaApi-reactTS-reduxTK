import { incrementAsteroids } from '../../../../store/asteroids/asteroidsSlice'

import { Link } from 'react-router-dom'

import { AsteroidProps } from './Asteroid.type'

import Dangerous from '../../../../img/Dangerous.png'

import { Button } from '../../../../UI'

import styles from './Asteroid.module.css'
import AsteroidHeader from './AsteroidHeader/AsteroidHeader'

const Asteroid = ({
	asteroid,
	needButton,
}: AsteroidProps) => {
	return (
		<div className={styles.container}>
			<Link to={`/asteroids/${asteroid.id}`} className={styles.link}>
				<AsteroidHeader key={asteroid.id} asteroid={asteroid} />
			</Link>
			<div className={styles.footer}>
				{needButton && (
					<Button
						text='choose'
						styleProps='default'
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
