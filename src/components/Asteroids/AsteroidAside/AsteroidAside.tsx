import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../../hooks/redux'

import { deleteAsteroids, getAsteroidsSelector } from '../../../redux/asteroids/asteroidsSlice'

import { Button } from '../../../UI'

import styles from './AsteroidAside.module.css'

export const AsteroidAside = () => {
	const { countAsteroids } = useAppSelector(getAsteroidsSelector)
	const navigate = useNavigate()

	const goDestroy = () => {
		navigate(`/asteroids/destroy`)
	}

	if (countAsteroids < 1) {
		return null
	}

	return (
		<div className={styles.container}>
			<div>
				<h3>Basket</h3>
				<p>
					{countAsteroids} {countAsteroids > 1 ? 'asteroids' : 'asteroid'}
				</p>
			</div>
			<Button text='destroy' styleProps='aside' click={goDestroy} />
			<Button text='delete' styleProps='aside' click={deleteAsteroids} />
		</div>
	)
}


