import { useNavigate } from 'react-router-dom'
import { Button } from '../../../UI'
import { useAppSelector } from '../../../hooks/redux'

import styles from './AsteroidAside.module.css'

const AsteroidsFooter = () => {
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
			<Button text='destroy' style="aside" click={goDestroy} />
		</div>
	)
}

export default AsteroidsFooter
