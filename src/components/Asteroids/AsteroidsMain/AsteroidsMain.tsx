import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { useInView } from 'react-intersection-observer'

import getCurrentDate from '../../../actions/getCurrentDate'

import { AsteroidsMainProps } from './AsteroidsMain.type'

import {
	fetchAsteroids,
	asteroidsData
} from '../../../store/asteroids/asteroidsSlice'

import { BtnUpArrow, LoadError } from '../../../UI'
import Asteroid from './Asteroid/Asteroid'

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

	const renderAsteroids = () =>
		arrAsteroids?.map(asteroid => (
			<Asteroid key={asteroid.id} asteroid={asteroid} needButton={true} />
		))

	const renderArrowTop = () => (
		<div
			className={
				countAsteroids > 0
					? styles.arrowTop
					: `${styles.arrowTop} ${styles.arrowTopHelper}`
			}
		>
			<BtnUpArrow />
		</div>
	)

	return (
		<div className={styles.main}>
			{renderAsteroids()}
			{!inViewPage && renderArrowTop()}
			<div ref={ref} className={styles.helper}>
				{status !== 'fulfilled' && <LoadError status={status} />}
			</div>
		</div>
	)
}

export default AsteroidsMain
