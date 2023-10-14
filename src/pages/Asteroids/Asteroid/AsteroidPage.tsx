import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'

import { getAsteroid } from '../../../store/asteroids/asteroidsSlice'

import { Asteroid, AsteroidsHeader } from '../../../components/Asteroids'

const AsteroidPage = () => {
	const { id } = useParams()
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (id) {
			dispatch(getAsteroid(id))
		}
	}, [id])

	const { asteroid } = useAppSelector(state => state.asteroids)
	return (
		<>
			<AsteroidsHeader title='Information about the astroid' />
			{asteroid.map(el => (
				<Asteroid needButton={true} asteroid={el} key={id} isLink={false} />
			))}
		</>
	)
}

export { AsteroidPage }
