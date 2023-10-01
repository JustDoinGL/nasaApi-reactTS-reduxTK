import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'

import { BtnUpArrow, LoadError } from '../../../UI'

import {
	fetchAsteroids,
	asteroidsData
} from '../../../store/asteroids/asteroidsSlice'

import getCurrentDate from '../../../actions/getCurrentDate'

import Asteroid from './Asteroid/Asteroid'

import { AsteroidsMainProps } from './AsteroidsMain.type'

import styles from './AsteroidsMain.module.css'

const AsteroidsMain = ({ inViewPage }: AsteroidsMainProps) => {
	const dispatch = useAppDispatch()

	const { status, arrAsteroids, data, countAsteroids } = useAppSelector(
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
				<Asteroid key={asteroid.id} asteroid={asteroid} needButton={true} />
			))}
			{!inViewPage && (
				<div className={countAsteroids > 0 ? styles.arrowTop : `${styles.arrowTop} ${styles.arrowTopHelper}` }>
					<BtnUpArrow />
				</div>
			)}
			<div ref={ref} className={styles.helper}>
				{status !== 'fulfilled' && <LoadError status={status} />}
			</div>
		</div>
	)
}

export default AsteroidsMain
