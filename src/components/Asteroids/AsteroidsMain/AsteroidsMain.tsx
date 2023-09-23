import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'

import styles from './AsteroidsMain.module.css'

import { AsteroidsMainProps } from './AsteroidsMain.type'
import { DoubleArrow } from '../../../svg'
import { Button, Error, Loader } from '../../../UI'
import Dangerous from '../../../img/Dangerous.png'

import { fetchAsteroids } from '../../../store/asteroids/asteroidsSlice'

import getCurrentDate from '../../../actions/getCurrentDate'
import {
	getImageSrc,
	getActiveKilometers,
	getName,
	getDiameter,
	getData
} from './AsteroidsMain.actions'

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
				<div className={styles.container} key={asteroid.id}>
					<h3 className={styles.h3}>{getData(asteroid)}</h3>
					<div className={styles.container__main}>
						<div>
							<p className={styles.container__main_left}>
								{getActiveKilometers(activeKilometers, asteroid)}
							</p>
							<DoubleArrow />
						</div>
						<img
							className={styles.asteroid}
							src={getImageSrc(asteroid)}
							alt={getImageSrc(asteroid)}
						/>
						<div>
							<h3 className={styles.year}>{getName(asteroid)}</h3>
							<p className={styles.pm}>Ø {getDiameter(asteroid)} м</p>
						</div>
					</div>
					<div className={styles.footer}>
						<Button text='choose' style='default' />
						{asteroid.is_potentially_hazardous_asteroid ? (
							<>
								<img className={styles.img} src={Dangerous} alt='' />{' '}
								<p className={styles.danger}>Dangerous</p>{' '}
							</>
						) : null}
					</div>
				</div>
			))}
			<div ref={ref}>
				{status === 'pending' && <Loader />}
				{status === 'rejected' && <Error />}
			</div>
		</div>
	)
}

export default AsteroidsMain
