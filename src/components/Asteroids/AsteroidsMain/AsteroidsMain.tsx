import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'

import { Error, Loader } from '../../../UI'

import {
	fetchAsteroids,
	asteroidsData
} from '../../../store/asteroids/asteroidsSlice'

import getCurrentDate from '../../../actions/getCurrentDate'

import Asteroid from './Asteroid/Asteroid'

import styles from './AsteroidsMain.module.css'

const AsteroidsMain = () => {
	const dispatch = useAppDispatch()
	
	const { status, arrAsteroids, data, activeKilometers } = useAppSelector(
		state => state.asteroids
	)

	const { ref, inView } = useInView()

	useEffect(() => {
		const fetchData = async () => {
			const getData = getCurrentDate(data)
			await dispatch(fetchAsteroids(getData))
		}
		if (inView) {
			fetchData()
			if (status !== 'rejected') {
				dispatch(asteroidsData())
			}
		}
	}, [inView, dispatch])

	return (
		<div className={styles.main}>
			{arrAsteroids?.map(asteroid => (
				<Asteroid
					key={asteroid.id}
					asteroid={asteroid}
					needButton={true}
				/>
			))}
			<div ref={ref} className={styles.helper}>
				{status === 'pending' && <Loader />}
				{status === 'rejected' && <Error />}
			</div>
		</div>
	)
}

export default AsteroidsMain
