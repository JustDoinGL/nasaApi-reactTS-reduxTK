import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'

import { getAsteroid } from '../../../store/asteroids/asteroidsSlice'

import Asteroid from '../../../components/Asteroids/AsteroidsMain/Asteroid/Asteroid'
import { AsteroidsHeader } from '../../../components/Asteroids'

const AsteroidPage = () => {
	const { id } = useParams()
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (id) {
			dispatch(getAsteroid(id))
		}
	}, [id])
	
	const { asteroid } = useAppSelector(store => store.asteroids)
	return (
		<>
		<AsteroidsHeader />
			{asteroid.map(el => (
				<Asteroid needButton={true} asteroid={el} key={id}/>
			))}
		</>
	)
}

export { AsteroidPage }
