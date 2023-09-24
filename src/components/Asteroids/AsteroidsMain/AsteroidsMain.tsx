import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'

import styles from './AsteroidsMain.module.css'

import { AsteroidsMainProps } from './AsteroidsMain.type'
import { Error, Loader } from '../../../UI'

import { fetchAsteroids } from '../../../store/asteroids/asteroidsSlice'

import getCurrentDate from '../../../actions/getCurrentDate'

import Asteroid from './Asteroid/Asteroid'

const AsteroidsMain = ({ activeKilometers }: AsteroidsMainProps) => {
	const dispatch = useAppDispatch()
	const [day, setDay] = useState(0)
	const { ref, inView } = useInView()

	const { status, arrAsteroids } = useAppSelector(state => state.asteroids)

	useEffect(() => {
		const fetchData = async () => {
			const date = getCurrentDate(day)
			await dispatch(fetchAsteroids(date))
		}
		if (inView) {
			fetchData()
			setDay(el => el + 1)
		}
	}, [dispatch, inView])

	return (
		<div className={styles.main}>
			{arrAsteroids?.map(asteroid => (
				<Asteroid
					key={asteroid.id}
					asteroid={asteroid}
					activeKilometers={activeKilometers}
					needButton={true}
				/>
			))}
			<div ref={ref}>
				{status === 'pending' && <Loader />}
				{status === 'rejected' && <Error />}
			</div>
		</div>
	)
}

export default AsteroidsMain
