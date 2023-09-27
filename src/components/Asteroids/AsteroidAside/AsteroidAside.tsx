import { useNavigate } from 'react-router-dom'
import { Button } from '../../../UI'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'

import styles from './AsteroidAside.module.css'
import { deleteAsteroids } from '../../../store/asteroids/asteroidsSlice'

const AsteroidsFooter = () => {
	const dispatch = useAppDispatch()
	const { countAsteroids } = useAppSelector(state => state.asteroids)
	const navigate = useNavigate()

	const goDestroy = () => {
		navigate(`/asteroids/destroy`)
	}

	if (countAsteroids < 1) {
		return <></>
	}

	return (
		<div className={styles.container}>
			<div>
				<h3>Basket</h3>
				<p>
					{countAsteroids} {countAsteroids > 1 ? 'asteroids' : 'asteroid'}
				</p>
			</div>
			<Button text='destroy' style='aside' click={goDestroy} />
			<Button text='delete' style='aside' click={deleteAsteroids} />
		</div>
	)
}

export default AsteroidsFooter
